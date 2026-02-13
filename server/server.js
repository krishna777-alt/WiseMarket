import dotenv from "dotenv";
import mongoose from "mongoose";

import app from "./app.js";

const PORT = 3000 || process.env.PORT;

dotenv.config({ path: "./.env" });

const DB = process.env.DATABASE.replace("<PASSWORD>", process.env.PASSWORD);

mongoose
  .connect(DB)
  .then(() => console.log("Database connected Successfully :)"))
  .catch((err) => console.log(`Failed to connect DB,ERROR:${err}`));

app.listen(PORT, () => {
  console.log(`Server running on port:${PORT}`);
});
