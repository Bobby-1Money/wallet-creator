import Web3 from "web3";
import inquirer from 'inquirer';


(async function () {
  const web3 = new Web3();

  const { amount } = await inquirer.prompt([
    {
      name: 'amount',
      type: 'number',
      message: 'Input the number of wallets to create (选择创建数量):',
      default: 10,
    }
  ])

  const wallets = web3.eth.accounts.wallet.create(amount);

  console.log(wallets.map(wallet => ({
    publicKey: wallet.address,
    privateKey: wallet.privateKey,
  })));
})();