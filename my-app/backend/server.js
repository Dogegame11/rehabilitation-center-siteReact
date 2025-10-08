import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;
const jsonParser = bodyParser.json();

app.use(cors());
app.use(jsonParser);

app.listen(PORT, () => console.log(`server running on port ${PORT}`));

mongoose
  .connect("mongodb://127.0.0.1:27017/react-site")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
