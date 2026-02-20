import express from "express";
import {
  getCategory,
  uploadProduct,
  uploadProductImage,
} from "../controllers/clientController.js";

const router = express.Router();

router.post("/uploadProduct", uploadProductImage, uploadProduct);
router.get("/getCategories", getCategory);

export default router;
