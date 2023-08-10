var Diplome = require('../models/DiplomeModel.js');

 const getDiplomes = async (req, res) => {
    try {
        const response = await Diplome.findAll();
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

 const getDiplomeById = async (req, res) => {
    try {
        const response = await Diplome.findOne({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json(response);
    } catch (error) {
        console.log(error.message);
    }
}

 const createDiplome = async (req, res) => {
    try {
        await Diplome.create(req.body);       
        res.status(201).json({msg: "Diplome created"});
    } catch (error) {
        console.log('*********************\n the current error'+error.message);
    }
}

 const updateDiplome = async (req, res) => {
    try {
        await Diplome.update(req.body, {
            where:{
                id: req.params.id
            }
        });       
        res.status(200).json({msg: "Diplome Updated"});
    } catch (error) {
        console.log(error.message);
    }
}

 const deleteDiplome = async (req, res) => {
    try {
        await Diplome.destroy({
            where:{
                id: req.params.id
            }
        });         
        res.status(200).json({msg: "Diplome deleted"});    
    } catch (error) {
        console.log(error.message);
    }
}