/**
 * Create and return new Character
 *
 * @param {string} name Character name (2...10 symbols)
 * @param {string} type Character type (see characterTypes)
 *
 * @throws Will throw an error if the name length or the type is wrong
 */

export const characterTypes = [
  {
    typeName: 'Bowman',
    attack: 25,
    defence: 25,
  },
  {
    typeName: 'Swordsman',
    attack: 40,
    defence: 10,
  },
  {
    typeName: 'Magician',
    attack: 10,
    defence: 40,
  },
  {
    typeName: 'Undead',
    attack: 25,
    defence: 25,
  },
  {
    typeName: 'Zombie',
    attack: 40,
    defence: 10,
  },
  {
    typeName: 'Daemon',
    attack: 10,
    defence: 40,
  },
];

export default function Character(name, type) {
  if (name.length < 2 || name.length > 10) {
    throw new Error('Error in Character: wrong name length');
  }
  if (!characterTypes.map((characterType) => characterType.typeName).includes(type)) {
    throw new Error('Error in Character: wrong type');
  }

  return {
    name,
    type,
    level: 1,
    health: 100,
    attack: characterTypes.filter((value) => value.typeName === type)[0].attack,
    defence: characterTypes.filter((value) => value.typeName === type)[0].defence,
    damage(points) {
      this.health -= points * (1 - this.defence / 100);
    },
  };
}
