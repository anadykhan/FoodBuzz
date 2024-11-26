import { Router } from "express";
import MyUserController from "../controllers/MyUserController";

const router = Router();

router.post("/", MyUserController.createCurrentUser);

export default router;