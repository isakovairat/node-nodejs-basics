import * as fs from 'fs';
// rename.js - implement function that renames file wrongFilename.txt to properFilename with extension .md (if there's no file wrongFilename.txt or properFilename.md already exists Error with message FS operation failed must be thrown)

const PATH = './src/fs/files';

export const rename = async () => {
  if (fs.existsSync(`${PATH}/properFilename.md`) || !fs.existsSync(`${PATH}/wrongFilename.txt`)) {
    throw new Error('FS operation failed');
  } else {
      try {
        await fs.promises.rename(`${PATH}/wrongFilename.txt`, `${PATH}/properFilename.md`);
      } catch (e) {
        throw new Error(e);
      }
  }
};