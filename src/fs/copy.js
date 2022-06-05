import * as fs from 'fs';

export const copy = async () => {
    if (fs.existsSync('./src/fs/files_copy') || !fs.existsSync('./src/fs/files')) {
      throw new Error('FS operation failed');
    } else {
      try {
        await fs.promises.mkdir('./src/fs/files_copy');
        const files  = await fs.promises.readdir('./src/fs/files');

        for (const file of files) {
          await fs.promises.copyFile(`./src/fs/files/${file}`, `./src/fs/files_copy/${file}`);
        }
      } catch (e) {
        throw new Error(e);
      }
    }
};