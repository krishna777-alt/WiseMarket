import multer from "multer";
import path from "path";

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
