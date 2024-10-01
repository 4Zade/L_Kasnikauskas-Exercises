import express, { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const router = express.Router();

router.get("/sorted-by-age", (req: Request, res: Response, next: NextFunction) => {
    try {
      const { sortOrder = "asc" } = req.query;
  
      const sortedUsers = users.sort((a: any, b: any) => {
        return sortOrder === "asc" ? a.age - b.age : b.age - a.age;
      });
  
      res.status(200).json({
        status: "success",
        message: "Users sorted by age successufully",
        data: sortedUsers,
      });
    } catch (error) {
      next(error);
    }
  });

  export default router;