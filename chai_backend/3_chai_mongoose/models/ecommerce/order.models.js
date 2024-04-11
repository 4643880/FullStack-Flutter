import mongoose from 'mongoose';

const orderItemSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product',
    },
    quantity: {
      type: Number,
      default: 1,
      required: true,
    },
  },
  { timestamps: true }
);

export const OrderItem = mongoose.model('OrderItem', orderItemSchema);

const orderSchema = new mongoose.Schema(
  {
    orderItems: {
      type: [orderItemSchema], // 2 examples this is first e.g
      // type: [
      //   {
      //     type: mongoose.Schema.Types.ObjectId,
      //     ref: 'OrderItem'
      //   }
      // ],
    },
    totalAmout: {
      type: Number,
      required: true,
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: {
        values: ['PENDING', 'CANCELLED', 'DELIVERED'],
        default: 'PENDING',
        message: 'You can select only PENDING, CANCELLED or DELIVERED',
      },
    },
  },
  { timestamps: true }
);

export const Order = mongoose.model('Order', orderSchema);
