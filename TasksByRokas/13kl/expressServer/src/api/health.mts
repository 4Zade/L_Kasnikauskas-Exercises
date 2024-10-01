import express, { Request, Response, NextFunction } from "express";

const router = express.Router();

router.get("/health", (req: Request, res: Response, next: NextFunction) => {
    try {
      res.status(200).json({
        status: "success",
        message: "Server is healthy",
      });
    } catch (error) {
      next(error);
    }
  });

  export default router;