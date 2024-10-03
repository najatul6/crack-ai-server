const express = require('express')
const app = express()
const port = process.env.PORT || 5000

// Make sure to include these imports:
// import { GoogleGenerativeAI } from "@google/generative-ai";
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const prompt = "Write a story about a magic backpack.";

const result = await model.generateContent(prompt);
console.log(result.response.text());

app.get('/', (req, res) =>{
    res.send({data:"Hello, this is the API endpoint for the simple Express server",status: 200})
})
app.listen(port,()=>{
    console.log("server listening on port"+port);
})