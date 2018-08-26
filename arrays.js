var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
  ];
  
function addElementToBeginningOfArray(array, element) {
  var newArray = [...array];
  return newArray.unshift(element).toString;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
}  

function addElementToEndOfArray(array, element) {
  var newArray = [...array];
  return newArray.push(element);
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
  return array.slice(1);
 }
 
function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop();
}

function removeElementFromEndOfArray(array) {
  return array.splice(0, array.length - 1);
}

