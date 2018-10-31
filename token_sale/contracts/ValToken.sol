pragma solidity ^0.4.2;

contract ValToken{
//constructor
//set total tokens
//read total number of tokens
mapping(address => uint256) public balanceOf;
  uint256 public totalSupply;
  function ValToken(uint256 _initialSupply) public{
    balanceOf[msg.sender]=_initialSupply;
    totalSupply = _initialSupply;
    //alloacte the initial supply
  }



}
