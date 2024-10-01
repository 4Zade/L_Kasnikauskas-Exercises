import express, { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const router = express.Router();

router.get("/search", (req: Request, res: Response, next: NextFunction) => {
    try {
      const { name } = req.query;
      if (!name) {
        return res.status(400).json({
          status: "error",
          message: "Name query prameter is required",
        });
      }
  
      const filteredUsers = users.filter((user: any) =>
        user.name.toLowerCase().includes(name.toString().toLowerCase()),
      );
  
      if (filteredUsers.length === 0) {
        return res.status(404).json({
          status: "error",
          message: "No users found with the given name",
        });
      }
  
      res.status(200).json({
        status: "success",
        message: "Users retrieved successufully",
        data: filteredUsers,
      });
    } catch (error) {
      next(error);
    }
  });

  export default router;