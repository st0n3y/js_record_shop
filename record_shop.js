var _ = require( 'lodash' );

var RecordShop = function( name, city, funds ){
  this.name = name;
  this.city = city;
  this.inventory = [];
  this.funds = funds;
}

RecordShop.prototype = {

  addRecords: function(){

    for(var i = 0; i < arguments.length; i++) {
      this.inventory.push( arguments[i] )
    }
  },

  listInventory: function(){
    this.inventory.forEach( function( item ){
      console.log( item.title + " by " + item.artist + ". Price: £" + item.price);
    } )
  },

}

module.exports = RecordShop;