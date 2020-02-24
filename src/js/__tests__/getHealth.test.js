import getHealth from '../getHealth';

test('should getHealth', () => {
  expect(getHealth({ name: 'user', health: 100 })).toBe('healthy');
  expect(getHealth({ name: 'user', health: 51 })).toBe('healthy');
  expect(getHealth({ name: 'user', health: 50 })).toBe('wounded');
  expect(getHealth({ name: 'user', health: 15 })).toBe('wounded');
  expect(getHealth({ name: 'user', health: 14 })).toBe('critical');
  expect(getHealth({ name: 'user', health: 1 })).toBe('critical');
});
