import { Router } from "express";

const userRoutes = Router();

userRoutes.get("/", (req, res) => {
  return res.json({ data: [{ name: "hello" }] });
});

export default userRoutes;
