import { Request, Response, Router } from "express";
import path from "path";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  const filePath = path.join(__dirname, "../views", "index.html");
  return res.sendFile(filePath);
});

export default router;
