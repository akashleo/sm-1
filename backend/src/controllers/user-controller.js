import User from "../models/User";
import bcrypt from "bcryptjs";

export const getAllUser = async(req, res, next) => {
    let users;
    try{
        users = await User.find();
    }catch(err)
    {
        console.log(err);
    }
    if(!users){
        res.status(404).json({message: "no users found"});
    }

    return res.status(200).json({users})
}


export const signup = async(req, res, next) =>{
    const {name, email, password} = req.body;

    let existingUser;

    try{
        existingUser = await User.findOne({email})
    } catch (err) {
        console.log(err);
    }

    if(existingUser){
        return res.status(400).json({message: "User already exists, Login instead"})
    }

    const hashedPassword = bcrypt.hashSync(password);

    const newUser = new User({
        name,
        email,
        password: hashedPassword,
    });

   

    try{
        newUser.save();
    }
    catch(err){
        console.log(err);
    }

    res.status(200).json({message: "User successfully created"});
}



export const login = async(req, res, next) =>{
    const { email, password} = req.body;

    let existingUser;

    try{
        existingUser = await User.findOne({email})
    } catch (err) {
        console.log(err);
    }

    if(!existingUser){
        return res.status(404).json({message: "Cannot find user"})
    }

    const isPasswordCorrect = bcrypt.compareSync(password, existingUser.password);

    if(!isPasswordCorrect){
        return res.status(400).json({message: "Incorrect Password"})
    }

    return res.status(200).json({message: "User login successful"})

}