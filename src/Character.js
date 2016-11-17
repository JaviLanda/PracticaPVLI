'use strict';
var dice = require('./dice');

function Character(name, features) {
  features = features || {};
  this.name = name;
  this.party = null;
  this.initiative = features.initiative || 0;
  this._defense = features.defense || 0;
  this.weapon = features.weapon || null;
  this._hp = features.hp || 0;
  this._mp = features.mp || 0;
  this.maxMp = features.maxMp || this._mp;
  this.maxHp = features.maxHp || this._hp || 15;

  // Extrae del parámetro features cada característica y alamacénala en
  // una propiedad.

  
  
}

Character.prototype._immuneToEffect = ['name', 'weapon'];

Character.prototype.isDead = function () {
 
  return this._hp <= 0;

  // Rellena el cuerpo de esta función 
  //(HECHO)
};

Character.prototype.applyEffect = function (effect, isAlly) {
  if(!isAlly){
  
    if(dice.d100() <= this.defense) return false;
  }

    //this.party = effect.party || this.party;
    this.initiative = effect.initiative + this.initiative || this.initiative;
    this._defense = effect.defense + this.defense || this.defense;
    //this.weapon = effect.weapon + this.weapon || this.weapon;
    this._hp = effect.hp + this.hp || this.hp;
    this._mp = effect.mp + this.mp || this.mp;
    this.maxMp = effect.maxMp + this.maxMp || this.maxMp;
    this.maxHp = effect.maxHp + this.maxHp || this.maxHp;
    return true;
  
 
 // Implementa las reglas de aplicación de efecto para modificar las
  // características del personaje. Recuerda devolver true o false según
  // si el efecto se ha aplicado o no.
};

Object.defineProperty(Character.prototype, 'mp', {
  get: function () {
    return this._mp;
  },
  set: function (newValue) {
    this._mp = Math.max(0, Math.min(newValue, this.maxMp));
  }
});

Object.defineProperty(Character.prototype, 'hp', {
  get: function () {
    return this._hp;
  },
  set: function (newValue) {
    this._hp = Math.max(0, Math.min(newValue, this.maxHp));
  }
});

Object.defineProperty(Character.prototype, 'defense', {
  get: function () {
    return this._defense;
  },
  set: function (newValue) {
    this._defense = Math.max(0, Math.min(newValue, 100));
  }
});

// Puedes hacer algo similar a lo anterior para mantener la defensa entre 0 y
// 100.
// 

module.exports = Character;
