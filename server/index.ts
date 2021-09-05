// Dotenv config
import dotenv from "dotenv";
dotenv.config();
// Public Libraries
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
// Database
import "./config/database";
// Global variables
const PORT = process.env.PORT || 5000;
// Middlewares
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan("dev"));
app.use(cookieParser());
// Routes
app.get("/", (req, res) => {
  res.json({ msg: "Testing backend response" });
});
// Listening server
app.listen(PORT, () => {
  console.log("server listening on port", PORT);
});
