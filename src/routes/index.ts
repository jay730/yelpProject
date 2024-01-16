import { Router } from "express";
import userRoutes from "./user.route";
import categoryRoutes from "./category.route";

const router = Router();

router.use("/categories", categoryRoutes);
router.use("/users", userRoutes);

export default router;
