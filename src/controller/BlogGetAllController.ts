import pool from "@/utils/dbConfig";
import { Request, Response } from "express";

const BlogGetAllController = async (req: Request, res: Response) => {
  try {
    const client = await pool.connect();
    const query = `SELECT * from blog_posts`;

    const result = await client.query(query);
    const blogPosts = result.rows;

    if (blogPosts) return res.status(200).json({ posts: blogPosts });
  } catch (err) {
    return res.status(400).json({ errorCode: 400, errorMessage: err });
  }
};

export default BlogGetAllController;
