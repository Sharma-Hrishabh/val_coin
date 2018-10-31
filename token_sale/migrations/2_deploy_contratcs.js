var ValToken = artifacts.require("./ValToken.sol");

module.exports = function(deployer) {
  deployer.deploy(ValToken,1000000);
};
