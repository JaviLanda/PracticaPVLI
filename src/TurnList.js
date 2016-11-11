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
  var Dead = false;
  var j = 0;
  this.turnNumber++;
  while(!Dead){
   j = j % this.list.length;
   var auxD = this._charactersById[this.list[j]]._isDead;
  if(!auxD){
    this.activeCharacterId = this.list[j];
    Dead = true;
  }
   j++;
  }
   
  var obj = {number:this.turnNumber,
   party:this._charactersById[this.activeCharacterId].party,
   activeCharacterId:this.activeCharacterId};
  
  return obj;

};

TurnList.prototype._sortByInitiative = function () {
  // Utiliza la función Array.sort(). ¡No te implementes tu propia
  // función de ordenación!
  var Clist = [];
  var Ilist = [];
  for(var char in this._charactersById){
      Ilist.push(this._charactersById[char].initiative);
      Clist.push(char);
}
  
   return Clist.sort(function(a,b){
     var sort;
     Ilist.sort(function(c,d){
      if(c < d){
        sort = 1;
        return -1;
      } else if(c > d){
        sort = -1;
        return 1;
      }else{
        sort = 0;
        return 0;
      }

     });
return sort;
   });
   

  //dice que initiative es undefined, pero al menos me deja hacer el sort
};

module.exports = TurnList;
