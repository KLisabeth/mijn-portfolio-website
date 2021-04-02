import dotenv from "dotenv";
import path, { dirname } from "path";
import { fileURLToPath } from 'url';
const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join( __dirname, ".env") });

export default {
  JWT_SECRET: process.env.JWT_SECRET,
  ADMIN: process.env.ADMIN,
  EMAIL: process.env.EMAIL,
  NAME: process.env.NAME,
  
};