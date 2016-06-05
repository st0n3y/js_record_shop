var RecordShop = require( '../record_shop.js' );
var Record = require( '../record.js' );
var Customer = require( '../customer.js' );
var assert = require( 'chai' ).assert


describe( "RecordShop", function(){

  var record1 = new Record( "The Scene Between", "The Go! Team", 7.99 )
  var record2 = new Record( "De La Soul is Dead", "De La Soul", 3.99 )
  var record3 = new Record( "Drones", "Muse", 9.99 )
  var record4 = new Record( "Second Coming", "The Stone Roses", 2.99 )
  var record5 = new Record( "The Private Press", "DJ Shadow", 3.99 )
  var record6 = new Record( "Vanishing Point", "Primal Scream", 3.99 )

  var needleDrop = new RecordShop( "Needle Drop", "Edinburgh", 2000.00 )

  var record7 = new Record( "Straight Outta Compton", "N.W.A.", 2.99 )
  var record8 = new Record( "Kasabian", "Kasabian", 3.99 )
  var record9 = new Record( "Eyes Wide, Tongue Tied", "The Fratellis", 7.99 )
  var record10 = new Record( "Dummy", "Portishead", 2.99 )

  var customer1 = new Customer( "David MacKintosh", 50.00 )


  it( "Has a name", function(){
    assert.equal( "Needle Drop", needleDrop.name )
  } );

  it( "Has a location", function(){
    assert.equal( "Edinburgh", needleDrop.location )
  } );

  it( "Starts with funds", function(){
    assert.equal( 2000.00, needleDrop.funds )
  } );

  it( "Can add records to inventory", function(){

    needleDrop.addRecords( record1, record2, record3, record4, record5, record6 )

    assert.deepEqual( [record1, record2, record3, record4, record5, record6], needleDrop.inventory )
  
  } );

  it( "Can buy a record", function() {
      
    needleDrop.buyRecord( customer1, record8 )
      
    assert.deepEqual( [record1, record2, record3, record4, record5, record6, record8], needleDrop.inventory )
    assert.equal( 1996.01, needleDrop.funds )
    
  } );

  it( "Can sell a record", function(){

    needleDrop.sellRecord( record5 )

    assert.deepEqual( [record1, record2, record3, record4, record6, record8], needleDrop.inventory )
    assert.deepEqual( 2000.00, needleDrop.funds )

    console.log( needleDrop.financialReport() );

    needleDrop.listInventory()

  } );

} )