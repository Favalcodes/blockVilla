// SPDX-License-Identifier: MIT
pragma solidity ^0.6.0;

import './PropertyRegister.sol';

contract PropertySale is PropertyRegister{

    event _propertySold(string name, uint256 amount, address new_owner);

    address payable recipient;
    
    modifier rightPrice (uint _propertyId) {
        require(msg.value == properties[_propertyId].price, "You have to input the right amount");
        _;
    }

    modifier forSale(uint _propertyId) {
        require(properties[_propertyId].status == SaleStatus.onSale, "Not for sale");
        _;
    }

    mapping (uint => address) awaitingProperty;

    function buyProperty(uint propertyId ) payable external usersOnly forSale(propertyId) rightPrice(propertyId) returns(address, string memory) {
        
        properties[propertyId].status = SaleStatus.pendingSale;
        address oldOwner = propertyToOwner[propertyId];
        propertyCount[oldOwner] --;
        awaitingProperty[propertyId] = msg.sender;
        return (msg.sender, "Please wait for not more than 24 hours to effect the transfer");       
    }

    function effectTransfer(uint propertyId, uint amount ) external onlyOwner{
        require(amount == properties[propertyId].price, "You have to input the right amount");
        recipient = payable(propertyToOwner[propertyId]);
        recipient.transfer(amount);
        address _newOwner = awaitingProperty[propertyId];
        propertyToOwner[propertyId] = _newOwner;
        propertyCount[_newOwner] ++; 
        properties[propertyId].status = SaleStatus.sold;
        emit _propertySold(properties[propertyId].name, amount, _newOwner);
    }

    
}