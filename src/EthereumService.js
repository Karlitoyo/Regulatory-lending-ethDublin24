import Web3 from "web3";

// Initialize Web3 instance
const web3 = new Web3(window.ethereum);

const ethereumService = {
  // Get user's wallet address
  getUserAddress: async () => {
    try {
      // Request user's accounts from MetaMask
      const accounts = await web3.eth.getAccounts();
      return accounts[0]; // Return the first account
    } catch (error) {
      console.error("Error fetching user address:", error);
      return null;
    }
  },

  // Get user's last transaction
  getLastTransaction: async () => {
    try {
      // Get latest block number
      const latestBlockNumber = await web3.eth.getBlockNumber();

      // Get block information
      const block = await web3.eth.getBlock(latestBlockNumber);

      // Get the last transaction hash
      const lastTxHash = block.transactions[block.transactions.length - 1];

      // Get transaction details
      const transaction = await web3.eth.getTransaction(lastTxHash);

      return transaction;
    } catch (error) {
      console.error("Error fetching last transaction:", error);
      return null;
    }
  },
};

export default ethereumService;
