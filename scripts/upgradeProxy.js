const { ethers, upgrades } = require('hardhat');

// Place the address of your proxy here!
const proxyAddress = '0x5aA319f0150A04C8824dF63176361d1Be5D2073e';

async function main() {
  const VendingMachineV3 = await ethers.getContractFactory('VendingMachineV3');
  const upgraded = await upgrades.upgradeProxy(proxyAddress, VendingMachineV3,{
    timeout: 0,
    redeployImplementation: 'always'
  });

  const implementationAddress = await upgrades.erc1967.getImplementationAddress(
    proxyAddress
  );

  console.log("The current contract owner is: " + upgraded.owner());
  console.log('Implementation contract address: ' + implementationAddress);
}

main();