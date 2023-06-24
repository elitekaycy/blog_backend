import pool from "@/utils/dbConfig";
import { Request, Response } from "express";

const BlogGetOneController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.blogId;
    const client = await pool.connect();
    const query = `SELECT * from blog_posts where id=$1`;
    const values = [id];

    const result = await client.query(query, values);
    const blogPosts = result.rows[0];

    if (blogPosts) return res.status(200).json({ post: blogPosts });
  } catch (err) {
    return res.status(400).json({ errorCode: 400, errorMessage: err });
  }
};

export default BlogGetOneController;
