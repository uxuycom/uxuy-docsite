# UXUY Wallet Integration QuickStart Guide

This guide will help you quickly integrate UXUY Wallet into your decentralized application (DApp).


### MetaMask Standard Wallet Integration (Beta)
Based on your request, I'll rephrase the content in the image using more professional open-source project terminology:

MetaMask Standard Wallet Integration (Beta)

We are pleased to announce the integration of MetaMask's standard wallet. Connection can now be established with a single line of code.

Current Status:
- Standard API mode support implemented
- Full MetaMask feature set not yet supported
- Incremental functionality enhancements planned

Code snippet for connection:
```javascript
import { WalletTgSdk } from '@uxuycom/web3-tg-sdk'
new WalletTgSdk({ injected: true })

// use window.ethereum to interact with the wallet
window.ethereum
```


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

const { ethereum } = new WalletTgSdk();
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

## Step 4: Get Chain ID and Get Account

Retrieve the current chain ID:

```javascript
// Get the current chain ID
async function getChainId() {
    try {
        const chainId = await ethereum.request({ method: 'eth_chainId' });
        console.log('Current chain ID:', chainId);
        return chainId;
    } catch (error) {
        console.error('Failed to get chain ID:', error);
    }
}

// Get the current address
async function getAccounts() {
    try {
        const accounts = await ethereum.request({ method: 'eth_accounts' });
        console.log('Current address:', accounts[0]);
        return accounts[0];
    } catch (error) {
        console.error('Failed to get address:', error);
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
            // gasPrice: '0x09184e72a000', // Customize as needed
            // gas: '0x5208', // 21000 gas limit
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
import { WalletTgSdk } from '@uxuycom/web3-tg-sdk';
const { ethereum } = new WalletTgSdk();
let address = null;
let chainId = null;

// Call this function when your DApp initializes
async function initializeWallet() {
    // Check if the wallet is already connected
    let accounts = await ethereum.request({ method: 'eth_accounts' });
    if (!accounts[0]) {
        await ethereum.request({ method: 'eth_requestAccounts' });
    }

    // Get the current account and chain ID
    chainId = await ethereum.request({ method: 'eth_chainId' });
    accounts = await ethereum.request({ method: 'eth_accounts' });
    address = accounts[0];
  

    // Set up event listeners for account and chain changes
    ethereum.removeAllListeners();
    ethereum.on('accountsChanged', (accounts) => {
        address = accounts[0];
        console.log('Active account changed:', accounts[0]);
    });
    ethereum.on('chainChanged', (changedChainId) => {
        chainId = changedChainId
        console.log('Network changed to:', changedChainId);
    });

}


async function sendTransaction(to, value) {

    const transactionParameters = {
        to: to,
        from: address,
        value: value, // Value in wei
        // gasPrice: '0x09184e72a000', // Customize as needed
        // gas: '0x5208', // 21000 gas limit
    };

    const txHash = await ethereum.request({
        method: 'eth_sendTransaction',
        params: [transactionParameters],
    });
    const hash = await sendTransaction(to, value);

    const receipt = await ethereum.request({
        method: 'eth_getTransactionReceipt',
        params: [hash],
    })

    return receipt;

}

// Call this function to send a transaction 0.01 ether to the address 0x0F9171aFF2dbd8c02Dd9cFEaBDB61fDd8D2675c5

sendTransaction("0x0F9171aFF2dbd8c02Dd9cFEaBDB61fDd8D2675c5", 0.001 * 10 ** 18);

          

```

## Next Steps

- Implement error handling and user feedback in your UI
- Add support for switching chains using `wallet_switchEthereumChain`
- Implement signing methods for more advanced functionality

For more detailed information, refer to the full [UXUY Wallet Integration Guide](guide.md).
