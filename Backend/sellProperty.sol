pragma solidity ^0.6.0;

import './registerProperty.sol'

contract PropertySale is registerProperty{

    event _propertySold();


    modifier rightprice (uint _propertyId) {
        require(msg.value == properties[_propertyId].price, "You have input the wrong amount");
    }

    function _buyProperty(uint propertyId ) payable external usersOnly rightprice(propertyId) returns(address) {
        
        properties[propertyId].saleStatus = true;
        return msg.sender;       
    }

    function effectTransfer(uint propertyId, uint amount) external onlyOwner{
        require(amount == properties[propertyId].price, "You have input the wrong amount")
        address payable recipient = propertyToOwner[propertyId];
        recepient.transfer(amount);
    }

    
}