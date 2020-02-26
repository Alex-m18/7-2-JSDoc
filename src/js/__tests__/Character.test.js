import Character from '../Character';

test('should return right character', () => {
  const expected = {
    name: 'vasya',
    type: 'Bowman',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(new Character('vasya', 'Bowman')).toMatchObject(expected);
});

test('should return right character', () => {
  const expected = {
    name: 'vasya',
    type: 'Swordsman',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(new Character('vasya', 'Swordsman')).toMatchObject(expected);
});

test('should return right character', () => {
  const expected = {
    name: 'vasya',
    type: 'Magician',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(new Character('vasya', 'Magician')).toMatchObject(expected);
});

test('should return right character', () => {
  const expected = {
    name: 'vasya',
    type: 'Undead',
    level: 1,
    health: 100,
    attack: 25,
    defence: 25,
  };
  expect(new Character('vasya', 'Undead')).toMatchObject(expected);
});

test('should return right character', () => {
  const expected = {
    name: 'vasyavasya',
    type: 'Zombie',
    level: 1,
    health: 100,
    attack: 40,
    defence: 10,
  };
  expect(new Character('vasyavasya', 'Zombie')).toMatchObject(expected);
});

test('should return right character', () => {
  const expected = {
    name: 'va',
    type: 'Daemon',
    level: 1,
    health: 100,
    attack: 10,
    defence: 40,
  };
  expect(new Character('va', 'Daemon')).toMatchObject(expected);
});

test('should throw', () => {
  expect(() => new Character('v', 'Bowman')).toThrow();
  expect(() => new Character('v1234567890', 'Bowman')).toThrow();
  expect(() => new Character('vasya', 'Bowman123')).toThrow();
});

test('should damage', () => {
  const character = new Character('vasya', 'Daemon');
  character.damage(100);
  expect(character.health).toBe(40);
  character.damage(10);
  expect(character.health).toBe(34);
  character.damage(100);
  expect(character.health).toBe(0);
});
