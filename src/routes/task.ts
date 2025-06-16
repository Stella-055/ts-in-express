import { Router } from "express";
import { createtask, getonetask, gettask } from "../controllers/task.contollers";


const route = Router()

route.post("/", createtask)
route.get("/",gettask)
route.get("/:id", getonetask)

export default route