import dotenv from "dotenv";
import { currentDirectory } from "@utils/helpers";

const { NODE_ENV } = process.env;

dotenv.config({ path: `${currentDirectory}/env/.env.${NODE_ENV}` });
