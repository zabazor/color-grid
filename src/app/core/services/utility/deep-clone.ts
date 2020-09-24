export function deepClone(obj): any {
  // return value is input is not an Object or Array.
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  let clone;

  if (Array.isArray(obj)) {
    // unlink Array reference.
    clone = obj.slice();
  } else {
    // Unlink Object reference.
    clone = Object.assign({}, obj);
  }

  const keys = Object.keys(clone);

  // recursively unlink reference to nested objects.
  for (const key of keys) {
    clone[key] = deepClone(clone[key]);
  }

  // return unlinked clone.
  return clone;
}
