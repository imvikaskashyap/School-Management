const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const cors = require("cors");

const dotenv = require("dotenv");

dotenv.config();

const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(cors());
app.use("/schoolImages", express.static("schoolImages"));

app.get("/", (req, res) => {
  res.send("HIII");
});
const schoolRouter = require("./routes/schoolRoute");
app.use("/api/v1/school", schoolRouter);

app.listen(port, () => {
  console.log(`Server is running up and down by PORT: ${port}`);
});
