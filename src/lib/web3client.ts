import Web3 from 'web3';
import Config from 'config';

let web3 = (window as any).web3;
if (typeof web3 !== 'undefined') {
  web3 = new Web3(Web3.givenProvider);
} else {
  web3 = new Web3(new Web3.providers.HttpProvider(Config.provider));
}

const wethTokenContract: any = getContract(Config.WethToken.abi, Config.WethToken.address);
const tokenContract: any = getContract(Config.Token.abi, Config.Token.address);
const faucetContract: any = getContract(Config.Faucet.abi, Config.Faucet.address);

/**
 * Common Contract Functions
 */
function getContract(abi: any, address: string) {
  return new web3.eth.Contract(abi, address);
}

async function getAccount(): Promise<string | undefined> {
  await web3.eth.currentProvider.enable();
  const accounts = await web3.eth.getAccounts();
  return accounts ? accounts[0] : undefined;
}

async function getBalance(contract: any, address?: string): Promise<number> {
  const _address = address || getAccount();
  const result = await contract.methods.balanceOf(_address).call();
  return parseInt(result);
}

async function getTotalSupply(contract: any,): Promise<number> {
  const result = await contract.methods.totalSupply().call();
  return parseInt(result);
}


function promisify(fn: (cb: any) => any): Promise<any> {
  return new Promise((resolve, reject) => {
      fn((err: any, result: any) => {
          if (err) {
              return reject(err);
          }

          resolve(result);
      });
  });
}

async function approve(contract: any, address: string, from: string) {
  const max = '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';
  await contract.methods.approve(address, max).send({ from })
    .on('error', function(error: any, receipt: any) {
      console.log(error, receipt);
    });
}

async function allowance(contract: any, owner: string, spender: string) {
  const result = await contract.methods.allowance(owner, spender).call();
  return result;
}

/**
 * StakingRewards Pool Contract Functions
 */
function precision(a: number) {
  if (!isFinite(a)) return 0;
  var e = 1, p = 0;
  while (Math.round(a * e) / e !== a) { e *= 10; p++; }
  return p;
}

/**
 * Faucet Contract Functions
 */
async function get1Drip(from: string) {
  await faucetContract.methods.drip1Token().send({ from })
    .on('error', function(error: any, receipt: any) {
      console.log(error, receipt);
    });
}

async function get2Drip(from: string) {
  await faucetContract.methods.drip1Token().send({ from })
    .on('error', function(error: any, receipt: any) {
      console.log(error, receipt);
    });
}

async function get5Drip(from: string) {
  await faucetContract.methods.drip1Token().send({ from })
    .on('error', function(error: any, receipt: any) {
      console.log(error, receipt);
    });
}

export default {
  getContract,
  getAccount,
  getBalance,
  getTotalSupply,
  allowance,
  approve,
  // Faucet
  get1Drip,
  get2Drip,
  get5Drip,
  // Utils
  promisify,
  // Contracts
  wethTokenContract,
  tokenContract,
  faucetContract,
};
