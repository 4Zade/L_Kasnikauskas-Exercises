import { Request, Response, NextFunction } from "express";
import { createLogger, transports, format } from "winston";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const logger = createLogger({
  level: "info",
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
  transports: [
    new transports.File({
      filename: path.join(__dirname, "../logs/logger.log"),
      handleExceptions: true,
      maxsize: 10 * 1024 * 1024,
      maxFiles: 5,
      format: format.json(),
    }),
    new transports.Console({
      format: format.combine(format.colorize(), format.simple()),
    }),
  ],
  exitOnError: false,
});

export default function loggingMiddleware(req: Request, res: Response, next: NextFunction) {
  logger.info(`${req.method} ${req.url} - ${req.ip}`);
  next();
}
