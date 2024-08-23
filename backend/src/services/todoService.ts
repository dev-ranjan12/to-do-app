import todoRepository from "../repositories/todoRepository";
import { ITodo } from "../models/todoModel";

const getTodos = async (): Promise<ITodo[]> => {
    return await todoRepository.findAll();
};

const getTodoById = async (id : string) : Promise<ITodo | null> => {
    return await todoRepository.findById(id);
};

const createTodo = async (data : Partial<ITodo>) : Promise<ITodo> => {
    return await todoRepository.create( data );
};

const updateTodo = async (id: string, data: Partial<ITodo>) : Promise<ITodo | null > => {
    return await todoRepository.update( id , data );
};

const removeTodo = async (id:string) : Promise <ITodo | null> =>{
    return await todoRepository.remove(id);
};

export default {
    getTodos,
    getTodoById,
    createTodo,
    updateTodo,
    removeTodo,
};
