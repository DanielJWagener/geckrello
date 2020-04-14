export const normalizeLists = listsArray => {
  let outputObj = {};

  listsArray.forEach(item => (outputObj[item._id] = item));
  return outputObj;
};
