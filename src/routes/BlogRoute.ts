import BlogCreateController from "@/controller/BlogCreateController";
import BlogDeleteController from "@/controller/BlogDeleteController";
import BlogEditController from "@/controller/BlogEditController";
import BlogGetAllController from "@/controller/BlogGetAllController";
import BlogGetOneController from "@/controller/BlogGetOneController";

import { Router } from "express";
const router = Router();

/* create blog post*/
router.post("/create", BlogCreateController);
router.put("/edit/:blogId", BlogEditController);
router.get("/blogs/:blogId", BlogGetOneController);
router.get("/blogs", BlogGetAllController);
router.delete("/blogs/:blogId", BlogDeleteController);

export default router;
