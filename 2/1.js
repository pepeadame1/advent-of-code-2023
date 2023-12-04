// var red_max = 12;
// var green_max = 13;
// var blue_max = 14;

const fs = require("fs");
const readline = require("readline");

//Problema 1

// async function processLineByLine() {
//   const fileStream = fs.createReadStream("input.txt");

//   const rl = readline.createInterface({
//     input: fileStream,
//     crlfDelay: Infinity,
//   });
//   // Note: we use the crlfDelay option to recognize all instances of CR LF
//   // ('\r\n') in input.txt as a single line break.
//   var index = 1;
//   var index_sum = 0;
//   for await (const line of rl) {
//     var failed = false;

//     var split = line.split(":")[1];
//     split = split.split(";");
//     for (var i = 0; i < split.length; i++) {
//       var r = 0;
//       var g = 0;
//       var b = 0;
//       var split_val = split[i].split(",");
//       for (val in split_val) {
//         var values_separated = split_val[val].split(" ");
//         var number = values_separated[1];
//         if (values_separated[2] == "red") {
//           r += Number(number);
//         } else if (values_separated[2] == "green") {
//           g += Number(number);
//         } else if (values_separated[2] == "blue") {
//           b += Number(number);
//         }
//         if (r > red_max || g > green_max || b > blue_max) {
//           failed = true;
//         }
//       }
//     }
//     if (!failed) {
//       index_sum += index;
//     }

//     index++;
//   }
//   console.log(index_sum);
// }

processLineByLine();

async function processLineByLine() {
  const fileStream = fs.createReadStream("input.txt");

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.
  var index = 1;
  var sum = 0;
  for await (const line of rl) {
    var failed = false;

    var split = line.split(":")[1];
    split = split.split(";");
    var r = 0;
    var g = 0;
    var b = 0;
    for (var i = 0; i < split.length; i++) {
      var split_val = split[i].split(",");
      for (val in split_val) {
        var values_separated = split_val[val].split(" ");
        var number = values_separated[1];
        if (values_separated[2] == "red") {
          //   r += Number(number);
          if (Number(number) > r) {
            r = Number(number);
          }
        } else if (values_separated[2] == "green") {
          if (Number(number) > g) {
            g = Number(number);
          }
          //   g += Number(number);
        } else if (values_separated[2] == "blue") {
          if (Number(number) > b) {
            b = Number(number);
          }
          //   b += Number(number);
        }
      }
    }
    sum += r * g * b;
  }
  console.log(sum);
}
