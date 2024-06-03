import Password from "../Model/passwordModel.js"
import { CustomError } from "../error/customError.js";


export const savePassword = async(req, res) => {
    try{
        const {password,userId} = req.body;
        const existingPassword=await Password.findOne({password:password});
        if(existingPassword){
            throw new CustomError("Password already saved!",400)
        }
        const newPassword = new Password({
            userId : userId,
            password : password
        })
        await newPassword.save()
        res.send({newPassword})
    }catch(error){
        if (error instanceof CustomError) {
            res.status(error.statusCode).json({ message: error.message });
          } else {
            console.error(`Unexpected error in savePassword`, error);
            res
              .status(500)
              .json({ message: "Internal Server Error. Please try again later." });
          }
    }
    
}


export const getAllPasswords = async (req,res) =>{
    const { page = 1, limit = 6} = req.query;
    const pageNumber = parseInt(page,10);
    const limitNumber = parseInt(limit,10);
    const userId = req.query.userId;
    try {
        const totalPasswords=await Password.find({ userId: userId }).countDocuments()
        const passwords = await Password.find({ userId: userId }).sort({ createdAt: -1 }).skip((pageNumber - 1) * limit)
        .limit(limitNumber);
        res.send({ passwords,totalPasswords });
    } catch (error) {
        console.error("Error fetching passwords:", error);
        res.status(500).send({ error: 'Internal Server Error' });
    }
    };



export const deletePassword = async (req,res) =>{
    try {
        const {id} = req.body
        const data = await Password.deleteOne({_id:id})
        res.send({data:data})
    } catch (error) {
        console.log(error);
    }
}

