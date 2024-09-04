# UXUY Wallet Integration QuickStart Guide

This guide will help you quickly integrate UXUY Wallet into your decentralized application (DApp).

## Prerequisites

- Node.js and npm installed
- Basic knowledge of JavaScript and Web3 development

## Step 1: Install the SDK

Install the UXUY SDK using npm:

```bash
npm install @uxuycom/web3-tg-sdk
```

## Step 2: Import and Initialize the SDK

In your JavaScript file, import and initialize the UXUY SDK:

```javascript
import { WalletTgSdk } from '@uxuycom/web3-tg-sdk';

const { ethereum } = new WalletTgSdk({
    metaData: {
        name: 'Your DApp Name',
        icon: 'https://example.com/your-dapp-icon.png'
    }
});
```

## Step 3: Connect to UXUY Wallet

Implement a function to connect to the UXUY Wallet:

```javascript
async function connectWallet() {
    try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        console.log('Connected account:', accounts[0]);
        return accounts[0];
    } catch (error) {
        console.error('Failed to connect wallet:', error);
    }
}
```

## Step 4: Get Chain ID

Retrieve the current chain ID:

```javascript
async function getChainId() {
    try {
        const chainId = await ethereum.request({ method: 'eth_chainId' });
        console.log('Current chain ID:', chainId);
        return chainId;
    } catch (error) {
        console.error('Failed to get chain ID:', error);
    }
}
```

## Step 5: Send a Transaction

Implement a function to send a transaction:

```javascript
async function sendTransaction(to, value) {
    try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        const transactionParameters = {
            to: to,
            from: accounts[0],
            value: value, // Value in wei
            gasPrice: '0x09184e72a000', // Customize as needed
            gas: '0x5208', // 21000 gas limit
        };

        const txHash = await ethereum.request({
            method: 'eth_sendTransaction',
            params: [transactionParameters],
        });
        console.log('Transaction sent:', txHash);
        return txHash;
    } catch (error) {
        console.error('Failed to send transaction:', error);
    }
}
```

## Step 6: Listen for Events

Set up event listeners for account and chain changes:

```javascript
ethereum.on('accountsChanged', (accounts) => {
    console.log('Active account changed:', accounts[0]);
});

ethereum.on('chainChanged', (chainId) => {
    console.log('Network changed to:', chainId);
});
```

## Example Usage

Here's a simple example of how to use these functions:

```javascript
async function initializeWallet() {
    const account = await connectWallet();
    if (account) {
        const chainId = await getChainId();
        console.log(`Connected to account ${account} on chain ${chainId}`);
        
        // Example: Send a transaction
        const txHash = await sendTransaction('0x1234567890123456789012345678901234567890', '0x1');
        if (txHash) {
            console.log(`Transaction sent: ${txHash}`);
        }
    }
}

// Call this function when your DApp initializes
initializeWallet();
```

## Next Steps

- Implement error handling and user feedback in your UI
- Add support for switching chains using `wallet_switchEthereumChain`
- Implement signing methods for more advanced functionality

For more detailed information, refer to the full [UXUY Wallet Integration Guide](link-to-full-guide).
