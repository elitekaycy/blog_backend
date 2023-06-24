import { BlogPostType } from "@/types";
import pool from "@/utils/dbConfig";
import { Request, Response } from "express";

const BlogEditController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.blogId;
    const blogPost: BlogPostType = req.body;
    const updated_at: Date = new Date();

    const client = await pool.connect();
    const query = `UPDATE blog_posts SET title = $1, content = $2, updated_at = $3 WHERE id = $4 RETURNING *`;
    const values = [blogPost.title, blogPost.content, updated_at, id];

    const result = await client.query(query, values);
    const updatedBlog = result.rows[0];
    client.release();

    if (!updatedBlog) {
      return res
        .status(400)
        .json({ errorCode: 404, errorMessage: `unable to update blog ${id}` });
    }

    return res.status(200).json({ updatedPost: updatedBlog });
  } catch (err) {
    res.status(500).json({ errorCode: 500, errorMessage: err });
  }
};

export default BlogEditController;
