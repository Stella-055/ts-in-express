import { Router } from "express";
import { createtask, gettask } from "../controllers/task.contollers";

const route = Router()

route.post("/", createtask)
route.get("/",gettask)

export default route