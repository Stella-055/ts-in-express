import { Router } from "express";
import { createtask } from "../controllers/task.contollers";

const route = Router()

route.post("/", createtask)

export default route