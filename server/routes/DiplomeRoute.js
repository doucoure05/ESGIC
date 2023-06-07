import express from 'express';
import {getDiplomes, getDiplomeById, createDiplome, updateDiplome, deleteDiplome} from '../controllers/DiplomeController.js';

const router = express.Router();
router.get('/diplomes', getDiplomes);
router.get('/diplomes/:id', getDiplomeById);
router.post('/diplomes', createDiplome);
router.patch('/diplomes/:id', updateDiplome);
router.delete('/diplomes/:id', deleteDiplome);

export default router;