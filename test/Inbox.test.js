const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const provider = ganache.provider();
const web3 = new Web3(provider);
const { interface, bytecode } = require("../compile");

let accounts, inbox;
const welcomeMsg = "First Contract in your Inbox";

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: bytecode,
      arguments: [welcomeMsg],
    })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address);
  });

  it("should have a welcome message", async () => {
    const msg = await inbox.methods.message().call();

    assert.equal(msg, welcomeMsg);
  });

  it("should be able to update its message", async () => {
    const newMsg = "Message Updated";

    let receipt = await inbox.methods
      .setMessage(newMsg)
      .send({ from: accounts[0] });

    const msg = await inbox.methods.message().call();

    assert.equal(msg, newMsg);
  });
});
