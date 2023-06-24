import pool from "@/utils/dbConfig";
import { Request, Response } from "express";

const BlogDeleteController = async (req: Request, res: Response) => {
  try {
    const id: string = req.params.blogId;
    const client = await pool.connect();
    const query = `DELETE from blog_posts where id=$1`;
    const values = [id];

    const result = await client.query(query, values);

    if (result) return res.status(204).json({ deleted: true });
    else
      return res
        .status(400)
        .json({ errorCode: 400, errorMessage: `unable to delete ${id}` });
  } catch (err) {
    return res.status(500).json({ errorCode: 500, errorMessage: err });
  }
};

export default BlogDeleteController;
