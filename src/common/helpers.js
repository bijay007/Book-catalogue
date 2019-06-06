/* return an object from an array of object containing the specified property name */
function findObjWithKey(arr, prop) {
  const requiredObj = {};
  arr.forEach((elem) => {
    if (Object.prototype.hasOwnProperty.call(elem, prop)) {
      Object.assign(requiredObj, elem);
    }
  });
  return requiredObj;
}

/* returns a new array by replacing an old object with new object (via key checking here) */
function findAndReplaceObj(arr, key, newObj) {
  const indexOldObj = arr.findIndex(obj => Object.prototype.hasOwnProperty.call(obj, key));
  const updatedArr = [...arr];
  updatedArr.splice(indexOldObj, 1, newObj);
  return updatedArr;
}

/* Get difference between 2 array of objects */
function getArrayDifference(arrA, arrB) {
  return arrA.filter(item1 => !arrB.some(
    item2 => (item2.name === item1.name && item2.genre === item1.genre),
  ));
}

/* Given 2 arrays, replaces all objects in oldArr that are also in newArr */
function getArrayUnion(oldArr, newArr) {
  const mergedArr = newArr.concat(oldArr);
  const uniqueBookSet = new Set();
  const nonDuplicateArr = mergedArr.filter((book) => {
    const isDuplicate = uniqueBookSet.has(book.id);
    uniqueBookSet.add(book.id);
    return !isDuplicate;
  });
  return nonDuplicateArr;
}

/* returns an array of objects that has a specific value for the provided property name */
function extractObjContainingValue(arr, propName, value) {
  const newArr = arr.map((elem) => {
    if (elem[propName] === value) {
      return elem;
    }
    return undefined;
  });
  return newArr.filter(elem => !!elem);
}

/* extracts unique property names from an array of objects */
function extractUniqKeys(arr, propName) {
  const extractProps = arr.map(elem => elem[propName]).filter(elem => !!elem);
  const uniqueArray = [...new Set(extractProps)];
  return uniqueArray;
}

module.exports = {
  findObjWithKey,
  findAndReplaceObj,
  getArrayDifference,
  getArrayUnion,
  extractObjContainingValue,
  extractUniqKeys,
};
