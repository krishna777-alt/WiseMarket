import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import app from "./app.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 3000;

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);

mongoose
  .connect(DB)
  .then(() => console.log("Database connected Successfully :)"))
  .catch((err) => console.log(`Failed to connect DB,ERROR:${err}`));

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
