/* Get difference between 2 array of objects */
function getArrayDifference(arrA, arrB) {
  return arrA.filter(item1 => !arrB.some(
    item2 => (item2.name === item1.name && item2.genre === item1.genre),
  ));
}

/* Given 2 arrays, replaces all objects in oldArr that are also in newArr */
function getArrayUnion(oldArr, newArr) {
  const mergedArr = newArr.concat(oldArr);
  const uniqueObjSet = new Set();
  const nonDuplicatesArr = mergedArr.filter((obj) => {
    const isDuplicate = uniqueObjSet.has(obj.id);
    uniqueObjSet.add(obj.id);
    return !isDuplicate;
  });
  return nonDuplicatesArr;
}

/* return an object from an array of object containing the specified property name */
function findObjWithKey(arr, prop) {
  const requiredObj = arr.filter(item => Object.prototype.hasOwnProperty.call(item, prop))[0];
  if (!requiredObj) return {};
  return requiredObj;
}

/* returns a new array by replacing an old object with new object (via key checking here) */
function findAndReplaceObj(arr, key, newObj) {
  const indexOldObj = arr.findIndex(obj => Object.prototype.hasOwnProperty.call(obj, key));
  // needs deep cloning (for our case 1 level cloning is enough)
  const updatedArr = arr.map(item => Object.assign({}, item));
  updatedArr.splice(indexOldObj, 1, newObj);
  return updatedArr;
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
  getArrayDifference,
  getArrayUnion,
  findObjWithKey,
  findAndReplaceObj,
  extractUniqKeys,
  extractObjContainingValue,
};
