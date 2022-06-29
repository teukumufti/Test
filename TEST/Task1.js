function isPalindrome(str) {
  let len = str.length;
  let mid = Math.floor(len / 2);

  for (let i = 0; i < mid; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

const text = "kakak menjual katak dengan harga 12021";
const split = text.split(" ");
let floor = [];

for (let i = 0; i < split.length; i++) {
  if (isPalindrome(split[i])) {
    floor.push(split[i]);
  }
}

// total palindrome detected
const totalIndex = floor.map((item, index) => {
  return split.indexOf(item);
});
console.log("Total detected palindrome: " + totalIndex.length);

//  result for word of palindrome
const resultWords = "Palindrome words: " + floor.join(" ");
console.log(resultWords);

//  result for index of palindrome
const resultIndex =
  "Palindrome index: " +
  floor.map((item, index) => {
    return split.indexOf(item);
  });
console.log(resultIndex);

//  filter for invalid of palindrome
const totalData = split.map((item, index) => {
  return index;
});
const filterArray = (totalData, hasil) => {
  const filters =
    "Invalid palindrome index: " +
    totalData.filter((el) => {
      return hasil.indexOf(el) === -1;
    });
  return filters;
};
console.log(filterArray(totalData, resultIndex));
