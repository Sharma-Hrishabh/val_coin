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
      return tokenInstance.standards();
    }).then(function(standards){
      assert.equal(standards,'ValToken v1.0');
    });
  })



//  it('allocates the initial supply on deployment',function(){
//
//   return ValToken.deployed().then(function(instance){
//     tokenInstance=instance;
//     return tokenInstance.totalSupply();
//   }).then(function(totalSupply){
//   assert.equal(totalSupply.toNumber(),1000000,'sets the total supplt to 1,000,000 ');
//   return tokenInstance.balanceOf(accounts[0]);
// }).then(function(adminBalance){
//   assert.equal(adminBalance.toNumber(),1000000,'it allocates initial supply to admin account');
//
// });
// });
// });
it('allocates the initial supply upon deployment', function() {
    return ValToken.deployed().then(function(instance) {
      tokenInstance = instance;
      return tokenInstance.totalSupply();
    }).then(function(totalSupply) {
      assert.equal(totalSupply.toNumber(), 1000000, 'sets the total supply to 1,000,000');
      return tokenInstance.balanceOf(accounts[0]);
    }).then(function(adminBalance) {
      assert.equal(adminBalance.toNumber(), 1000000, 'it allocates the initial supply to the admin account');
    });
  });

// it('transfers token ownership',function(){
// return ValToken.deployed().then(function(instance){
//   tokenInstance=instance;
//   return tokenInstance.transfer.call(accounts[2],99999999999);
// }).then(assert.fail).catch(function(error){
//  assert(error.message.indexOf('revert') >= 0 ,'error message must contain revert');
//
// })
//
// });

it('transfers token ownership', function() {
    return ValToken.deployed().then(function(instance) {
      tokenInstance = instance;
      // Test `require` statement first by transferring something larger than the sender's balance
      return tokenInstance.transfer.call(accounts[1], 99999999999999999999999);
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert') >= 0, 'error message must contain revert');
    })
  });






});
