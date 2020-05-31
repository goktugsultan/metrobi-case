let numberItems = [1, 2, 3, 4, 5, 5, 6, 6, 6, 33, 2, 2, 21, 25, 21, 7, 8, 100, 29, 200, 100, 56, 2, 3, 4];
var stringItems = ["apple", "banana", "banana", "orange", "apple", "orange", "orange"]

let singleItems = [];
let duplicateItems = [];



function findDuplicateItems(item) {
  if (singleItems.includes(item)) {
    if (duplicateItems.indexOf(item) == -1) {
      duplicateItems.push(item)
    }
  } else {
    if (singleItems.indexOf(item) == -1) {
      singleItems.push(item)
    }
  }
}

for (let i = 0; i < numberItems.length; i++) {
  findDuplicateItems(numberItems[i]);
}

console.log('Duplicate items are ' + duplicateItems.join(','));