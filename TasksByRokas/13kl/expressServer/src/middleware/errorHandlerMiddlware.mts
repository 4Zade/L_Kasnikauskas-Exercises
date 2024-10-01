import { Request, Response, NextFunction } from "express";

const errorHandler = (err: any, req: Request, res:Response, next: NextFunction) => {
    res.status(500).json({
      status: "error",
      message: `Internal Server Error, ${err.message}`,
    });
  };
  
  export default errorHandler;
  