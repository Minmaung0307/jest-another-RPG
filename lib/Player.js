const Potion = require("./Potion");
const Character = require("./Character");

class Player extends Character {
  constructor(name = "") {
    super(name);

    this.inventory = [new Potion("health"), new Potion()];
  }

  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility,
    };
  }

  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  }

  addPotion(potion) {
    this.inventory.push(potion);
  }

  usePotion(index) {
    const potion = this.inventory.splice(index, 1)[0];

    switch (potion.name) {
      case "agility":
        this.agility += potion.value;
        break;
      case "health":
        this.health += potion.value;
        break;
      case "strength":
        this.strength += potion.value;
        break;
    }
  }
}

module.exports = Player;

/*
const Potion = require("../lib/Potion");

function Player(name = "") {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion("health"), new Potion()];
}

Player.prototype.getHealth = function () {
  return `${this.name}'s health is now ${this.health}!`;
};

Player.prototype.getStats = function () {
  return {
    potions: this.inventory.length,
    health: this.health,
    strength: this.strength,
    agility: this.agility,
  };
};

Player.prototype.getInventory = function () {
  if (this.inventory.length) {
    return this.inventory;
  }
  return false;
};

Player.prototype.isAlive = function () {
  if (this.health === 0) {
    return false;
  }
  return true;
};

Player.prototype.addPotion = function (potion) {
  this.inventory.push(potion);
};

Player.prototype.usePotion = function (index) {
  const potion = this.inventory.splice(index, 1)[0];

  switch (potion.name) {
    case "agility":
      this.agility += potion.value;
      break;
    case "health":
      this.health += potion.value;
      break;
    case "strength":
      this.strength += potion.value;
      break;
  }
};

Player.prototype.getAttackValue = function () {
  const min = this.strength - 5;
  const max = this.strength + 5;

  return Math.floor(Math.random() * (max - min) + min);
};

Player.prototype.reduceHealth = function (health) {
  this.health -= health;

  if (this.health < 0) {
    this.health = 0;
  }
};

module.exports = Player;
*/

/*
function Player(name = "") {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);

  this.inventory = [new Potion("health"), new Potion()];

  // returns an object with various player properties
  this.getStats = function () {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility,
    };
  };

  // returns the inventory array or false if empty
  this.getInventory = function () {
    if (this.inventory.length) {
      return this.inventory;
    }
    return false;
  };
}
*/
/*
function Player(name = "") {
  this.name = name;

  this.health = Math.floor(Math.random() * 10 + 95);
  this.strength = Math.floor(Math.random() * 5 + 7);
  this.agility = Math.floor(Math.random() * 5 + 7);
  this.inventory = [new Potion("health"), new Potion()];
}
*/
