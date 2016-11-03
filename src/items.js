'use strict';

function Item(name, effect) {
  this.name = name;
  this.effect = effect;         
}

function Weapon(name, effect, damage, extraEffect) {
  extraEffect = extraEffect || new Effect({});
  Item.call(this, name, effect);
  this.damage = damage;
  this.extraEffect = extraEffect;

  // Haz que Weapon sea subtipo de Item haciendo que llame al constructor de
  // de Item. (HECHO)
}
Weapon.prototype = Object.create(Item.prototype);
Weapon.prototype.constructor = Weapon;

// Termina de implementar la herencia haciendo que la propiedad prototype de
// Item sea el prototipo de Weapon.prototype y recuerda ajustar el constructor. (CREO QUE HECHO)

function Scroll(name, cost, effect) {
  Item.call(this, name, effect);
  this.cost = cost;
}
Scroll.prototype = Object.create(Item.prototype);
Scroll.prototype.constructor = Scroll;

Scroll.prototype.canBeUsed = function (mp) {
  // El pergamino puede usarse si los puntos de maná son superiores o iguales
  // al coste del hechizo.
  if(mp >= )
};

function Effect(variations) {
   var variations;
   var effect;
   // Copia las propiedades que se encuentran en variations como propiedades de
   // este objeto.(HECHO)
}

module.exports = {
  Item: Item,
  Weapon: Weapon,
  Scroll: Scroll,
  Effect: Effect
};
