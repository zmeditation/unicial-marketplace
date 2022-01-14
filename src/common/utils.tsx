/** @format */
export function isEmptyObject(obj: any) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) return false;
  }
  return true;
}

export function includeArray(array: any, key: any) {
  return array.indexOf(key) !== -1;
}
