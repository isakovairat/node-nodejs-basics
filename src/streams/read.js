import * as fs from 'fs';
// read.js - implement function that reads file fileToRead.txt content using Readable Stream and prints it's content into process.stdout
export const read = async () => {
  let stream = fs.createReadStream('./src/streams/files/fileToRead.txt');
  stream.on('data', (data) => {
    process.stdout.write(data);
  })
};

await read();