# UXUY Wallet Integration Guide

## Overview

This guide demonstrates how to integrate the UXUY Wallet into your decentralized application (DApp) using the UXUY SDK. The integration enables users to connect their UXUY Wallet on Telegram and perform multi-chain transactions seamlessly.

## Resources

- [UXUY Wallet on Telegram](https://t.me/UXUYbot)
- [Connection Demo](https://t.me/uxuy_demo_miniapp_bot/demo)
- [Connection Demo Repository](https://github.com/uxuycom/test-tg-dapp)
- [UXUY SDK Repository](https://github.com/uxuycom/uxuy-docsite)
- [Create a Telegram Bot](https://core.telegram.org/bots/tutorial#executing-commands)
- [Create a Telegram MinApp](https://core.telegram.org/bots#replace-entire-websites)

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

### isConnected

The `isConnected` method returns a boolean value indicating whether the wallet is connected or not.

```typescript

  ethereum.isConnected(): boolean
```

### Request Method

The `request` method is used to make RPC requests to the connected wallet.

```typescript
interface RequestArguments {
  id?: number | string;
  method: string;
  params?: Array<unknown> ;
}

interface ResponseError extends Error {
  code: number;
  message: string;
  data?: unknown;
}

ethereum.request = (payload: RequestArguments): Promise<any> 

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

For detailed usage, refer to:
  - [transactions](https://ethereum.org/zh/developers/docs/transactions/)
  
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
const  accounts = await ethereum.request({ method: 'eth_accounts' });
const  chainId =  await ethereum.request({ method: 'eth_chainId' });

const  signature = await ethereum.request({
  method: 'personal_sign',
  params: ['Hello, UXUY!', accounts[0]]
});

```

Example of `eth_signTypedData_v4`:
```javascript

const  accounts = await ethereum.request({ method: 'eth_accounts' });
const  chainId  =  await ethereum.request({ method: 'eth_chainId' });

const  msgParams = {
    "domain": {
        "chainId": chainId,
        "name": "Ether Mail",
        "verifyingContract": "0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC",
        "version": "1"
    },
    "message": {
        "contents": "Hello, Bob!",
        "from": {
            "name": "Cow",
            "wallets": [
                "0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826",
                "0xDeaDbeefdEAdbeefdEadbEEFdeadbeEFdEaDbeeF"
            ]
        },
        "to": [
            {
                "name": "Bob",
                "wallets": [
                    "0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB",
                    "0xB0BdaBea57B0BDABeA57b0bdABEA57b0BDabEa57",
                    "0xB0B0b0b0b0b0B000000000000000000000000000"
                ]
            }
        ],
        "attachment": "0x"
    },
    "primaryType": "Mail",
    "types": {
        "EIP712Domain": [
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "version",
                "type": "string"
            },
            {
                "name": "chainId",
                "type": "uint256"
            },
            {
                "name": "verifyingContract",
                "type": "address"
            }
        ],
        "Group": [
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "members",
                "type": "Person[]"
            }
        ],
        "Mail": [
            {
                "name": "from",
                "type": "Person"
            },
            {
                "name": "to",
                "type": "Person[]"
            },
            {
                "name": "contents",
                "type": "string"
            },
            {
                "name": "attachment",
                "type": "bytes"
            }
        ],
        "Person": [
            {
                "name": "name",
                "type": "string"
            },
            {
                "name": "wallets",
                "type": "address[]"
            }
        ]
    }
}

const signatureV4 = await ethereum.request({
  method: 'eth_signTypedData_v4',
  params: [
    accounts[0], 
    JSON.stringify(msgParams)
  ]
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
