const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");
const { mnemonic, infuraLink } = require("./keys");

const provider = new HDWalletProvider(mnemonic, infuraLink);

const web3 = new Web3(provider);

(async () => {
  const accounts = await web3.eth.getAccounts();

  let receipt = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: ["First Contract - Deployment"],
    })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", receipt.options.address);
})();
