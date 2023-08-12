import pool from "@/utils/dbConfig";
import { blogDto } from "../dto/blog.dto";
// data access object for the blog

class BlogDao {
  constructor() {
    console.log("blog dao instance is running");
  }

  async getBlogs() {
    const db = await pool.connect();
    const { rows } = await db.query(`SELECT * FROM blog_posts`);
    db.release();
    return rows;
  }

  async getBlog(blogId: number) {
    const db = await pool.connect();
    const query = "SELECT * FROM blog_posts WHERE id = $1";
    const { rows } = await db.query(query, [blogId]);
    db.release();
    return rows[0];
  }

  async editBlog(blogId: Number, blog: blogDto) {
    // update id post content
    const db = await pool.connect();
    const query = `UPDATE blog_posts SET title = $1, content = $2 WHERE id = $3 RETURNING *`;
    const { title, content } = blog;
    const { rows } = await db.query(query, [title, content, blogId]);
    db.release();
    return rows[0];
  }

  async deleteBlog(blogId: Number) {
    const db = await pool.connect();
    const query = `DELETE from blog_posts where id=$1`;
    const res = await db.query(query, [blogId]);
    db.release();
    return true;
  }

  async createBlog(blog: blogDto) {
    const db = await pool.connect();
    const query =
      "INSERT INTO blog_posts (title, content, created_at, updated_at) VALUES ($1, $2, $3, $4) RETURNING *";
    const { title, content } = blog;
    const { rows } = await db.query(query, [
      title,
      content,
      new Date(),
      new Date(),
    ]);
    db.release();
    return rows[0];
  }
}

export default new BlogDao();
