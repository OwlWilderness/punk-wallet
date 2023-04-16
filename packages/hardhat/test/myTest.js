const { ethers } = require("hardhat");
const { use, expect } = require("chai");
const { solidity } = require("ethereum-waffle");

use(solidity);

describe("My Dapp", function () {
  let myContract;

  describe("Hoot", function () {
    it("Should deploy Hoot", async function () {
      const YourContract = await ethers.getContractFactory("Hoot");

      myContract = await YourContract.deploy();
    });

    describe("hoot()", function () {
      it("Should be able to hoot", async function () {
        await myContract.hoot();
       // expect(await myContract.purpose()).to.equal(newPurpose);
      });
    });
  });
});
