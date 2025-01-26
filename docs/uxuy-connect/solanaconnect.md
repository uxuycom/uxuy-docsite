---
sidebar_label: "Solana Connect"
sidebar_position: 4
---
# Solana Connect Integration

support version >=0.1.3

This documentation will guide you in the easiest way to connect your This guide will walk you through the easiest way to connect your DApp with the UXUY Wallet application.

  - [solana-rpc-api](http://cw.hubwiz.com/card/c/solana-rpc-api/1/1/42/)

:::caution
UXUY TG Wallet no longer supports non-Ton Connect. DApp projects using EVM, Solana, or Tron Connect should upgrade promptly.
:::

## Using the SDK
You can use the `@uxuycom/web3-tg-sdk` to connect your DApp to the UxuyWallet application.


### Installation
Install the UXUY SDK  packages via npm:

- [@solana/web3.js](https://www.npmjs.com/package/@solana/web3.js)
- [@solana/spl-token for token transfer](https://www.npmjs.com/package/@solana/spl-token)
- [@uxuycom/web3-tg-sdk](https://www.npmjs.com/package/@uxuycom/web3-tg-sdk)

```bash
npm install @uxuycom/web3-tg-sdk @solana/web3.js @solana/spl-token
```
### use Solana Connect

```ts
import { WalletTgSdk } from '@uxuycom/web3-tg-sdk';

 const { solana } = new WalletTgSdk({
      // injected: true;   // inject provider from window.solana if not      provided
        // metaData: {
        //     name: 'Your DApp Name',
        //     icon: 'https://example.com/icon.png'
        // }

    });
   const solanaProvoder = solana
```


### isConnected

```ts
    const isConnected = solanaProvider.isConnected
    const isConnected = solanaProvider.connected;
```

### publicKey

```ts
    const address = solanaProvider.publicKey.toString();
```


### Connecting to the Wallet

```ts
    await solanaProvoder.connect();
    solanaProvider.publicKey.toString()
```

### getAccount
```ts

    const address = await solanaProvider.getAccount()
```



###  Signing Messages

When a web application is connected to UXUY Wallet, it can also request that the user signs a given message. Applications are free to write their own messages which will be displayed to users from within UXUY Wallet.'s signature prompt. Message signatures do not involve network fees and are a convenient way for apps to verify ownership of an address.

  For more information on how to verify the signature of a message, please refer to [tweetnacl-js](https://github.com/dchest/tweetnacl-js/blob/master/README.md#naclsigndetachedverifymessage-signature-publickey).

```ts
try {

    const { publicKey, signature } = await solanaProvider.signMessage(Buffer.from("0x1232131").toString("hex"));


} catch (e) {
    // Error handling
}

```

### General Transfer

For making transfers using Solana, refer to [examples](https://github.com/solana-labs/solana-program-library/tree/master/token/js/examples).

```ts

import {  TOKEN_PROGRAM_ID  getMint } from '@solana/spl-token';

import { Connection, PublicKey, SystemProgram, Transaction, PublicKey } from '@solana/web3.js';
const connection = new Connection("<your rpc endpoint>");
const transaction = new Transaction();

const fromAddress= solanaProvider.publicKey.toString()

const fromPubkey = new PublicKey(fromAddress)
const toPubkey = new PublicKey("ADVQ12wFnABx7gxFJHc6YTh4MYG6DBWH8HcDUhoaQkQq");

transaction.add(
        SystemProgram.transfer({
        fromPubkey: fromPubkey,
        toPubkey: toPubkey,
        lamports: 0.0001 * 1e9, // 10^9 = 1 SOL
    })
)

transaction.feePayer = fromPubkey; //feePayer
transaction.recentBlockhash = (await connection.getRecentBlockhash())?.blockhash;


const signedTransaction = await solanaProvider.signTransaction(transaction)
await connection.sendRawTransaction(signedTransaction.serialize());

```



### disconnect

```ts
    solanaProvider.disconnect()
```
