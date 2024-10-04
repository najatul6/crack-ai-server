const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.use(express.urlencoded({ extends: true }));

const form = `
<form method="POST" action="/prompt">
<textarea name="prompt" id="prompt"></textarea>
<button type="submit">Prompt</button>
</form>

`;

app.get("/prompt", async(req, res) => {
  res.send(form);
});

app.post("/prompt", async (req, res) => {
  const prompt = req.body;
  const result = await model.generateContent(prompt);
  const text = result.response.text();
  res.send({ data: text, status: 200 });
});

app.get("/", (req, res) => {
  res.send({
    data: "Hello, this is the API endpoint for the simple Express server",
    status: 200,
  });
});
app.listen(port, () => {
  console.log("server listening on port" + port);
});
