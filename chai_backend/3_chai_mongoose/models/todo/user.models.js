import mongoose, { Mongoose } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: [true, 'password is required'],
    },
  },
  {
    timestamps: true,
  }
);

// adding an object {timestamps : true} it will create two more fileds createdAt & updateAt

export const User = mongoose.model('User', userSchema);
