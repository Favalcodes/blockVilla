pragma solidity ^0.6.0;

import './registerProperty.sol';

contract PropertySale is registerProperty{

    event _propertySold(string name, uint256 amount, address new_owner);


    modifier rightprice (uint _propertyId) {
        require(msg.value == properties[_propertyId].price, "You have input the wrong amount");
    }

    modifier onSale(uint _propertyId) {
        require(properties[_propertyId].saleStatus == false);
    }

    function _buyProperty(uint propertyId ) payable external usersOnly onSale(propertyId) rightprice(propertyId) returns(address, string) {
        
        properties[propertyId].saleStatus = true;
        old_owner = propertyToOwner[propertyId];
        propertyCount[old_owner] --;
        return (msg.sender, "Please wait for not more than 24 hours to effect the transfer";       
    }

    function effectTransfer(uint propertyId, uint amount, address _new_owner) external onlyOwner{
        require(amount == properties[propertyId].price, "You have input the wrong amount")
        address payable recipient = propertyToOwner[propertyId];
        recepient.transfer(amount);
        propertyToOwner[propertyId] = new_owner;
        propertyCount[_new_owner] ++; 
        emit _propertySold(properties[propertyId].name, amount, _new_owner);
    }

    
}