import findBy from '../findBy';

test('should return right object', () => {
  const expected = (property, name) => {
    const finder = findBy(property, name);
    return [
      { name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' },
      { name: 'удар', type: 'attack', description: 'Атака ударом тяжелым предметом' },
      { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
      { name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' },
    ].filter(finder);
  };

  expect(expected('name', 'урон')).toEqual(
    [{ name: 'урон', type: 'help', description: 'Страница описания элемента интерфейса' }],
  );

  expect(expected('description', 'Персонаж, обладающий магическими способностями')).toEqual(
    [{ name: 'маг', type: 'character', description: 'Персонаж, обладающий магическими способностями' }],
  );

  expect(expected('type', 'attack')).toEqual(
    [
      { name: 'удар', type: 'attack', description: 'Атака ударом тяжелым предметом' },
      { name: 'заклинание', type: 'attack', description: 'Атака магическим заклинанием' },
    ],
  );

  expect(expected('name', 'пехотинец')).toEqual([]);
});
