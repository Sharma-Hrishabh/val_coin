var ValToken=artifacts.require("./ValToken.sol");

contract('ValToken',function(accounts){

 it('sets the tital supply on deployment',function(){

  return ValToken.deployed().then(function(instance){
    tokenInstance=instance;
    return tokenInstance.totalSupply();
  }).then(function(totalSupply){
  assert.equal(totalSupply.toNumber(),1000000,'sets the total supplt to 1,000,000 ');
  });
});
})
