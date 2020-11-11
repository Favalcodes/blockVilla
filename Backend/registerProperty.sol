// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
pragma experimental ABIEncoderV2;

import './userRegistry.sol';

contract propertyRegister is registerUsers  {    


   struct Property{
       string name;
       string location;
       string extraDetails;
       uint32 landOrHouse;
       uint32 rentOrSale;
       uint256 price;
       uint256 propertyDeed;
       bool saleStatus;
       bool status;

   }

   modifier usersOnly(uint profile_id) {
       require(msg.sender == profileToUser[profile_id]);
       _;
   }  

   Property[]  properties;

   mapping (uint => address) propertyToOwner;
   mapping (address => uint) propertyCount;
   
   event newProperty(string name, string location,string extraDetails, uint32 landOrHouse, uint32 rentOrSale, uint256 price);

   function _addProperty(string memory _name, string memory _location,string memory _extraDetails, uint32 _landOrHouse, uint32 _rentOrSale, uint256 _price, uint256 _propertyDeed, uint _user_id) external usersOnly(_user_id) {

       properties.push(Property(_name, _location,_extraDetails, _landOrHouse, _rentOrSale, _price,_propertyDeed, false,false));
       uint id = properties.length - 1;
       propertyToOwner[id] = msg.sender;
       propertyCount[msg.sender] ++;
       emit newProperty(_name, _location, _extraDetails, _landOrHouse, _rentOrSale, _price);

   }

    function _approveProperty(uint _propertyId) external onlyOwner {
        properties[_propertyId].status = true;
    }

    // function _viewProperties() view public returns(Property[] memory) {
    //     return properties;
    // } 
    
    


}