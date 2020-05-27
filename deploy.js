const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "cabbage filter use involve lawsuit crop cloud embody tiger shine ski shell",
  "https://rinkeby.infura.io/v3/c3f1f484d30d43e6b39896b579731a03"
);

const web3 = new Web3(provider);
