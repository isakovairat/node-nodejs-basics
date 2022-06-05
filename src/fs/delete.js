// delete.js - implement function that deletes file fileToRemove.txt (if there's no file fileToRemove.txt Error with message FS operation failed must be thrown)
import fs from "fs";

const PATH = './src/fs/files';

export const remove = async () => {
  if (!fs.existsSync(`${PATH}/fileToRemove.txt`)) {
    throw new Error('FS operation failed');
  } else {
    try {
      await fs.promises.rm(`${PATH}/fileToRemove.txt`);
    } catch (e) {
      throw new Error(e);
    }
  }
};