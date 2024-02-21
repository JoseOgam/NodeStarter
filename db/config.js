const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const db = process.env.MONGO_URI;

mongoose
  .connect(db, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => console.log("db connected successfully"))
  .catch((e) => console.log(e.message));
