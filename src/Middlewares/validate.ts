import { Response,Request,NextFunction } from "express"
import {  task } from "@prisma/client";

export const validate =async (req:Request,res:Response, next:NextFunction) => {
const {title, description}:task=req.body
if(!title){
 
     res.status(400).json({message:"title is required"})
    return}
    
  if(!description){
   res.status(400).json({message:"description is required"})
  return}
 next()   
}