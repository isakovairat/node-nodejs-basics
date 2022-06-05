// args.js - implement function that parses command line arguments (given in format --propName value --prop2Name value2, you don't need to validate it) and prints them to the console in the format propName is value, prop2Name is value2

export const parseArgs = () => {
  let resultStr = '';

  const args = Object.entries(process.argv);

  for (let i = 2; i < args.length; i = i + 2) {
    if (i === args.length - 2) {
      resultStr = resultStr + `${args[i][1].slice(2)} is ${args[i + 1][1]}`;
    } else {
      resultStr = resultStr + `${args[i][1].slice(2)} is ${args[i + 1][1]}, `;
    }
  }

  console.log(resultStr);
};