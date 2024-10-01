import express, { Request, Response, NextFunction } from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const router = express.Router();

router.get("/:id", (req: Request, res: Response, next: NextFunction) => {
    try {
      const getUser = users.find((user: any) => user.id === parseInt(req.params.id));
      if (!getUser) {
        return res.status(400).json({
          status: "error",
          message: "User not found",
        });
      }
  
      res.status(200).json({
        status: "success",
        message: "Users retrieved successufully",
        data: getUser,
      });
    } catch (error) {
      next(error);
    }
  });

  router.put("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateUser = users.find(
        (user: any) => user.id === parseInt(req.params.id),
      );
  
      const { name, password, age, program } = req.body;
  
      if (!name || !password || !age || !program) {
        return res.status(400).json({
          status: "error",
          message: "All fields are required",
        });
      }
  
      Object.assign(updateUser, { name, password, age });
  
      await fs.promises.writeFile(usersFilePath, JSON.stringify(users, null, 2));
  
      res.status(200).json({
        status: "success",
        message: "User updated successfully",
        data: updateUser,
      });
    } catch (error) {
      next(error);
    }
  });

  router.patch("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const updateSpecificValueUser = users.find(
        (user: any) => user.id === parseInt(req.params.id),
      );
  
      const updates = req.body;
  
      for (const key in updates) {
        if (
          Object.prototype.hasOwnProperty.call(updates, key) &&
          Object.prototype.hasOwnProperty.call(updateSpecificValueUser, key)
        ) {
          updateSpecificValueUser[key] = updates[key];
        }
      }
  
      await fs.promises.writeFile(usersFilePath, JSON.stringify(users, null, 2));
  
      res.status(200).json({
        status: "success",
        message: "User updated successfully",
        data: updateSpecificValueUser,
      });
    } catch (error) {
      next(error);
    }
  });

  router.delete("/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const deleteUser = users.find(
        (user: any) => user.id === parseInt(req.params.id),
      );
  
      users.splice(deleteUser, 1);
  
      await fs.promises.writeFile(usersFilePath, JSON.stringify(users, null, 2));
  
      res.status(200).json({
        status: "success",
        message: "User deleted successfully",
      });
    } catch (error) {
      next(error);
    }
  });

  export default router;