
pragma solidity ^0.6.0;

import './userRegistry.sol';

contract propertyRegister is userRegistry  {    


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

   modifier usersOnly() {
       require(msg.sender == profileToUser[profile_id]);
       _;
   }  

   Property[] public properties;

   mapping (uint => address) propertyToOwner;
   mapping (address => uint) propertyCount;
   
   event newProperty(string name, string location,string extraDetails, uint32 landOrHouse, uint32 rentOrSale, uint256 price);

   function _addProperty(string _name, string _location,string _extraDetails, uint32 _landOrHouse, uint32 _rentOrSale, uint256 _price, uint256 _propertyDeed) external usersOnly {

       properties.push(Property(_name, _location,_extraDetails, _landOrHouse, _rentOrSale, _price,_propertyDeed, false,false));
       uint id = properties.length - 1;
       propertyToOwner[id] = msg.sender;
       propertyCount[msg.sender] ++;
       emit newProperty(id, _name, _location, _extraDetails, _landOrHouse, _rentOrSale, _price);

   }

    function _approveProperty(uint _propertyId) external onlyOwner {
        properties[_propertyId].status = true;
    }

    function _viewProperties() view public {
        return properties;
    } 
    
    // function editDetails()  payable {

    // } 


}