/* finds an object from an array of object containing the specified prop */
function findObjWithProp(arr, prop) {
  const requiredObj = {};
  arr.forEach((elem) => {
    if (Object.prototype.hasOwnProperty.call(elem, prop)) {
      Object.assign(requiredObj, elem);
    }
  });
  return requiredObj;
}

/* returns an array without an object having a specified property */
function removeObjFromArr(arr, propName) {
  const newArr = arr.filter(obj => !Object.prototype.hasOwnProperty.call(obj, propName));
  return newArr;
}

module.exports = {
  findObjWithProp,
  removeObjFromArr,
};
