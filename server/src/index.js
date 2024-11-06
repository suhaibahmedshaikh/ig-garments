import express from "express";
const app = express();

// utils
import { PORT } from "./configs/serverConfig.js";
import connectDB from "./configs/dbConfig.js";

//
connectDB();

app.get("/", (req, res) => {
  res.send("Hello from Backend");
});

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
