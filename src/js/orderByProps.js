export default function orderByProps(obj, order) {
  const result1 = [];
  const result2 = [];
  for (const prop of order) {
    result1.push({ key: prop, value: obj[prop] });
  }
  for (const prop in obj) {
    if (!order.includes(prop)) result2.push({ key: prop, value: obj[prop] });
  }
  return result1.concat(result2.sort((a, b) => (a.key.localeCompare(b.key))));
}
