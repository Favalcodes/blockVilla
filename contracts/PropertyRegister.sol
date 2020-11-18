// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;
// pragma experimental ABIEncoderV2;

import './RegisterUsers.sol';

contract PropertyRegister is RegisterUsers  {    
   
   enum SaleStatus{ pendingApproval, onSale, pendingSale, sold }
   
   struct Property{
       string name;
       string location;
       uint32 rooms;
       uint32 bathrooms;
       uint32 rentOrSale;
       uint256 price;
       uint256 propertyDeed;
       address ownedBy;
       SaleStatus status;

   }

   modifier usersOnly() {
       require(alreadyRegistered[msg.sender] == true, "Please regster into our site first");
       _;
   }  

    modifier aleadyOnSite() {
       require(alreadyRegistered[msg.sender] == true, "Please regster into our site first");
       _;
   } 

   Property[]  properties;

   mapping (uint => address) propertyToOwner;
   mapping (address => uint) propertyCount;
   
   event newProperty(uint _id, string name, string location,uint32 rooms, uint32 bathrooms, uint32 rentOrSale, uint256 price);

   function addProperty(string calldata _name, string calldata _location,uint32  _rooms, uint32 _bathrooms, uint32 _rentOrSale, uint256 _price, uint256 _propertyDeed) external usersOnly {

       properties.push(Property(_name, _location,_rooms, _bathrooms, _rentOrSale, _price,_propertyDeed,msg.sender, SaleStatus.pendingApproval ));
       uint id = properties.length - 1;
       propertyToOwner[id] = msg.sender;
       propertyCount[msg.sender] ++;
       emit newProperty(id, _name, _location, _rooms, _bathrooms, _rentOrSale, _price);

   }

    function approveProperty(uint _propertyId) external onlyOwner returns(string memory, string memory ) {
        
        require(properties[_propertyId].status == SaleStatus.pendingApproval, "This property is already approved");
        properties[_propertyId].status = SaleStatus.onSale;
        string memory name = properties[_propertyId].name;
        string memory locatedAt = properties[_propertyId].location;
        return(name, locatedAt) ;
    }

    function numberOfProperties() external onlyOwner view returns(uint) {
        uint number = properties.length;
        return number;
    }
    
    function viewProperty(uint _id) view public returns(string memory,string memory, uint32,uint32,uint32,uint256) {
        
          if (properties[_id].status == SaleStatus.onSale) {
            
            string memory name = properties[_id].name;
            string memory locatedAt = properties[_id].location;
            uint32 roomNo =properties[_id].rooms;
            uint32 bath = properties[_id].bathrooms;
            uint32 forRentOrSale = properties[_id].rentOrSale;
            uint256 pricing = properties[_id].price;
            return (name, locatedAt, roomNo, bath, forRentOrSale,pricing);
          } 
          
          
        
    }
    
    


}