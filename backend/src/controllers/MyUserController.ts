import { Request, Response } from "express";
import User from "../models/user";

const createCurrentUser = async (req: Request, res: Response): Promise<any> => {
  try {
    const { auth0Id } = req.body;

    // Validate auth0Id
    if (!auth0Id || typeof auth0Id !== "string") {
      return res.status(400).json({ message: "Invalid auth0Id" });
    }

    const existingUser = await User.findOne({ auth0Id });

    if (existingUser) {
      return res.status(200).json({ message: "User already exists" });
    }

    const newUser = new User(req.body);
    await newUser.save();

    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error creating user" });
  }
};

export default {
  createCurrentUser,
};
