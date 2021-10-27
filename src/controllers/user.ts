import Users from "../models/user";
import bcrypt from "bcryptjs";
import { RequestHandler } from "express";
import { UserAttributes, UserBaseAttributes } from "../types/user";
import { ResponseError } from "../types/general";
import jwt from "jsonwebtoken";
require("dotenv").config();

export const signup: RequestHandler = async (req, res, next) => {
  const saltRounds: number = 12;
  const { email, name, companyName, password } = req.body as UserAttributes;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  Users.create({
    email: email,
    name: name,
    companyName: companyName,
    password: hashedPassword,
  });
  res.status(200).json({ message: "Created Successfully" });
};

export const login: RequestHandler = async (req, res, next) => {
  try {
    const { email, password } = req.body as UserBaseAttributes;
    const user = await Users.findOne({ where: { email: email } });
    if (user === null) {
      const error: ResponseError = new Error("User doesn't exist");
      error.statusCode = 401;
      throw error;
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      const error: ResponseError = new Error("Please enter the correct email/password");
      error.statusCode = 401;
      throw error;
    }
    const secretKey = process.env.TOKEN_KEY!; //this exclaimation mark tells ts that we trust the value is non-nullable
    const token = jwt.sign(
      {
        email: user.email,
        userId: user.id,
      },
      secretKey,
      { expiresIn: process.env.TOKEN_EXPIRATION }
    );
    res.status(200).json({ token: token });
  } catch (err) {
    next(err);
  }
};
