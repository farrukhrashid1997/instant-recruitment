import Users from "../models/user";
import bcrypt from "bcryptjs";
import { RequestHandler } from "express";
import { UserAttributes } from "../types/user";
import { ResponseError } from "../types/general";

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
    const { email, password } = req.body;
    const user = await Users.findOne({ where: { email: email } });
    if (user === null) {
      res.status(404).json({ message: "User doesn't exist", code: "USER_NOT_FOUND" });
      return;
    }
    const checkPassword = await bcrypt.compare(password, user.password);
    if (!checkPassword) {
      const error: ResponseError = new Error("Please enter the correct email/password");
      error.statusCode = 401;
      throw error;
    }
  } catch (err) {
    next(err);
  }
};
