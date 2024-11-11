import express from "express";
import userRoutes from "./routes/user-router.js";

const app = express();

// utils
import { PORT } from "./configs/serverConfig.js";
import connectDB from "./configs/dbConfig.js";

//
connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use("/api/user", userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
