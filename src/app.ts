import express, { RequestHandler } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import "./utils/dbConfig";
import BlogRoute from "./blog/blog.route";
import BlogHtml from "./docs/BlogHtml";
import cors from "cors";

class App {
  public app: express.Application;

  constructor() {
    this.app = express();
    this.config();
    this.routerSetup();
  }

  private config() {
    this.app.use(logger("dev"));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(cookieParser());
    this.app.use(cors());
    this.app.use(express.static(path.join(__dirname, "public")));
  }

  private routerSetup() {
    this.app.use("/", BlogHtml);
    this.app.use("/blog", BlogRoute);
  }
}

export default new App().app;
