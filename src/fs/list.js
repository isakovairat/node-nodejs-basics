import fs from "fs";
// list.js - implement function that prints all array of filenames from files folder into console (if files folder doesn't exists Error with message FS operation failed must be thrown)

const PATH = './src/fs/files';

export const list = async () => {
  if (!fs.existsSync(PATH)) {
    throw new Error('FS operation failed');
  } else {
    fs.readdir(`${PATH}`, (err, filenames) => {
      if (err) {
        throw new err;
      }
      console.log(filenames);
    });
  }
};