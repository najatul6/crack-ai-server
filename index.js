const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const cors = require("cors");
const { connect } = require("./utils/dbConnect");

// Global Middleware
app.use(cors());
app.use(express.json());

// Database Connect
connect();

// Routes
const paintingRoutes = require("./routes/paintings.route");
app.use("/paintings", paintingRoutes)

app.get("/", (req, res) => {
  res.send({
    data: "Hello, this is the API endpoint for the simple Express server",
    status: 200,
  });
});
app.listen(port, () => {
  console.log("server listening on port " + port);
});
