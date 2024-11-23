import express from "express";
import path from "path";
import { connectDB } from "./config/connectDB.mjs";


const app = express();

connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const __dirname = path.dirname(new URL(import.meta.url).pathname); // Thay thế __dirname
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); // Sử dụng __dirname ở đây

app.get("/", (req, res) => {
  res.send("Welcome to the Booking System!");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
