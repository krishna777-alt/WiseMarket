import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import session from "express-session";
import dotenv from "dotenv";
import multer from "multer";

import userRouter from "./routes/userRoute.js";
import clientRouter from "./routes/clientRoute.js";

dotenv.config({ path: "./.env" });

const app = express();

app.use("static", express.static("/uploads"));

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173", // ✅ must match React origin
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  }),
);
app.use(cookieParser());

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  }),
);

app.use("/api/v1/user", userRouter);
app.use("/api/v1/client", clientRouter);

export default app;
