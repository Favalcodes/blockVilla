const propertySaleAbi = [
   
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "address",
        "name": "new_owner",
        "type": "address"
      }
    ],
    "name": "_propertySold",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "location",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "rooms",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "bathrooms",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint32",
        "name": "rentOrSale",
        "type": "uint32"
      },
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "price",
        "type": "uint256"
      }
    ],
    "name": "newProperty",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "uint256",
        "name": "id",
        "type": "uint256"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "work_address",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "extra_detail",
        "type": "string"
      }
    ],
    "name": "newUser",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "string",
        "name": "name",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "work_address",
        "type": "string"
      },
      {
        "indexed": false,
        "internalType": "string",
        "name": "extra_detail",
        "type": "string"
      }
    ],
    "name": "userDetail",
    "type": "event"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_location",
        "type": "string"
      },
      {
        "internalType": "uint32",
        "name": "_rooms",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "_bathrooms",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "_rentOrSale",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "_price",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "_propertyDeed",
        "type": "uint256"
      }
    ],
    "name": "addProperty",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_name",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_work_address",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_extra_detail",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "_passsword",
        "type": "string"
      }
    ],
    "name": "addUser",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_propertyId",
        "type": "uint256"
      }
    ],
    "name": "approveProperty",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "nonpayable",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "numberOfProperties",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "string",
        "name": "_password",
        "type": "string"
      }
    ],
    "name": "userLogin",
    "outputs": [
      {
        "internalType": "bool",
        "name": "",
        "type": "bool"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_id",
        "type": "uint256"
      }
    ],
    "name": "viewProperty",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      },
      {
        "internalType": "uint32",
        "name": "",
        "type": "uint32"
      },
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "_userId",
        "type": "uint256"
      }
    ],
    "name": "viewUserProfile",
    "outputs": [
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "propertyId",
        "type": "uint256"
      }
    ],
    "name": "buyProperty",
    "outputs": [
      {
        "internalType": "address",
        "name": "",
        "type": "address"
      },
      {
        "internalType": "string",
        "name": "",
        "type": "string"
      }
    ],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "propertyId",
        "type": "uint256"
      },
      {
        "internalType": "uint256",
        "name": "amount",
        "type": "uint256"
      }
    ],
    "name": "effectTransfer",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }

  ];
const propertySaleAddress = "0x777f04047d155ee58c2c98461943428f3d82d010";

document.getElementById("userform").addEventListener("submit", async function(e){
    e.preventDefault();
  
    const web3 = new Web3(window.ethereum)
  
    const propertySale = new web3.eth.Contract(
      propertySaleAbi,
      propertySaleAddress
    );
  
    const name        = document.getElementById("name").value
    const workAddress = document.getElementById("workaddress").value
    const password    = document.getElementById("password").value
    console.log(password)
  
    const account = localStorage.getItem("address")
    let user = await propertySale.methods.addUser(name, workAddress, "Realtor", password, 1234).send({ from: account})
    if(user){
      e.submit()
      const data = user.events.newUser.returnedValues
      window.location.replace("../index.php");
    }
    console.log(user)
  })