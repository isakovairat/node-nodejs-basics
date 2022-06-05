import * as crypto from 'crypto';
import * as fs from 'fs';
// calcHash.js - implement function that calculates SHA256 hash for file fileToCalculateHashFor.txt and return it as hex
export const calculateHash = async () => {
  if (fs.existsSync('./src/hash/files/fileToCalculateHashFor.txt')) {
    fs.readFile('./src/hash/files/fileToCalculateHashFor.txt', (err, contents) => {
      if (err) throw err;
      return (crypto.createHash('sha256').update(contents.toString()).digest('hex'));
    })
  }
};