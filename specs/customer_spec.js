var RecordShop = require( '../record_shop.js' );
var Record = require( '../record.js' );
var Customer = require( '../customer.js' );
var assert = require( 'chai' ).assert

describe( "Customer", function(){

  var record1 = new Record( "The Scene Between", "The Go! Team", 7.99 )
  var record2 = new Record( "De La Soul is Dead", "De La Soul", 3.99 )
  var record3 = new Record( "Drones", "Muse", 9.99 )
  var record4 = new Record( "Second Coming", "The Stone Roses", 2.99 )
  var record5 = new Record( "The Private Press", "DJ Shadow", 3.99 )
  var record6 = new Record( "Vanishing Point", "Primal Scream", 3.99 )

  var needleDrop = new RecordShop( "Needle Drop", "Edinburgh", 2000.00 )

  needleDrop.addRecords( record1, record2, record3, record4, record5, record6 )

  var record7 = new Record( "Straight Outta Compton", "N.W.A.", 2.99 )
  var record8 = new Record( "Kasabian", "Kasabian", 3.99 )
  var record9 = new Record( "Eyes Wide, Tongue Tied", "The Fratellis", 7.99 )
  var record10 = new Record( "Dummy", "Portishead", 2.99 )

  var customer1 = new Customer( "Stoney", 50.00 )


  it( "Has a name", function(){
    assert.equal( "Stoney", customer1.name )
  } );

  it( "Can add records to collection", function(){

      customer1.addRecords( record7, record8, record9, record10 )

      assert.deepEqual( [record7, record8, record9, record10], customer1.collection )
    
    } );

  it( "Starts with funds", function(){
    
    assert.equal( 50.00, customer1.funds )
  
  } );

  it( "Can buy a record", function() {
    
    customer1.buyRecord( needleDrop, record3 )
    
    assert.deepEqual( [record7, record8, record9, record10, record3], customer1.collection )
    assert.equal( 40.01, customer1.funds )
  
  } );

  it( "Can sell a record", function(){

    customer1.sellRecord( record8 )

    assert.deepEqual( [record7, record9, record10, record3], customer1.collection )
    assert.deepEqual( 44.00, customer1.funds )

  } )

} )