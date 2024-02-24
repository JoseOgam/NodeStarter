const express = require("express");
const cors = require("cors");
const bodyParse = require("body-parser");
const router = require("./router/router");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());
app.use(router);
app.get("/", (req, res) => {
  res.json({ message: "Hey! this is your server response" });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`server is running at port ${port}...`);
});

// KMWB84CM0J4Emxjn;
