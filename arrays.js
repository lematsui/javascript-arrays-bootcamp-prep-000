var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles',
  ];
  
function addElementToBeginningOfArray(array, element) {
  var newArray = [...array];
  return newArray.unshift(element);
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
  
}