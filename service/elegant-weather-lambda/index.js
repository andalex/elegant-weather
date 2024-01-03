const serverless = require("serverless-http");
const express = require("express");
const app = express();
const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");

const getSecret = async () => {

  const secret_name = "prod/elegant-weather/weatherapi-key";

  const client = new SecretsManagerClient({
    region: "us-east-1",
  });
  
  let response;
  
  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: secret_name,
        VersionStage: "AWSCURRENT", // VersionStage defaults to AWSCURRENT if unspecified
      })
    );
  } catch (error) {
    // For a list of exceptions thrown, see
    // https://docs.aws.amazon.com/secretsmanager/latest/apireference/API_GetSecretValue.html
    throw error;
  }

  return response;
}

const wrap = fn => (...args) => fn(...args).catch(args[2])

app.get("/", wrap( async (req, res, next) => {
  const secret = await getSecret();
  return res.status(200).json({
    message: `Hello from root! ${secret}`,
  });
}));

app.get("/path", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from path!",
  });
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports.handler = serverless(app);
