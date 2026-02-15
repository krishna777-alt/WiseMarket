const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      required: [true, "Cart must belong to a user"],
    },
    items: [
      {
        product: {
          type: mongoose.Schema.ObjectId,
          ref: "Product",
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
          min: [1, "Quantity cannot be less than 1"],
          default: 1,
        },
        price: {
          type: Number,
          required: true,
        }, // We store price at time of adding to track fluctuations
      },
    ],
    bill: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

// Middleware to calculate total bill before saving
cartSchema.pre("save", function (next) {
  this.bill = this.items.reduce((total, item) => {
    return total + item.quantity * item.price;
  }, 0);
  next();
});

const Cart = mongoose.model("Cart", cartSchema);

module.exports = Cart;
