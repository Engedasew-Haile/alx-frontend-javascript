"""export default function updateUniqueItems(map) {
"""  if (!(map instanceof Map)) throw Error('Cannot process');
"""  for (const i of map) if (i[1] === 1) map.set(i[0], 100);
"""  return map;
"""}
const updateUniqueItems = (map) => {
  if (map instanceof Map) {
    map.forEach((value, key, map) => {
      if (value === 1) {
        map.set(key, 100);
      }
    });
    return map;
  }
  throw new Error('Cannot process');
};

export default updateUniqueItems;
