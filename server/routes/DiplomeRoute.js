import express from 'express';
import {getDiplomes, getDiplomeById, createDiplome, updateDiplome, deleteDiplome} from '../controllers/DiplomeController.js';

const router = express.Router();
router.get('/diplomes', getDiplomes);
router.get('/diplome/:id', getDiplomeById);
router.post('/diplome', createDiplome);
router.patch('/diplome/:id', updateDiplome);
router.delete('/diplome/:id', deleteDiplome);

export default router;