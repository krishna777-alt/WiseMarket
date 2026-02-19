import express from "express";
import {
<<<<<<< HEAD
=======
  getCategory,
>>>>>>> dev
  uploadProduct,
  uploadProductImage,
} from "../controllers/clientController.js";

const router = express.Router();

router.post("/uploadProduct", uploadProductImage, uploadProduct);
<<<<<<< HEAD
=======
router.get("/getCategories", getCategory);
>>>>>>> dev

export default router;
