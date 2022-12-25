const selectionSortRecursive = (arr) => {
  // check if the arr still has length, if no return empty array
  if (arr.length === 0) {
    return arr;
  }
  //find the minium num from the array
  const minNum = Math.min(...arr);
  // console.log(minNum)
  //get the index of that minimum number in the array
  const index = arr.indexOf(minNum);

  // splice the array starting from that number
  arr.splice(index, 1);

  // recurse the function , save the result into the result array
  const resultArr = selectionSortRecursive(arr);
  // console.log(result)
  resultArr.unshift(minNum);
  //console.log(resultArr)
  return resultArr;
};

const array = [3, -1, 5, 2];

console.log(selectionSortRecursive(array)); // should log : [-1, 2,3,5]

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSortRecursive([3, -1, 5, 2]));

  console.log("");
}

module.exports = selectionSortRecursive;

// Please add your pseudocode to this file
// And a written explanation of your solution
