import { Router } from "express";
import { main_controlador } from "../controllers/inicio.controller.js";

export const mainRouter = Router();

mainRouter.get("/:pokemon", main_controlador);
