---
sidebar_label: "TRON Connect"
sidebar_position: 4
---
# TronLink Connect Integration

This documentation will guide you in the easiest way to connect your This guide will walk you through the easiest way to connect your DApp with the UXUY Wallet application.


You can access it in the same way as  access
You can access it similarly to the [TronLink object API](https://docs.tronlink.org/dapp/start-developing) method.

## Using the SDK
You can use the `@uxuycom/web3-tg-sdk/dist/tronLinkProvider.es` to connect your DApp to the UxuyWallet application.


### Installation
Install the UXUY SDK via npm:

```bash
npm install @uxuycom/web3-tg-sdk
```
### use TronLink

```ts
import TronLink from '@uxuycom/web3-tg-sdk/dist/tronLinkProvider.es';

// Connect to TronLink via Telegram
const tgTronLink = new TronLink({
    injected: true, // default: false, injects if `window.tronLink` doesn't exist
    metaData: {
        name: 'UXUY Wallet', // Custom wallet name (optional)
        icon: 'https://uxuy.com/logo.png', // Custom wallet icon (optional)
    }
});

```


### Connecting to the Wallet

For more details, visit the [connect-website](https://docs.tronlink.org/tronlink-wallet-extension/request-tronlink-extension/connect-website).

```ts
import TronLink from '@uxuycom/web3-tg-sdk/dist/tronLinkProvider.es';
const tronLink = new TronLink();

// Function to connect to the wallet
async function getTronWeb() {
    let tronWeb;
    if (tronLink.ready) {
        tronWeb = tronLink.tronWeb;
    } else {
        const res = await tronLink.request({ method: 'tron_requestAccounts' });
        if (res.code === 200) {
            tronWeb = tronLink.tronWeb;
        }
    }
    return tronWeb;
}

```

###  Signing Messages

For message signing via  TronLink, refer to the [TronLink message signature documentation](https://docs.tronlink.org/dapp/message-signature).

```ts
try {
    const tronWeb = await getTronWeb();
    const message = "0x1e"; // Example hex string message
    const signedString = await tronWeb.trx.sign(message);
} catch (e) {
    // Error handling
}

```


### General Transfer

For making transfers using TronLink, refer to [General Transfer from TronLink](https://docs.tronlink.org/dapp/general-transfer).

```ts

const tronWeb = await getTronWeb();
const fromAddress = tronWeb.defaultAddress.base58;
const toAddress = "TP97FypN1UaptxhT5p6uRWsxszcRH7GXJn";

// Step 1: Build the transaction
const tx = await tronWeb.transactionBuilder.sendTrx(toAddress, 10, fromAddress);

try {
    // Step 2: Sign the transaction
    const signedTx = await tronWeb.trx.sign(tx);
    
    // Step 3: Send the signed transaction
    await tronWeb.trx.sendRawTransaction(signedTx);
} catch (e) {
    // Error handling
}

```






### disconnect TronLink

```ts
tronLink.disconnect();
```