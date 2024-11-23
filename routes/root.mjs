import express from "express";
const router = express.Router();

// Route cho trang chủ
router.get("/", (req, res) => {
  res.render("index", { title: "Home" });
});

export default router;
