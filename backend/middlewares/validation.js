exports.validateCreate = (req,res,next)=>{
    console.log(req.body);

    const {name,email}=req.body;

    if(!name || !email){

        return res.status(400).json({
            message:"Datos incompletos"
        });

    }

    next();

};


exports.validateUpdate = (req,res,next)=>{

    next();

};