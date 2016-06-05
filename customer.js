var Customer = function( name, funds ){
  this.name = name;
  this.collection = [];
  this.funds = funds;
}

Customer.prototype = {

  addRecords: function(){

    for(var i = 0; i < arguments.length; i++) {
      this.collection.push( arguments[i] )
    }
  },

  buyRecord: function( shop, record ){
    //check customer has sufficient funds
    if( this.funds > record.price ){
    //call on shop's sell record function
      shop.sellRecord( record )
    //add record to customer's record array
      this.addRecords( record )
    //remove record price from customer's funds
      this.funds -= record.price;
    } else{
      return "Customer has insufficient funds to buy this record."
    };
  },

  sellRecord: function( record ){
    this.collection.splice( this.collection.indexOf( record ), 1 );
    this.funds += record.price;
  },

}

module.exports = Customer;