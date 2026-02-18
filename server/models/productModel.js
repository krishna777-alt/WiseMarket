import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "A product must have a name"],
      trim: true,
      maxlength: [100, "Name is too long"],
    },
    // slug: {
    //   type: String,
    //   lowercase: true,
    //   unique: true,
    // },
    description: {
      type: String,
      required: [true, "Please provide a description"],
    },
    brand: {
      type: String,
      required: [true, "Brand name is required"],
    },
    category: {
      type: mongoose.Schema.ObjectId,
      ref: "Category", // Assuming you have a Category model
      required: [true, "Product must belong to a category"],
    },
    price: {
      type: Number,
      required: [true, "Product must have a price"],
      min: [0, "Price cannot be negative"],
    },
    discountPrice: {
      type: Number,
      validate: {
        validator: function (val) {
          // "this" only works on doc creation, not update
          return val < this.price;
        },
        message: "Discount price ({VALUE}) must be lower than regular price",
      },
    },
    unit: {
      type: String,
      required: [true, "Specify unit (e.g., kg, oz, pack, ml)"],
      enum: ["kg", "g", "lb", "ml", "l", "pcs", "pack"],
    },
    weight: {
      type: Number,
      required: [true, "Weight/Volume is required for groceries"],
    },
    stock: {
      type: Number,
      required: [true, "Stock quantity is required"],
      default: 0,
    },
    image: String, // Array of URLs
    isFeatured: {
      type: String,
      default: "off",
    },

    ratingsAverage: {
      type: Number,
      default: 4.5,
      min: [1, "Rating must be above 1.0"],
      max: [5, "Rating must be below 5.0"],
      set: (val) => Math.round(val * 10) / 10,
    },
    ratingsQuantity: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  },
);

// Indexing for faster searches on common queries
productSchema.index({ name: "text", brand: "text" });
productSchema.index({ slug: 1 });

const Product = mongoose.model("Product", productSchema);

export default Product;
