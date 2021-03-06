'use strict';

var EventEmitter = require('events').EventEmitter;

function Options(group) {
  EventEmitter.call(this);
  this._group = typeof group === 'object' ? group : {};
}
Options.prototype = Object.create(EventEmitter.prototype);
Options.prototype.constructor = Options;

Options.prototype.list = function () {
  return Object.keys(this._group);
};

Options.prototype.get = function (id) {
  return this._group[id];
};

Options.prototype.select = function (id) {
  // Haz que se emita un evento cuando seleccionamos una opción.
 //var op = id;
 var found = false;
 for(var i in this._group){
 	if(i === id) found = true;
 }
 var idFalsa = id;
 var reason = 'option-does-not-exist';
 if(found){
  this.emit('chose', id, this._group[id]);
}else{
  this.emit('choseError', reason, idFalsa);
}
};

module.exports = Options;
