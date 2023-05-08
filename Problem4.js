//Problem 4 - Mean dan Median
//Diberikan sebuah program yang menerima sebuah input array angka. Program akan menampilkan mean dan
//median dari array angka tersebut. Pada soal ini dapat dipastikan bahwa input number sudah terurut.

function calculateMean(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

function calculateMedian(arr) {
  arr.sort((a, b) => {
    return a - b;
  });

  let middle = Math.floor(arr.length / 2);
  if (arr.length % 2 === 0) {
    return (arr[middle - 1] + arr[middle]) / 2;
  } else {
    return arr[middle];
  }
}

let arr = [5, 8, 11, 15, 20, 27, 31];
let mean = calculateMean(arr);
let median = calculateMedian(arr);

console.log(mean, " ", median);
