import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import adminRouter from "./routes/admin-router.js";
import bookingsRouter from "./routes/booking-router.js";
import movieRouter from "./routes/movie-router.js";
import userRouter from "./routes/user-router.js";

dotenv.config();
const app = express();

// middlewears
app.use(cors());
app.use(express.json());
app.use("/user", userRouter);
app.use("/admin", adminRouter);
app.use("/movie", movieRouter);
app.use("/booking", bookingsRouter);

mongoose
  .connect(`${process.env.MONGO_URL}`)
  .then(() =>
    app.listen(5000, () =>
      console.log("Connected To Database And Server is running")
    )
  )
  .catch((e) => console.log(e));
