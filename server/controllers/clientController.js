import multer from "multer";
import path from "path";
import Product from "../models/productModel.js";

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

    // const product = await Product.create({
    //   name,
    //   brand,
    //   category,
    //   unit,
    //   weight,
    //   price,
    //   discountPrice,
    //   stock,
    //   isFeatured: featured,
    //   description,
    //   image,
    // });
    res.status(201).json({ message: "Success", Data: [featured, category] });
  } catch (err) {
    res.status(500).json({ status: 500, message: err.message });
  }
};
