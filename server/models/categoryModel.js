import mongoose from "mongoose";
import slugify from "slugify";

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true,
      maxlength: [32, "Category name is too long"],
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
    },
    image: {
      type: String,
      required: [true, "A category needs an icon or image"],
      default: "no image",
    },

    isActive: {
      type: Boolean,
      default: true,
    },
    displayOrder: {
      type: Number,
      default: 0, // Helps you sort which category shows first in the navbar
    },
  },
  {
    timestamps: true,
  },
);

// Automatically generate slug before saving (e.g., "Dairy & Eggs" -> "dairy-and-eggs")
categorySchema.pre("save", function () {
  if (this.isModified("name")) {
    this.slug = slugify(this.name, { lower: true, strict: true });
  }
});

const Category = mongoose.model("Category", categorySchema);

export default Category;
