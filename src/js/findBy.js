export default function findBy(property, name) {
  return (element) => element[property] === name;
}
