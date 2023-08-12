import { Request, Response } from "express";
import BlogService from "../service/blog.service";

class BlogController {
  async listBlogs(req: Request, res: Response) {
    const result = await BlogService.getAllBlogs();
    return res.status(200).json({ payload: result });
  }

  async createBlog(req: Request, res: Response) {
    const result = await BlogService.createBlog(req.body);
    return res.status(200).json({ payload: result });
  }

  async listBlog(req: Request, res: Response) {
    const result = await BlogService.getBlog(Number(req.params.id));
    return res.status(200).json({ payload: result });
  }

  async editBlog(req: Request, res: Response) {
    const result = await BlogService.editBlog(Number(req.params.id), req.body);
    return res.status(200).json({ payload: result });
  }

  async deleteBlog(req: Request, res: Response) {
    const result = await BlogService.deleteBlog(Number(req.params.id));
    return res.status(204).send("");
  }
}

export default new BlogController();
