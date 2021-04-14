interface ArrayTypes {
  [key: string]: string | number | boolean;
}

interface ReturnedObjTypes {
  [key: string]: Array<string | number | ArrayTypes>;
}

const groupBy = (
  elements: Array<number | string | ArrayTypes>,
  cb: (el) => string | number | boolean
): ReturnedObjTypes  => {

  const returnedObj = {};
  const objKeys = [];

  elements.map((el) => {
    if (objKeys.includes(cb(el))) return;
    objKeys.push(cb(el));
  });

  objKeys.map((key) => {
    const arrayForKey = [];
    elements.map((el) => (cb(el) === key ? arrayForKey.push(el) : false));
    returnedObj[key] = arrayForKey;
  });

  return returnedObj;
};
