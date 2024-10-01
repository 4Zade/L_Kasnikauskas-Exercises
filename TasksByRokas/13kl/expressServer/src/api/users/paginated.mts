import express, { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const router = express.Router();

router.get("/paginated", (req: Request, res: Response, next: NextFunction) => {
    try {
      let { page, limit } = req.query;
  
      const currentPage: number = parseInt(page as string) || 1;
      const currentLimit = parseInt(limit as string) || 10;
  
      const startIndex = (currentPage - 1) * currentLimit;
      const endIndex = currentPage * currentLimit;
  
      const paginatedUsers = users.slice(startIndex, endIndex);
  
      const totalPages = Math.ceil(users.length / currentLimit);
  
      res.status(200).json({
        status: "success",
        message: "Users retrieved successufully",
        data: paginatedUsers,
        pagination: {
          currentPage: page,
          totalPages: totalPages,
          totalUsers: users.length,
        },
      });
    } catch (error) {
      next(error);
    }
  });

export default router;