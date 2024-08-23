import mongoose, { Document,Mongoose,Schema } from "mongoose";

export interface ITodo extends Document {
    text: string,
    completed: boolean
};

const todoSchema: Schema = new Schema(
    {
        text: {
            type: String,
            required: [true, "Please add a text value"],
        },
        completed: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Todo = mongoose.model<ITodo>('Todo', todoSchema);

export default Todo;