import mongoose from "mongoose";
import { Product } from "./product.models";

const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },

  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new mongoose.Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },

    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    orderItems: {
      type: [orderItemSchema],
    },

    address: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Pending", "Processing", "Shipped", "Delivered", "Cancelled"],
      default: "Pending", // Default status is Pending when creating a new order.  This can be updated to reflect actual shipping status when the order is shipped.  Also, this should be updated when a product is added to an order.  This can be updated to reflect actual delivered status when the order is delivered.  Also, this should be updated when a product is cancelled from an order.  This can be updated to reflect actual cancelled status when the order is cancelled.  Also, this should be updated when a product is returned from an order.  This can be updated to reflect actual returned status when the order is returned.  Also, this should be updated when a product is refunded from an order.  This can be updated to reflect actual refunded status when the order is refunded.  Also, this should be updated when a product
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model("Order", orderSchema);
