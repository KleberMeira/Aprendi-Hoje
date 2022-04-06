import { Router  } from "express";
import UserController from "./Controllers/UserController";

const router = Router();
router.get('/users', UserController.index);

export default router;