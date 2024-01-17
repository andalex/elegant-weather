const {
  SecretsManagerClient,
  GetSecretValueCommand,
} = require("@aws-sdk/client-secrets-manager");

const getSecret = async () => {
  const client = new SecretsManagerClient({
    region: "us-east-1",
  });

  let response;

  try {
    response = await client.send(
      new GetSecretValueCommand({
        SecretId: "prod/elegant-weather/weatherapi-key",
        VersionStage: "AWSCURRENT",
      })
    );
  } catch (error) {
    throw error;
  }

  return JSON.parse(response.SecretString);
};

module.exports.getSecret = getSecret;