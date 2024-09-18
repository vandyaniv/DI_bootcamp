import { promises as fs } from "fs";

export const read_file = async (path) => {
  try {
    return await fs.readFile(path, "utf-8");
  } catch (error) {
    throw new Error('Opps... no file');
  }
};
