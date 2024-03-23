import express from "express";

import MessageResponse from "../types/interfaces/MessageResponse";
import quiz from "./quiz";

const router = express.Router();

router.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/quiz", quiz);

export default router;
