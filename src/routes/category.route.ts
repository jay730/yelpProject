import { Router } from "express";

const categoryRoutes = Router();

categoryRoutes.get("/", (_req, res) => {
  return res.json({ data: [1, 2, 3, 4, 5, 6] });
});

categoryRoutes.get("/:id", (_req, res) => {
  return res.json({ data: { name: "cat1s" } });
});

export default categoryRoutes;
