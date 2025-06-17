import { Router } from "express";
import {
  createtask,
  deletetask,
  getonetask,
  gettask,
  updatetask,
} from "../controllers/task.contollers";
import { validate } from "../Middlewares/validate";
const route = Router();

route.post("/",validate, createtask);
route.get("/", gettask);
route.get("/:id", getonetask);
route.patch("/:id", updatetask);
route.delete("/:id", deletetask);

export default route;
