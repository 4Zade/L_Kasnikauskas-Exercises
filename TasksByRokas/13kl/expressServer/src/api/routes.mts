import express from "express";

// routes
import usersRoutes from "./users.mts";
import healthRoute from "./health.mts"

const router = express.Router();

router.use("/users", usersRoutes);
router.use("/", healthRoute);

export default router;