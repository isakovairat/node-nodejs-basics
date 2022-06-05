import * as fsPromises from 'fs/promises';
import * as fs from 'fs';

export const create = async () => {
  if (fs.existsSync('src/fs/files/fresh.txt')) {
    throw new Error('FS operation failed');
  } else {
    await fsPromises.appendFile('src/fs/files/fresh.txt', "I am fresh and young");
  }
};