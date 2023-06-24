import express from "express";
import { getLogger } from "@/utils/loggers";
const router = express.Router();
const logger = getLogger("INDEX_ROUTE");

/* GET home page. */
router.get("/", function (_req, res, _next) {
  return res.send("working route");
});

export default router;
