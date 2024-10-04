const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const { GoogleGenerativeAI } = require("@google/generative-ai");
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const form = `
<form method="POST" action="/prompt">
<textarea name="prompt" id="prompt"></textarea>
<button type="submit">Prompt</button>
</form>

`;

app.use(express.urlencoded({ extends: true }));
app.get("/prompt", async (req, res) => {
  res.send(form);
});

app.post("/prompt", async (req, res) => {
  let { prompt } = req.body;
  prompt = prompt + ". data will be in json stringify version. no extra text";
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
