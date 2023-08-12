import { Pool, PoolClient } from "pg";
import BlogDao from "../dao/blog.dao";
import { blogDto } from "../dto/blog.dto";

interface crudInterface {
  getAllBlogs: () => Promise<any>;
  getBlog: (id: number) => Promise<blogDto | any>;
  createBlog: (resource: blogDto) => Promise<blogDto | any>;
  editBlog: (id: number, blogResource: blogDto) => Promise<blogDto | any>;
  deleteBlog: (id: number) => Promise<any>;
}

class BlogService implements crudInterface {
  async getAllBlogs() {
    return BlogDao.getBlogs();
  }

  async getBlog(id: number) {
    return BlogDao.getBlog(id);
  }

  async createBlog(resources: blogDto) {
    return BlogDao.createBlog(resources);
  }
  async editBlog(id: number, blogResource: blogDto) {
    return BlogDao.editBlog(id, blogResource);
  }

  async deleteBlog(id: number) {
    return BlogDao.deleteBlog(id);
  }
}

export default new BlogService();
