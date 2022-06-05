import fs from "fs";
// read.js - implement function that prints content of the fileToRead.txt into console (if there's no file fileToRead.txt Error with message FS operation failed must be thrown)

const PATH = './src/fs/files';

export const read = async () => {
  if (!fs.existsSync(`${PATH}/fileToRead.txt`)) {
    throw new Error('FS operation failed');
  } else {
    fs.readFile(`${PATH}/fileToRead.txt`, (err, contents) => {
      if (err) throw err;
      console.log(contents.toString());
    })
  }
};