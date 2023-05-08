//Problem 3 - Remove Duplicates
//Give an array of sorted numbers, remove all duplicate from it. You should not use any extra space; after
//removing the duplicate in-place return the length of the subarray that has no duplicate in it.

function removeDuplicate(arr) {
  let uniqueArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  return uniqueArray;
}

console.log(
  removeDuplicate(["apple", "apple", "banana", "banana", "cherry", "cherry"])
);
