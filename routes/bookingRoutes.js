import express from "express";
import {
  getAllBookings,
  addBooking,
  getEditBooking,
  updateBooking,
  cancelBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

router.get("/", getAllBookings); // Hiển thị danh sách đặt chỗ
router.post("/", addBooking); // Thêm mới đặt chỗ
router.get("/:id/edit", getEditBooking); // Lấy form sửa đặt chỗ
router.put("/:id", updateBooking); // Cập nhật đặt chỗ
router.patch("/:id/cancel", cancelBooking); // Hủy đặt chỗ

export default router;
