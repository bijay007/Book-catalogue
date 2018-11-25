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

/* deletes a specified property from an object */
function removePropFromObj(obj, propName) {
  const objToUpdate = obj;
  const props = Object.keys(objToUpdate);
  for (let i = 0; i < props.length; i++) {
    if (props[i] === propName) {
      delete objToUpdate[props[i]];
    }
  }
  return objToUpdate;
}

module.exports = {
  findObjWithProp,
  removePropFromObj,
};
