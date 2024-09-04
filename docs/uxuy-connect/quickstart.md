# Connect to UXUY Wallet on Telegram

Import [UXUY SDK](https://github.com/uxuycom/uxuy-docsite) into your DApp to enable your users to easily connect to UXUY Wallet on Telegram and make transations in Multi-Chains. Follow these steps for your DApps to connect to UXUY Wallet.

---

## Resource

You can check the linking effect of UXUY wallet through the following resources.

[UXUY Wallet on Telegram](https://t.me/UXUYbot)
[Demo For Connection](https://t.me/uxuy_demo_miniapp_bot/demo)

---

## Quick Start

### Install the SDK

```js
npm install @uxuycom/web3-tg-sdk
```

### Import the SDK

```js
import { WalletTgSdk } from 'https://cdn.jsdelivr.net/npm/@uxuycom/web3-tg-sdk';

import { WalletTgSdk } from '@uxuycom/web3-tg-sdk'

const { ethereum } = new WalletTgSdk({
    metaData: {
        name: 'your name',
        icon:"https://example.com/icon.png"
       
    }
})
```

---

### Ethereum Provider API

#### Public Params

The `request` method is used to make RPC requests to the connected wallet. It takes an object with the following properties.

* `id` (optional) - A number or string that identifies the request.
* `method` -  The RPC method to request.
* `params` (optional) - An array or object of parameters for the RPC method.

The method returns a Promise that resolves with the result of the RPC method call.

[json-rpc-api from metamask](https://docs.metamask.io/wallet/reference/json-rpc-api/)
[json-rpc-api from ethereum.org](https://ethereum.org/zh/developers/docs/apis/json-rpc/)

```ts
interface RequestArguments {
  id?:number | string
  /** The RPC method to request. */
  method: string;

  /** The params of the RPC method, . */
  params?: Array<unknown> | object;
}

ethereum.request = (args: RequestArguments): Promise<any>
```

#### UXUY Wallet rpc api

##### eth_requestAccounts

connect to the wallet and return the address of the connected wallet.

* method: eth_requestAccounts
* params: None
* returns: [address]

```ts
ethereum.request({ method: 'eth_requestAccounts' })
```

##### eth_accounts

return the address of the connected wallet.

* method: eth_accounts
* params: None
* returns: [address]

```ts
ethereum.request({ method: 'eth_accounts' })
```

##### eth_chainId

return the chainId of the connected wallet.

* method: eth_chainId
* params: None
* returns: ChainId

```ts
ethereum.request({ method: 'eth_chainId' })
```

##### wallet_switchEthereumChain

switch the connected wallet to the specified chainId.

* method: wallet_switchEthereumChain
* params:
    * chainId: chainId
* returns: Promise

```ts
try {
  await ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0xf00' }],
  });
} catch (switchError) {
  // This error code indicates that the chain has not been added to Uxuy Wallet.
}
```

##### eth_sendTransaction

send a transaction to the connected wallet.

* method: eth_sendTransaction
* params:
    * transaction: TransactionObject
* returns: Promise

```ts
const accounts = await ethereum.request({ method: 'eth_accounts', params: [{}] })  
const fromAddress =  ethereum.selectedAddress
const transactionParameters = {
  nonce: '0x00', // ignored by Uxuy Wallet
  gasPrice: '0x09184e72a000', // customizable by user during Uxuy Wallet confirmation.
  gas: '0x2710', // customizable by user during Uxuy Wallet confirmation.
  to: '0x0000000000000000000000000000000000000000', // Required except during contract publications.
  from:  fromAddress || accounts[0], // must match user's active address.
  value: '0x00', // Only required to send ether to the recipient from the initiating external account.
  data:
    '0x7f7465737432000000000000000000000000000000000000000000000000000000600057', // Optional, but used for defining smart contract creation and interaction.
  chainId: '0x3', // Used to prevent transaction reuse across blockchains. Auto-filled by Uxuy Wallet.
};

 ethereum.request(
    { 
        method: 'eth_sendTransaction', 
        params: [ 
            transactionParameters
        ] 
    }
)
```

#### signData Api

* personal_sign
* eth_signTypedData
* eth_signTypedData_v3
* eth_signTypedData_v4

You can refer to docs [signing-data-with-metamask](https://docs.metamask.io/wallet/how-to/sign-data/#signing-data-with-metamask),  [eth-sig-util](https://github.com/MetaMask/eth-sig-util)

##### personal_sign

[](https://www.npmjs.com/package/@uxuycom/web3-tg-sdk?activeTab=readme#personal_sign)

sign a message with the connected wallet.

* method: personal_sign
* params:
    * message: string
    * address: string
* returns: Promise

```ts
ethereum.request({ method: 'personal_sign', params: ['hello', '0x1234567890'] })
```

#### eth_signTypedData_v3

* params: None
* returns: Promise

```
ethereum.request({ method: 'eth_signTypedData_v3', params: [{}, '0x1234567890'] })
```

#### eth_signTypedData_v4

* params: None
* returns: Promise

```
ethereum.request({ method: 'eth_signTypedData_v4', params: [{}] })
```

#### disconnect

Users to log out (or disconnect) from your dapp.

* params: None


### Event listeners

Notify when address and network change. Uses [eventemitter3](https://www.npmjs.com/package/eventemitter3).

#### accountChanged

* params: None

```ts
ethereum.on('accountsChanged', handler: (accounts: Array<string>) => void);

 ethereum.on('accountChanged', (accounts) => {
    console.log(accounts || [])
})
```

#### chainChanged

* params:

```ts
ethereum.on('chainChanged', (chainId) => {
    console.log(chainId)
})
```

```ts
// remove all event listeners
ethereum.removeAllListeners();

function handleAccountsChainChanged() {
  ethereum.on('accountsChanged', ([address]) => {
    // Handle the new accounts, or lack thereof.
    // "accounts" will always be an array, but it can be empty.
    alert('address changed');
  });
  ethereum.on('chainChanged', async (chainId) => {
    // Handle the new chain.
    // Correctly handling chain changes can be complicated.
    // We recommend reloading the page unless you have good reason not to.
    alert('chainid changed');
  });
}


// add event listener
function handleAccountsChanged(accounts) {
  // ...
}
//remove
ethereum.removeListener('accountsChanged', handleAccountsChanged); // only remove one 
ethereum.on('accountsChanged', handleAccountsChanged);
```

### Supported Chains

The UXUY Wallet Connection is designed to be multi-chain. The following chains are supported:

| Chain        | ChainID   |
| :--------  | :-----  |
| Ethereum | 1 (0x1)|
| BNB Chain |56 (0x38)|
| Base |8453 (0x2105)|
| Arbitrum |42161 (0xa4b1)|
| Polygon |137 (0x89)|
| Fantom |250 (0xfa)|
| Optimism |10 (0xa)|
| Avalanche C-Chain |43114 (0xa86a)|
| zkSync Era |324 (0x144)|
| Linea |59144 (0xe708)|
| Core |1116 (0x45c)|
| zkLink |810180 (0xc5cc4)|

