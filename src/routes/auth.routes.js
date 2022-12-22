import { Router } from "express";
import { singUp, signIn } from "../controllers/auth.controller";
import {
  checkExistingUser,
  checkExistingRoles,
} from "../middlewares/verifySignup";
const router = Router();

router.post("/singup", [checkExistingUser, checkExistingRoles], singUp);

router.post("/singin", signIn);

export default router;
