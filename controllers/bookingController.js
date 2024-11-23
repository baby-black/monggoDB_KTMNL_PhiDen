import Booking from "../models/Booking.js";


export const getAllBookings = async (req, res) => {
  const bookings = await Booking.find({});
  res.render("listBookings", { bookings });
};

// Thêm mới đặt chỗ
export const addBooking = async (req, res) => {
  const { customerName, date, time } = req.body;
  await Booking.create({ customerName, date, time });
  res.redirect("/bookings");
};

// Lấy thông tin đặt chỗ để sửa
export const getEditBooking = async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  res.render("editBooking", { booking });
};

// Cập nhật thông tin đặt chỗ
export const updateBooking = async (req, res) => {
  const { customerName, date, time } = req.body;
  await Booking.findByIdAndUpdate(req.params.id, { customerName, date, time });
  res.redirect("/bookings");
};

// Hủy đặt chỗ
export const cancelBooking = async (req, res) => {
  await Booking.findByIdAndUpdate(req.params.id, { status: "Cancelled" });
  res.redirect("/bookings");
};
