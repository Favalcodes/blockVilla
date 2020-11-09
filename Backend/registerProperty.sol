
pragma solidity ^0.6.0;

import './ownable.sol';
import './userRegistry.sol'

contract propertyRegister is userRegistry  {    

   struct Property{
       string name;
       string location;
       uint32 rentOrSale;
       uint132 price;
       uint256 propertyDeed;
       bool status

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