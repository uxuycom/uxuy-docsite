# UXUY Wallet Integration Guide

## Overview

This guide demonstrates how to integrate the UXUY Wallet into your decentralized application (DApp) using the UXUY SDK. The integration enables users to connect their UXUY Wallet on Telegram and perform multi-chain transactions seamlessly.

## Resources

- [UXUY Wallet on Telegram](https://t.me/UXUYbot)
- [Connection Demo](https://t.me/uxuy_demo_miniapp_bot/demo)
- [UXUY SDK Repository](https://github.com/uxuycom/uxuy-docsite)

## Installation

Install the UXUY SDK using npm:

```bash
npm install @uxuycom/web3-tg-sdk
```

## Usage

### Importing the SDK

```javascript
import { WalletTgSdk } from '@uxuycom/web3-tg-sdk';

const { ethereum } = new WalletTgSdk({
    metaData: {
        name: 'Your DApp Name',
        icon: 'https://example.com/icon.png'
    }
});
```

## Ethereum Provider API

The UXUY SDK implements the Ethereum Provider API, allowing seamless integration with existing Ethereum-compatible DApps.

### Request Method

The `request` method is used to make RPC requests to the connected wallet.

```typescript
interface RequestArguments {
  id?: number | string;
  method: string;
  params?: Array<unknown> | object;
}

ethereum.request = (args: RequestArguments): Promise<any>
```

For detailed information on JSON-RPC methods, refer to:
- [MetaMask JSON-RPC API](https://docs.metamask.io/wallet/reference/json-rpc-api/)
- [Ethereum.org JSON-RPC API](https://ethereum.org/developers/docs/apis/json-rpc/)

### Supported Methods

#### eth_requestAccounts

Connects to the wallet and returns the address of the connected wallet.

```javascript
const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
```

#### eth_accounts

Returns the address of the connected wallet.

```javascript
const accounts = await ethereum.request({ method: 'eth_accounts' });
```

#### eth_chainId

Returns the chainId of the connected wallet.

```javascript
const chainId = await ethereum.request({ method: 'eth_chainId' });
```

#### wallet_switchEthereumChain

Switches the connected wallet to the specified chainId.

```javascript
try {
  await ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0xf00' }],
  });
} catch (switchError) {
  // Handle the error
}
```

#### eth_sendTransaction

Sends a transaction to the connected wallet.

```javascript
const accounts = await ethereum.request({ method: 'eth_accounts' });
const transactionParameters = {
  nonce: '0x00',
  gasPrice: '0x09184e72a000',
  gas: '0x2710',
  to: '0x0000000000000000000000000000000000000000',
  from: accounts[0],
  value: '0x00',
  data: '0x7f7465737432000000000000000000000000000000000000000000000000000000600057',
  chainId: '0x3',
};

const txHash = await ethereum.request({
  method: 'eth_sendTransaction',
  params: [transactionParameters]
});
```

### Signing Methods

The UXUY SDK supports various signing methods:

- `personal_sign`
- `eth_signTypedData`
- `eth_signTypedData_v3`
- `eth_signTypedData_v4`

For detailed usage, refer to:
- [Signing Data with MetaMask](https://docs.metamask.io/wallet/how-to/sign-data/#signing-data-with-metamask)
- [eth-sig-util](https://github.com/MetaMask/eth-sig-util)

Example of `personal_sign`:

```javascript
const signature = await ethereum.request({
  method: 'personal_sign',
  params: ['Hello, UXUY!', '0x1234567890abcdef']
});
```

### Event Listeners

The SDK emits events for account and network changes.

#### accountsChanged

```javascript
ethereum.on('accountsChanged', (accounts) => {
  console.log('Active account:', accounts[0]);
});
```

#### chainChanged

```javascript
ethereum.on('chainChanged', (chainId) => {
  console.log('Network changed to:', chainId);
});
```

To remove listeners:

```javascript
ethereum.removeListener('accountsChanged', handleAccountsChanged);
// or remove all listeners
ethereum.removeAllListeners();
```

## Supported Chains

UXUY Wallet supports multiple chains:

| Chain Name | Chain ID (Decimal) | Chain ID (Hexadecimal) |
|------------|--------------------|-----------------------|
| Ethereum   | 1                  | 0x1                   |
| BNB Chain  | 56                 | 0x38                  |
| Base       | 8453               | 0x2105                |
| Arbitrum   | 42161              | 0xa4b1                |
| Polygon    | 137                | 0x89                  |
| Fantom     | 250                | 0xfa                  |
| Optimism   | 10                 | 0xa                   |
| Avalanche  | 43114              | 0xa86a                |
| zkSync Era | 324                | 0x144                 |
| Linea      | 59144              | 0xe708                |
| Core       | 1116               | 0x45c                 |
| zkLink     | 810180             | 0xc5cc4               |

## Contributing

We welcome contributions to the UXUY SDK! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the [MIT License](LICENSE.md).
