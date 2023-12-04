const fs = require("fs");
const readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("input.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.
  sum = 0;
  for await (const line of rl) {
    arr = [];
    arr2 = [];
    for (var i = 0; i < line.length; i++) {
      arr.push(line[i]);
      arr = checkWords(arr);
      arr2.unshift(line[line.length - 1 - i]);
      arr2 = checkWords(arr2);
    }
    arr = arr.join("").replace(/\D/g, "");
    arr2 = arr2.join("").replace(/\D/g, "");

    // console.log(line);
    // console.log(String(arr[0] + String(arr2[arr2.length - 1])));
    sum += Number(String(arr[0]) + String(arr2[arr2.length - 1]));
    // Each line in input.txt will be successively available here as `line`.
  }
  console.log(sum);
}

function checkWords(arr) {
  newArr = arr.join("");
  words = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  for (var x = 0; x < words.length; x++) {
    if (newArr.includes(words[x])) {
      newArr = newArr.replace(words[x], x + 1);
    }
  }
  return Array.from(newArr);
}

processLineByLine();
