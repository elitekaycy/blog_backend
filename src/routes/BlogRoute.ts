import BlogCreateController from "@/controller/BlogCreateController";
import BlogDeleteController from "@/controller/BlogDeleteController";
import BlogEditController from "@/controller/BlogEditController";
import BlogGetAllController from "@/controller/BlogGetAllController";
import BlogGetOneController from "@/controller/BlogGetOneController";

import { Router } from "express";
const router = Router();

/* create blog post*/
router.post("/post/create", BlogCreateController);
router.put("/post/edit/:id", BlogEditController);
router.get("/posts/:id", BlogGetOneController);
router.get("/posts", BlogGetAllController);
router.delete("/posts/:id", BlogDeleteController);

export default router;
