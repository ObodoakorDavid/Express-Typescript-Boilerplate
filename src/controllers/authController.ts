import { Request, Response } from "express";

export function signUp(req: Request, res: Response) {
  res.status(200).json({
    message: "Hello",
  });
}
