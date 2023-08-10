import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser, getUsserByLoginAndPassword } from '../controllers/UserController.js';

const router = express.Router();
router.get('/users', getUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);
router.post("/userByLoginAndPass", getUsserByLoginAndPassword);
export default router;