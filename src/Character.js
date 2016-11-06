'use strict';
var dice = require('./dice');

function Character(name, features) {
  features = features || {};
  this.name = name;
  this.party = null;
  this.initiative = features.initiative || 0;
  this.defense = features.defense || 0;
  this.weapon = null;
  this._hp = features.hp || 0;
  this._mp = features.mp || 0;
  this.maxMp = features.maxMp || this._mp;
  this.maxHp = features.maxHp || this._hp || 15;

  // Extrae del parámetro features cada característica y alamacénala en
  // una propiedad.

  //this._mp = features.mp || 0;
  //this.maxMp = features.maxMp || this._mp;
  //(HECHO)
}

Character.prototype._immuneToEffect = ['name', 'weapon'];

Character.prototype.isDead = function () {
  if(this._hp > 0)
    return false;
  if(this._hp <= 0)
    return true;
  // Rellena el cuerpo de esta función 
  //(HECHO)
};

Character.prototype.applyEffect = function (effect, isAlly) {

//DIOOOOOOOOSS COMO SE HACEEEEEEEEEEEEE JODEEERRR
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

// Puedes hacer algo similar a lo anterior para mantener la defensa entre 0 y
// 100.
// (HECHO)

module.exports = Character;
