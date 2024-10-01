import express, { Request, Response, NextFunction} from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// Routes
import filterByCourseRoute from "./users/filterByCourse.mts";
import idRoute from "./users/id.mts";
import paginatedRoute from "./users/paginated.mts";
import searchRoute from "./users/search.mts";
import sortedByAgeRoute from "./users/sortedByAge.mts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const usersFilePath = path.join(__dirname, "../data/users.json");
let users = JSON.parse(fs.readFileSync(usersFilePath, "utf-8"));

const router = express.Router();

router.use("/", filterByCourseRoute);
router.use("/", idRoute);
router.use("/", paginatedRoute);
router.use("/", searchRoute);
router.use("/", sortedByAgeRoute);

router.get("/", (req: Request, res: Response, next: NextFunction) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Users retrieved successufully",
            data: users,
        });
    } catch (error) {
        next(error);
    }
});

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
    try {
      const newUser = {
        id: users.length + 1,
        name: req.body.name,
        age: req.body.age,
        password: req.body.password,
        program: req.body.program,
      };
  
      users.push(newUser);
  
      await fs.promises.writeFile(usersFilePath, JSON.stringify(users, null, 2));
  
      res.status(201).json({
        status: "success",
        message: "User added successfully",
        data: newUser,
      });
    } catch (error) {
      next(error);
    }
  });

export default router;