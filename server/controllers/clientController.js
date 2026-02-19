import multer from "multer";
import path from "path";
<<<<<<< HEAD
=======
import Product from "../models/productModel.js";
import Category from "../models/categoryModel.js";
>>>>>>> dev

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Use project cwd to resolve uploads directory so this works with ESM imports
    cb(null, path.join(process.cwd(), "uploads", "products"));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  // accept image/* mimetypes
  if (file.mimetype && file.mimetype.startsWith("image")) cb(null, true);
  else cb(null, false);
};

const upload = multer({ storage, fileFilter });

// export const uploadProductImage = upload.fields([
//   { name: "image", maxCount: 10 },
//   //   { name: "galleryImages", maxCount: 10 },
// ]);
export const uploadProductImage = upload.single("image");
<<<<<<< HEAD
export const uploadProduct = function (req, res) {
  try {
    console.log("FILE:", req.file);
    console.log("BODY", req.body);
    res
      .status(201)
      .json({ message: "Success", Data: req.body, image: req.file });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};
=======
export const uploadProduct = async function (req, res) {
  try {
    console.log("FILE:", req.file);
    console.log("BODY", req.body);
    const image = req.file.filename;
    const {
      name,
      brand,
      category,
      unit,
      weight,
      price,
      discountPrice,
      stock,
      featured,
      description,
    } = req.body;
    console.log("category:", category);
    const product = new Product({
      name,
      brand,
      category,
      unit,
      weight,
      price,
      discountPrice,
      stock,
      isFeatured: featured,
      description,
      image,
    });
    await product.save();
    res.status(201).json({ message: "Success", Data: [featured] });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
    console.log("ERROR:", err.message);
  }
};

export const getCategory = async function (req, res) {
  const category = await Category.find();
  res.status(200).json({ status: 200, category });
};
>>>>>>> dev
