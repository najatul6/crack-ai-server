const { getImageData } = require("../utils/getImageData");

const testRoute = (req, res) => {
  res.send("Hello World form controller");
};

const generatePaint = async (req, res) => {
  const { body } = req || {};
  const { prompt } = body || {};
  const buffer = await getImageData(prompt);
  res.send(buffer);
};

module.exports = { testRoute,generatePaint };
