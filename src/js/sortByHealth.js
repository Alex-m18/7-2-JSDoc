export default function sortByHealth(heroes) {
  return heroes.sort((a, b) => (a.health < b.health ? 1 : -1));
}
