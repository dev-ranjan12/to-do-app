import { Request, Response } from "express";
import todoService from "../services/todoService";
import { error } from "console";


export const getTodos = async (req : Request , res: Response) : Promise <Response> =>{
    try{
        const todos = await todoService.getTodos();
        return res.status(200).json(todos);
    }catch(error){
        return res.status(500).json({ message : 'Server error' });
    }
};

export const createTodo = async (req : Request, res: Response) : Promise <Response> => {
    try{
        const newTodo = await todoService.createTodo(req.body);
        return res.status(201).json(newTodo);
    }catch(error){
        return res.status(500).json( {message : 'Server error'} );
    }
};

export const updateTodo = async (req : Request, res: Response) : Promise <Response> => {
    try{
        const updatedTodo = await todoService.updateTodo(req.params.id,req.body);
        if(!updatedTodo){
           return res.status(404).json({ message: 'Todo not found' });
        }
        return res.status(200).json(updateTodo);
    }catch( error ){
        return res.status(500).json({ message: 'Server error' });
    }
};

export const deleteTodo = async (req: Request, res : Response): Promise<Response> => {
    try{
        const deletedTodo = await todoService.removeTodo(req.params.id);
        if(!deletedTodo){
            return res.status(404).json({ message : 'Todo not found' });
        }
        return res.status(200).json({message: 'Todo deleted'});
    }catch(error){
        return res.status( 500 ).json({message: 'Server error'});
    }
};