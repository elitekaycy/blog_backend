import pool from "@/utils/dbConfig";
import { NextFunction, Request, Response } from "express";

class BlogMiddleWare {
  async ValidatePostBlogContainsElements(
    req: Request,
    res: Response,
    next: NextFunction
  ) {
    const { title, content } = req.body;
    if (title == "" || content == "")
      return res.status(400).json({ error: "title or content must be filled" });
    if (typeof title !== "string" || typeof content !== "string")
      return res
        .status(400)
        .json({ error: "title or content must be string type" });

    next();
  }

  async ValidateUserExist(req: Request, res: Response, next: NextFunction) {
    const db = await pool.connect();
    const result = await db.query("SELECT * FROM blog_posts WHERE id = $1", [
      req.params.id,
    ]);
    if (result.rowCount <= 0)
      return res.status(400).json({ error: "user does not exist" });

    next();
  }
}

export default new BlogMiddleWare();
