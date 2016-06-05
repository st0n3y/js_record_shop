var _ = require( 'lodash' );

var RecordShop = function( name, location, funds ){
  this.name = name;
  this.location = location;
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
      console.log( item.title + " by " + item.artist + ". Price: £" + item.price );
    } )
  },

  sellRecord: function( record ){
    //slice record from inventory array
    // _.slice( this.inventory, _.indexOf( this.inventory, record ) , 1 )
    this.inventory.splice( this.inventory.indexOf( record ), 1 );
    //add price of record to funds
    this.funds += record.price;
  },

  totalInventoryValue: function(){
    var total = 0;
    for( var record of this.inventory ){
      total += record.price
    }
    // for( var record in this.inventory ){
    //   total += this.inventory[record].price
    // }
    return total
  },

  financialReport: function(){
    console.log( "Accounting Report" + "\n" + "Available funds: " + this.funds + "\n" + "Total value of stock: " + this.totalInventoryValue().toPrecision( 4 ) );
  },

  buyRecord: function( customer, record ){
    if( this.funds > record.price ){
      customer.sellRecord( record )
      this.addRecords( record )
      this.funds -= record.price;
    } else{
      return "Shop has insufficient funds to buy this record."
    };
  },

}

module.exports = RecordShop;