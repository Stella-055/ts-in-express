import { Router } from "express";
import {
  createtask,
  deletetask,
  getonetask,
  gettask,
  updatetask,
} from "../controllers/task.contollers";

const route = Router();

route.post("/", createtask);
route.get("/", gettask);
route.get("/:id", getonetask);
route.patch("/:id", updatetask);
route.delete("/:id", deletetask);

export default route;
