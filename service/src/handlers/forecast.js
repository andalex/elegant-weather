const serverless = require("serverless-http");
const express = require("express");
const { getSecret } = require('../getSecret.js');
const { wrap } = require('../utils/asyncWrapper.js');

const BASE_URL = "http://api.weatherapi.com";

const API_VERSION = "v1";

const app = express();

/**
 * TODO
 * Make proxy for weather API
 * support all methods
 * support APIS i.e. forecast, alerts, etc.
 */
app.get("/v1/*", wrap(async (req, res, next) => {
  const secret = await getSecret();

  try {
    weatherRes = await fetch(`http://api.weatherapi.com${req.path}?key=${secret.WEATHERAPI_KEY}&${new URLSearchParams(req.query).toString()}`);
    await weatherRes.json().then(data => {
      res.status(200).json(data);
    });
  } catch(e) {
    return res.status(400).json(e);
  }
}));

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Resource Not Found",
  });
});

module.exports.handler = serverless(app);
