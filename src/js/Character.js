/**
 * Creates new Character
 * @class
 *
 * @param {string} name Character name (2...10 symbols)
 * @param {string} type Character type (see characterTypes)
 *
 * @throws Will throw an error if the name length or the type is wrong
 */
function Character(name, type) {
  if (name.length < 2 || name.length > 10) {
    throw new Error('Error in Character: wrong name length');
  }
  if (!Character.getAvailableTypeNames().includes(type)) {
    throw new Error('Error in Character: wrong type');
  }

  this.name = name;
  this.type = type;
  this.level = 1;
  this.health = 100;
  this.attack = Character.types.filter((value) => value.typeName === type)[0].attack;
  this.defence = Character.types.filter((value) => value.typeName === type)[0].defence;
}

Character.prototype = {
  damage: function (points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) this.health = 0;
  },
};

Character.types = [
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

Character.getAvailableTypeNames = () => Character.types.map((type) => type.typeName);

export default Character;
