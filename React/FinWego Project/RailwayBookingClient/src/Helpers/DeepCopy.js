/* eslint-disable no-restricted-syntax */
/* eslint-disable no-prototype-builtins */
export default function extendDeep(parent, child) {
  const toStr = Object.prototype.toString;
  const strObj = '[object Object]';

  const children = child || {};

  for (const i in parent) {
    if (parent.hasOwnProperty(i)) {
      if (typeof parent[i] === 'object') {
        children[i] = toStr.call(parent[i]) === strObj ? {} : []; // Key part for creating new Object
        children[i] = extendDeep(parent[i], child[i]);
      } else {
        children[i] = parent[i];
      }
    }
  }
  return children;
}
