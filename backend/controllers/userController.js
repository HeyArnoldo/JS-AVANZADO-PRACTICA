const User = require("../models/userModel");


exports.getUsers = async (req, res, next) => {

    try {

        const users = await User.getAll();

        res.json(users);

    } catch(error){

        next(error);

    }

};



exports.getUserById = async (req,res,next)=>{

    try{

        const user = await User.getById(req.params.id);

        if(!user){
            return res.status(404).json({
                message:"Usuario no encontrado"
            });
        }

        res.json(user);

    }catch(error){

        next(error);

    }

};



exports.createUser = async(req,res,next)=>{

    try{

        const id = await User.create(req.body);

        res.status(201).json({
            id,
            message:"Usuario creado correctamente"
        });


    }catch(error){

        next(error);

    }

};



exports.updateUser = async(req,res,next)=>{

    try{

        res.json({
            message:"Usuario actualizado"
        });

    }catch(error){

        next(error);

    }

};



exports.deleteUser = async(req,res,next)=>{

    try{

        res.json({
            message:"Usuario eliminado"
        });

    }catch(error){

        next(error);

    }

};