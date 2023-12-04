const fs = require("fs");
const readline = require("readline");

function isNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}

async function processLineByLine() {
  const fileStream = fs.createReadStream("input.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.
  var arr = [[]];
  var index = 0;
  //read
  for await (const line of rl) {
    for (var i = 0; i < line.length; i++) {
      arr[index][i] = line[i];
    }
    index++;
    arr.push([]);
  }
  //process
  var string = "";
  var building = false;
  var has_key = false;
  for (var i = 0; i < arr.length; i++) {
    for (var x = 0; x < arr[i].length; x++) {
      if (isNumber(arr[i][x])) {
        if (building) {
          string += arr[i][x];
        } else {
          building = true;
          string = arr[i][x];
        }
        // if()
      }
      //   console.log(arr[i][x]);
    }
  }
}

function check_keys(arr, i, x) {
  value = false;
  // if(arr[-i][-x])
}

processLineByLine();
