import express, { Request, Response } from "express";
import { BlogPostType } from "@/types";
import pool from "@/utils/dbConfig";

const BlogCreateController = async (req: Request, res: Response) => {
  try {
    const blogPost: BlogPostType = req.body;
    const created_at: Date = new Date();
    const updated_at: Date = new Date();

    const client = await pool.connect();
    const query =
      "INSERT INTO blog_posts (title, content, created_at, updated_at) VALUES ($1, $2, $3, $4) RETURNING *";

    const values: [string, string, Date, Date] = [
      blogPost.title,
      blogPost.content,
      created_at,
      updated_at,
    ];

    const result = await client.query(query, values);
    const newPost = result.rows[0];
    client.release();

    res.status(201).json({ post: newPost });
  } catch (err) {
    res.status(400).json({ errorCode: 400, errorMessage: err });
  }
};

export default BlogCreateController;
