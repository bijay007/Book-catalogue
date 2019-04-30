/* ************** ARRAY METHODS ************** */

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

/* returns an array excluding an object having a specified property */
function removeObjFromArr(arr, propName) {
  const newArr = arr.filter(obj => !Object.prototype.hasOwnProperty.call(obj, propName));
  return newArr;
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

/* ************** OBJECT METHODS ************** */


module.exports = {
  findObjWithKey,
  removeObjFromArr,
  extractObjContainingValue,
  extractUniqKeys,
};
