type ObjectValueTypes = string | number | boolean;
type ElementsTypes = string | number | ObjInArrayTypes;

interface ObjInArrayTypes {
  [key: string]: ObjectValueTypes;
}

interface ReturnedObjTypes {
  [key: string]: ElementsTypes;
}

const groupBy = (
  elements:  Array<ElementsTypes>,
  cb: (el: ElementsTypes) => ObjectValueTypes
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
