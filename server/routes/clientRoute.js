import express from "express";
import {
  uploadProduct,
  uploadProductImage,
} from "../controllers/clientController.js";

const router = express.Router();

router.post("/uploadProduct", uploadProductImage, uploadProduct);

export default router;
