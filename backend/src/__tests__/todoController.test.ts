import { Request } from "supertest";
import express from 'express';
import todoRoutes from '../routes/todoRoutes';
import connectDB from "../config/db";
import Todo from "../models/todoModel";
import mongoose from "mongoose";
import { request } from "http";

const app = express()
app.use(express.json());
app.use("/api/todo/", todoRoutes);

beforeAll( async ()=>{
    await connectDB();
});

afterAll( async () => {
    await Todo.deleteMany({});
    await mongoose.disconnect();
});

describe("Todo Api", () =>{
    it('should fetch all todos', async () =>{
        const res = await request(app).get('/api/todos');
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBe(true);
    });
    it('should create a new todo', async () =>{
        const res = await request(app).post('/api/todos').send({ text: 'Test Todo' });
        expect(res.status).toBe(201);
        expect(res.body.text).toBe('Test Todo')
    });
    it('should update a todo', async () =>{
        const todo = await Todo.create({ text : 'Update Test Todo' });
        const res = await request(app).put('/api/todos/${:todo_id}').send({ completed: true });
        expect(res.status).toBe(200);
        expect(res.body.completed).toBe(true);
    });
    it('should delete a todo', async () => {
        const todo = await Todo.create({ text: 'Delete Test Todo' });
        const res = await request(app).delete('/api/todos/${todo_id}');
        expect(res.status).toBe(200);
        expect(res.body.message).toBe('Todo deleted');
    });
});


