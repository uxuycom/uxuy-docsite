---
sidebar_label: "EVM Connect"
sidebar_position: 3
---

## Ethereum Provider API

The UXUY SDK implements the Ethereum Provider API, allowing seamless integration with existing Ethereum-compatible DApps.

- Same as MetaMask Api
- [examples using @rainbow-me/rainbowkit and wagmi](https://github.com/uxuySafe/examples)
- [quickstart](https://docs.uxuy.com/uxuy-connect/quickstart/)

:::caution
UXUY TG Wallet no longer supports non-Ton Connect. DApp projects using EVM, Solana, or Tron Connect should upgrade promptly.
:::

## Installation

Install the UXUY SDK using npm:

```bash
npm install @uxuycom/web3-tg-sdk
```

### Importing the SDK
Import the `WalletTgSdk` class from the `@uxuycom/web3-tg-sdk` package:

We will use the `ethereum` variable exported by `new WalletTgSdk` globally, which is basically the same as the traditional `window.ethereum` api injected into the wallet.

```javascript
import { WalletTgSdk } from '@uxuycom/web3-tg-sdk';

const { ethereum } = new WalletTgSdk({
    // injected: true;   // inject provider from window.ethereum if not provided
    metaData: {
        name: 'Your DApp Name',
        icon: 'https://example.com/icon.png'
    }
});
```

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


### wallet_switchEthereumChain and wallet_addEthereumChain

The `wallet_switchEthereumChain` and `wallet_addEthereumChain` methods are used to add and switch wallet chains.

Same as metaMask parameter
- [switching or adding  Network to MetaMask](https://docs.metamask.io/wallet/reference/wallet_switchethereumchain/)

error code:
- 4902: Unrecognized chain ID. Try adding the chain using `wallet_addEthereumChain` first.


For changes in the listening chain, please refer to the `chainChanged` Event below.

```ts
  await ethereum.request({
    "method": "wallet_switchEthereumChain",
    "params": [
        {
          chainId: "0x38"
        }
    ],
  });
  // or switch error handle and add chain
  await ethereum.request({
    "method": "wallet_switchEthereumChain",
    "params": [
        {
            chainId: "0x38"
        }
    ],
}).catch(error => {
    if (error.code == 4902) {
        await ethereum.request({
            "method": "wallet_addEthereumChain",
            "params": [
                {
                    "chainId": "0x38",
                    "chainName": "Binance Smart Chain",
                    "rpcUrls": [
                        "https://bsc-dataseed.binance.org/"
                    ],
                    "nativeCurrency": {
                        "name": "BNB",
                        "symbol": "BNB",
                        "decimals": 18
                    },
                    "blockExplorerUrls": [
                        "https://bscscan.com/"
                    ]
                }
            ],
        })
    }
})

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
