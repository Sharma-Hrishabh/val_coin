var ValToken=artifacts.require("./ValToken.sol");

contract('ValToken',function(accounts){
  var tokenInstance;
  it('sets the initial values of token correctly',function(){
    return ValToken.deployed().then(function(instance){
      tokenInstance=instance;
      return tokenInstance.name();

    }).then(function(name){
      assert.equal(name,'ValToken','has the correct name');
      return tokenInstance.symbol();
    }).then(function(symbol){
      assert.equal(symbol,'VT','has correct symbol');
    });



  })



 it('allocates the initial supply on deployment',function(){

  return ValToken.deployed().then(function(instance){
    tokenInstance=instance;
    return tokenInstance.totalSupply();
  }).then(function(totalSupply){
  assert.equal(totalSupply.toNumber(),1000000,'sets the total supplt to 1,000,000 ');
  return tokenInstance.balanceOf(accounts[0]);
}).then(function(adminBalance){
  assert.equal(adminBalance.toNumber(),1000000,'it allocates initial supply to admin account');

});
});
});
