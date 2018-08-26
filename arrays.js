var chocolateBars = [
  'snickers'
  'hundred grand'
  'kitkat'
  'skittles'
  ];
  
function addElementToBeginningOfArray(array, element) {
  newArray = array.push(element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.push(element);
  return array;
}  
  