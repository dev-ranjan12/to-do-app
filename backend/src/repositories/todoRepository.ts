import Todo from "../models/todoModel";
import { ITodo } from "../models/todoModel";

const findAll = async () : Promise<ITodo[]> => {
    return await Todo.find({});
};

const findById = async (id: string): Promise<ITodo | null> => {
    return await Todo.findById(id);
};

const create = async (data : Partial<ITodo>): Promise<ITodo> => {
    const todo = new Todo(data);
    return await todo.save();
};

const update = async (id: string, data: Partial<ITodo>) : Promise<ITodo | null> => {
    return await Todo.findByIdAndUpdate(id,data);
};

const remove = async (id : string) : Promise<ITodo | null> =>{
    return await Todo.findByIdAndDelete(id);
};

export default {
    findAll,
    findById,
    create,
    update,
    remove
};