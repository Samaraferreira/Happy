import { request } from "express";
import multer from "multer";
import path from "path";
import crypto from "crypto";

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, "..", "..", "tmp"),
    filename: (request, file, cb) => {
      crypto.randomBytes(16, (err, hash) => {
        const filename = `${hash.toString("hex")}-${file.originalname}`;

        cb(null, filename);
      });
    },
  }),
};
