const { db } = require("../utils/dbConnect");
const { getImageData } = require("../utils/getImageData");
const getImageUrl = require("../utils/getImageUrl");

const paintingCollections = db.collection("paintings")
const testRoute = (req, res) => {
  res.send("Hello World form controller");
};

const generatePaint = async (req, res) => {
  const { body } = req || {};
  const { prompt, email, category, type } = body || {};
  const buffer = await getImageData(prompt);
  const imageData = await getImageUrl(buffer, prompt);
  const data = {
    prompt: prompt,
    title: imageData?.data?.title,
    thumb: imageData?.data?.thumb?.url,
    imageUrl: imageData?.data?.url,
    medium_url:imageData?.data?.medium?.url,
    email,
    category,
    type,
  };
  const result=await paintingCollections.insertOne(data)
  res.send(imageData);
};

module.exports = { testRoute, generatePaint };
