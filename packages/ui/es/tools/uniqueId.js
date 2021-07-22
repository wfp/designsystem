var lastId = 0;
export function uniqueId() {
  var prefix = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'id';
  lastId++;
  return "".concat(prefix).concat(lastId);
}
export default uniqueId;