import express from "express";

import usersRoutes from "./usersRoutes.mjs";
import loggerMiddleware from "../middleware/loggerMiddleware.mjs";

const router = express.Router();

router.use("/users", loggerMiddleware, usersRoutes);

export default router;
