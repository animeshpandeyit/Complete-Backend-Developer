import mongoose from "mongoose";
import { SubTodo } from "./sub_todo.models";

const todoSchema = mongoose.Schema(
  {
    content: {
      type: String,
      required: true,
    },

    complete: {
      type: Boolean,
      default: false,
    },

    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    // SubTodos: {
    //   type: [SubTodo.schema],
    //   default: [],
    // },
    SubTodos: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ],
    // array of subtodos
  },
  { timestamps: true }
);

export const Todo = mongoose.model("Todo", todoSchema);
