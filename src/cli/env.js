// env.js - implement function that parses environment variables with prefix RSS_ and prints them to the console in the format RSS_name1=value1; RSS_name2=value2

export const parseEnv = () => {
  let resultStr = '';

  const rss = Object.entries(process.env).filter(([k, v]) => k.split('_')[0] === 'RSS');

  rss.forEach(([k, v], i) => {
    if (i === rss.length - 1) {
      resultStr = resultStr + `${k}=${v}`;
    } else {
      resultStr = resultStr + `${k}=${v}; `;
    }
  });

  console.log(resultStr);
};