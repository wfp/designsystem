let lastId = 0;

export function uniqueId(prefix = 'id') {
  lastId++;
  return `${prefix}${lastId}`;
}

export default uniqueId;
