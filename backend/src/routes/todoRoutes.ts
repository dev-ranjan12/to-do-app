import express from 'express';
import { getTodos, createTodo, deleteTodo, updateTodo } from '../controllers/todoController';

const router = express.Router()

router.route('/').get(getTodos).post(createTodo);
router.route('/:id').put(updateTodo).delete(deleteTodo);

export default router;

