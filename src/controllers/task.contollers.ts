import express, {Express} from "express"
import { Request,Response } from "express";
import { PrismaClient,task } from "@prisma/client";


const app:Express= express()
const prisma = new PrismaClient ()
app.use(express.json())
 export const createtask=  async(req:Request,res:Response)=>{
    try {
        const { title, description }:task = req.body;
        const task = await prisma.task.create({
          data: { title, description },
        });
        res.status(200);
        res.send({
          message: "Task Created Successfully",
          data: {
            title,
            description,
            
          },
        });
      } catch (error) {
        console.log(error);
      }

}

export const gettask= async (req:Request, res:Response) => {
  try {
    const tasks = await prisma.task.findMany();
    res.status(200);
    res.json(tasks);
  } catch (error) {
    res.json({ message: "Something went wrong , please try again later." });
  }
};