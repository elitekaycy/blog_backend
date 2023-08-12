import express from "express";
import BlogController from "./controller/blog.controller";
import BlogMiddleware from "./middleware/blog.middleware";

const router = express.Router();

router
  .route("/")
  .get(BlogController.listBlogs)
  .post(
    BlogMiddleware.ValidatePostBlogContainsElements,
    BlogController.createBlog
  );
router
  .route("/:id")
  .all(BlogMiddleware.ValidateUserExist)
  .get(BlogController.listBlog)
  .put(BlogMiddleware.ValidatePostBlogContainsElements, BlogController.editBlog)
  .delete(BlogController.deleteBlog);

export default router;
