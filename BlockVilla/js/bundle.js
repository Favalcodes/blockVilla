const registerUsersAbi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
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
];
const registerUserAddress = "0xc1b7c5b2fe9093c7da61dbacbb721107cfe4b94a";
const web3 = new Web3(
  "https://ropsten.infura.io/v3/006328960ee54ae8a36245d0d0b3665b"
);
const registerUsers = new web3.eth.Contract(
  registerUsersAbi,
  registerUserAddress
);

const registerPropertyAbi = [
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
    inputs: [],
    name: "_viewProperties",
    outputs: [],
    stateMutability: "view",
    type: "function",
    constant: true,
  },
];
const registerPropertyAddress = "0x9b4878357f1f4c7bc3602d3d241dfe39188c2cda";
const web3 = new Web3(
  "https://ropsten.infura.io/v3/006328960ee54ae8a36245d0d0b3665b"
);
const registerProperty = new web3.eth.Contract(
  registerPropertyAbi,
  registerPropertyAddress
);

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
const propertySaleAddress = "0xabbb29826b74c412ed89295f7cee81c1893f8c19";
const web3 = new Web3(
  "https://ropsten.infura.io/v3/006328960ee54ae8a36245d0d0b3665b"
);
const propertySale = new web3.eth.Contract(
  propertySaleAbi,
  propertySaleAddress
);

document.addEventListener("DOMContentLoaded", () => {
  const $setData = document.getElementById("setData");
  const $data = document.getElementById("data");
  let accounts = [];
  web3.eth.getAccounts().then((_accounts) => {
    accounts = _accounts;
  });
  const getData = () => {
    simpleStorage.methods
      .get()
      .call()
      .then((result) => {
        $data.innerHTML = result;
      });
  };
  getData();
  $setData.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = e.target.elements[0].value;
    simpleStorage.methods.set(data).send({ from: accounts[0] }).then(getData);
  });
});
