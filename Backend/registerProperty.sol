
pragma solidity ^0.6.0;

import './ownable.sol';

contract propertyRegister is ownable  {    

   struct Property{
       string name;
       string location;
       uint32 rentOrSale;
       uint132 price;
       uint256 propertyDeed;
       boolean status

   }

   Property[] public properties;

   mapping (uint => address) propertyToOwner;
   event newProperty();

   function _addProperty(){

   }

    function _approveProperty() {

    }

    function editDetails 


}