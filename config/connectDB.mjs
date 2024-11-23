import mongoose from "mongoose";


export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://den101472:cuden123@cluster0.bw3tf.mongodb.net/your-database-name",
      {
        dbName: "bookings",  
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);  
  }
};
