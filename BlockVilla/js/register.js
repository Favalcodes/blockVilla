const propertySaleAbi = [
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "address",
          name: "new_owner",
          type: "address",
        },
      ],
      name: "_propertySold",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "location",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "extraDetails",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint32",
          name: "landOrHouse",
          type: "uint32",
        },
        {
          indexed: false,
          internalType: "uint32",
          name: "rentOrSale",
          type: "uint32",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "price",
          type: "uint256",
        },
      ],
      name: "newProperty",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "uint256",
          name: "id",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "work_address",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "extra_detail",
          type: "string",
        },
      ],
      name: "newUser",
      type: "event",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_location",
          type: "string",
        },
        {
          internalType: "string",
          name: "_extraDetails",
          type: "string",
        },
        {
          internalType: "uint32",
          name: "_landOrHouse",
          type: "uint32",
        },
        {
          internalType: "uint32",
          name: "_rentOrSale",
          type: "uint32",
        },
        {
          internalType: "uint256",
          name: "_price",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_propertyDeed",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "_user_id",
          type: "uint256",
        },
      ],
      name: "_addProperty",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_propertyId",
          type: "uint256",
        },
      ],
      name: "_approveProperty",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_userId",
          type: "uint256",
        },
      ],
      name: "_approveUser",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_password",
          type: "string",
        },
      ],
      name: "_userLogin",
      outputs: [
        {
          internalType: "bool",
          name: "",
          type: "bool",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [],
      name: "_viewProperties",
      outputs: [],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "_userId",
          type: "uint256",
        },
      ],
      name: "_viewUserProfile",
      outputs: [],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "string",
          name: "_work_address",
          type: "string",
        },
        {
          internalType: "string",
          name: "_extra_detail",
          type: "string",
        },
        {
          internalType: "string",
          name: "_passsword",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "_photo",
          type: "uint256",
        },
      ],
      name: "addUser",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "propertyId",
          type: "uint256",
        },
      ],
      name: "_buyProperty",
      outputs: [
        {
          internalType: "address",
          name: "",
          type: "address",
        },
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "payable",
      type: "function",
      payable: true,
    },
    {
      inputs: [
        {
          internalType: "uint256",
          name: "propertyId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "_new_owner",
          type: "address",
        },
      ],
      name: "effectTransfer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
  ];
const propertySaleAddress = "0xdfdbba269a7961307d8342eba7a558d3ff8a551c";

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
  
    const account = localStorage.getItem("address")
    let user = await propertySale.methods.addUser(name, workAddress, "Realtor", password, 1234).send({ from: account})
    if(user){
      const data = user.events.newUser.returnedValues
      window.location.replace("http://127.0.0.1:5500/blockVilla/BlockVilla/index.html#");
    }
    console.log(user)
  })