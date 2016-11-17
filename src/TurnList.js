'use strict';

function TurnList() {}

TurnList.prototype.reset = function (charactersById) {
  this._charactersById = charactersById;

  this._turnIndex = -1;
  this.turnNumber = 0;
  this.activeCharacterId = null;
  this.list = this._sortByInitiative();
};

TurnList.prototype.next = function () {
  // Haz que calcule el siguiente turno y devuelva el resultado
  // según la especificación. Recuerda que debe saltar los personajes
  // muertos.
  var Alive = false;
  var obj = {
   number:0,
   party:null,
   activeCharacterId:null
   };
   
  var j = this.turnNumber;
 this.turnNumber++;
   
  while(!Alive){
    j = j % this.list.length;
  if(!this._charactersById[this.list[j]].isDead()){
    this.activeCharacterId = this.list[j];
   
    Alive = true;
  }
   j++;
  }
  
   obj.number = this.turnNumber;
    obj.activeCharacterId = this.activeCharacterId;
    obj.party = this._charactersById[this.activeCharacterId].party;
   
   
  return obj;
 

};

TurnList.prototype._sortByInitiative = function (a,b) {
  // Utiliza la función Array.sort(). ¡No te implementes tu propia
  // función de ordenación!
 var Clist = [];
  var Ilist = [];
  for(var char in this._charactersById){
      Clist.push({charact: char,
       initiatives: this._charactersById[char].initiative});
}
  
   Clist.sort(function(a,b){
    if(a.initiatives < b.initiatives) return 1;
    else if(a.initiatives > b.initiatives) return -1;
    else return 0;
  
   });
   
   
 for(var i in Clist){
   Ilist.push(Clist[i].charact);
 }
  return Ilist;
};

module.exports = TurnList;

