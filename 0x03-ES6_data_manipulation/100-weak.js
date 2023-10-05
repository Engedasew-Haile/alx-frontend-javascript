iconst weakMap = new WeakMap();
export const queryAPI = (endpoint) => {
  const { protocol, name } = endpoint;
  const key = `${protocol}-${name}`;
  const count = weakMap.get(key) || 0;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(key, count + 1);
};
