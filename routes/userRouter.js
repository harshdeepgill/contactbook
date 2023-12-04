const express = require("express");
const { userModel } = require("../model/userModel");

const userRoutes = express.Router();

userRoutes.get("/",async (req, res)=>{
    try {
        const users = await userModel.find();
        res.status(200).send({ "users": users});
    } catch (err) {
        res.status(301).send({"error": err})
    }
})
userRoutes.post("/addcontact",async (req, res)=>{
    try {
        const user = new userModel(req.body);
        await user.save();
        res.status(200).send({"msg": "User added successfully!", "user": user});
    } catch (err) {
        res.status(301).send({"error": err})
    }
})
userRoutes.patch("/editcontact/:id",async (req, res)=>{

    const id = req.params.id;
    try {
        const user = await userModel.findOneAndUpdate({_id:id},req.body);
        res.status(200).send({"msg": "User updated successfully!", "user": user});
    } catch (err) {
        res.status(301).send({"error": err})
    }
})
userRoutes.delete("/deletecontact/:id",async (req, res)=>{
    const id = req.params.id;
    try {
        const user = await userModel.findOneAndDelete({_id:id});
        res.status(200).send({"msg": "User deleted successfully!", "user": user});
    } catch (err) {
        res.status(301).send({"error": err})
    }
})

module.exports = {userRoutes}