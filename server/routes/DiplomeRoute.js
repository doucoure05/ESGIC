const express = require('express');
const getDiplomes = require('../controllers/DiplomeController.js');
const getDiplomeById = require('../controllers/DiplomeController.js');
const createDiplome = require('../controllers/DiplomeController.js');
const updateDiplome = require('../controllers/DiplomeController.js');
const deleteDiplome = require('../controllers/DiplomeController.js');
const router = express.Router();
router.get('/diplomes', getDiplomes);
router.get('/diplome/:id', getDiplomeById);
router.post('/diplome', createDiplome);
router.patch('/diplome/:id', updateDiplome);
router.delete('/diplome/:id', deleteDiplome);

export default router;