const { getImageData } = require("../utils/getImageData");
const getImageUrl = require("../utils/getImageUrl");

const testRoute = (req, res) => {
  res.send("Hello World form controller");
};

const generatePaint = async (req, res) => {
  const { body } = req || {};
  const { prompt } = body || {};
  const buffer = await getImageData(prompt);
  const imageData= await getImageUrl(buffer,prompt)
  res.send(imageData);
};

module.exports = { testRoute,generatePaint };
