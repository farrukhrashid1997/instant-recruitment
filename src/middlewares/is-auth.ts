import { NextFunction, Request, RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { ResponseError } from "../types/general";
import { UserTokenInterface } from "../types/user";
require("dotenv").config();

const isAuth = (req: UserTokenInterface, res: Response, next: NextFunction) => {
  const authHeader = req.get("Authorization");
  if (!authHeader) {
    const error: ResponseError = new Error("Please login to access this resource");
    error.statusCode = 401;
    throw error;
  }
  const token = authHeader.split(" ")[1];
  let decodedToken: UserTokenInterface;
  try {
    decodedToken = jwt.verify(token, process.env.TOKEN_KEY!) as UserTokenInterface;
  } catch (err: any) {
    err.statusCode = 500;
    throw err;
  }
  if (!decodedToken) {
    const error: ResponseError = new Error("Please login to access this resource");
    error.statusCode = 401;
    throw error;
  }

  req.userId = decodedToken.userId;
  next();
};
