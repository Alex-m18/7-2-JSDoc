import orderByProps from '../orderByProps';

test('should sort object by properties', () => {
  const received = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const props = ['name', 'level'];
  const expected = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
  ];
  expect(orderByProps(received, props)).toEqual(expected);
});

test('should sort object by properties', () => {
  const received = { };
  const props = ['name', 'level'];
  const expected = [
    { key: 'name', value: undefined },
    { key: 'level', value: undefined },
  ];
  expect(orderByProps(received, props)).toEqual(expected);
});

test('should sort object by properties', () => {
  const received = {
    name: 'мечник',
    health: 10,
    level: 2,
    attack: 80,
    defence: 40,
  };
  const props = ['surname'];
  const expected = [
    { key: 'surname', value: undefined },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' },
  ];
  expect(orderByProps(received, props)).toEqual(expected);
});
