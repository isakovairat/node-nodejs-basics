import * as fs from 'fs';
// write.js - implement function that writes process.stdin data into file fileToWrite.txt content using Writable Stream

export const write = async () => {
  let stream = fs.createWriteStream('./src/streams/files/fileToWrite.txt');

  process.stdin.on('data', data => {
    stream.write(data.toString());
    stream.end();
    process.exit();
  });
};