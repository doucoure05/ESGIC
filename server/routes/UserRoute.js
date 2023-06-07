import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser, getUsserByLoginAndPassword } from '../controllers/UserController.js';

const router = express.Router();
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', createUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);
router.post("/userByLoginAndPass", getUsserByLoginAndPassword);
export default router;