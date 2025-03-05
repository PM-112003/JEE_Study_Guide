import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const router = express.Router();

// User Signup
router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;
  try {
    const existingUser = await User.findOne({ username });
    if (existingUser){
      console.log("username already exists");
      return res.status(400).json({ message: "username already exists" });
    } 

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ username, email, password: hashedPassword });
    await newUser.save();

    console.log("User created successfully");

    res.status(201).json({ message: "User created successfully!" });
  } catch (error) {
    console.log("error signing up");
    res.status(500).json({ message: "Error signing up user" });
  }
});

// User Signin
router.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user){
      console.log("user not found");
      return res.status(400).json({ message: "User not found" });
    } 

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
    res.cookie("token", token, { httpOnly: true, secure: true, sameSite: "None" });

    console.log("Login successful");
    
    res.json({ message: "Login successful" });
  } catch (error) {
    console.log("error logging in");
    res.status(500).json({ message: "Error logging in" });
  }
});

//user authentication route
router.get("/check-auth", async (req, res) => {
  console.log("Cookies received:", req.cookies);
  try {
    const token = req.cookies.token; // Get token from cookies
    if (!token){
      console.log("No token found");
      return res.json({ authenticated: false });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user){
      console.log("User not found in database");
      return res.json({ authenticated: false });
    } 

    console.log("User authenticated");
    res.json({ authenticated: true });
  } catch (error) {
      console.log("Error verifying token:", error);
      res.json({ authenticated: false });
  }
});


// User Logout
router.post("/logout", (req, res) => {
  res.clearCookie("token");
  console.log("logged out user");
  res.json({ message: "User logged out" });
});

export default router;
