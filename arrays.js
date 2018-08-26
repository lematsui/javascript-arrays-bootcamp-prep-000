var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
  ];
  
function addElementToBeginningOfArray(array, element) {
  var newArray = [...array];
  newArray.unshift(element)
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}  

function addElementToEndOfArray(array, element) {
  var newArray = [...array];
  newArray.push(element);
  return newArray;
}

function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}  

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  return array.splice(1, array.length);
 }
 
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array) {
  return array.splice(array.length, 1);
}
  

