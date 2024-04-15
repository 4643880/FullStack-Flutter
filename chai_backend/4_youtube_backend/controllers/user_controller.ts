import express from "express";
import { asyncHandler } from "../utils/async_hanlder";

export class UserController {
  static async register(
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  )  {
    await asyncHandler(async () => {
      res.status(200).json({
        status: "success",
        message: "ok ha",
      });
    })(req, res, next); // iife immediately-invoked function expression
  }
}
