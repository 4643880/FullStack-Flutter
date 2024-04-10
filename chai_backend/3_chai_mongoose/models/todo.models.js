import mongoose from 'mongoose';

const todoScheme = new mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },
    complete: {
      type: Boolean,
      default: false,
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    subTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'SubTodo',
      },
    ],
  },
  { timestamps: true }
);

// adding an object {timestamps : true} it will create two more fileds createdAt & updateAt

export const Todo = mongoose.model('Todo', todoScheme);
