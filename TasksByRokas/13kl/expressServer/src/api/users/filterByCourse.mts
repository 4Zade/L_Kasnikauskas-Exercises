import express, { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const router = express.Router();

router.get("/filter-by-course", (req: Request, res: Response, next: NextFunction) => {
    try {
        const { course } = req.query;
        if (!course) {
            return res.status(400).json({
                status: "error",
                message: "Course query prameter is required",
            });
        }

        const filteredUsers = users.filter((user: any) => user.course === course);

        res.status(200).json({
            status: "success",
            message: "Users filtered by course successufully",
            data: filteredUsers,
        });
    } catch (error) {
        next(error);
    }
});

export default router;