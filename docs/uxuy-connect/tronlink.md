---
sidebar_label: "TronLink5 Connect"
sidebar_position: 4
---
# TronLink Connect Integration

This documentation will guide you in the easiest way to connect your DApp with the UxuyWallt application.

You can access it in the same way as the [TronLink object](https://docs.tronlink.org/dapp/start-developing)  API access method
You can access it in the same way as  access

## use SDk
You can use the `@uxuycom/web3-tg-sdk/dist/tronLinkProvider.es` to connect your DApp to the UxuyWallt application.


### installing
Install the UXUY SDK using npm:

```bash
npm install @uxuycom/web3-tg-sdk
```
### use TronLink

```ts
    import TronLink from '@uxuycom/web3-tg-sdk/dist/tronLinkProvider.es';

    // connect to TronLink by telegram
    const tgTronLink = new TronLink({
         injected: true, //  If `window.tronLink` does not exist it  will be injected,  some as tgTronLink
         metaData: {
             name: 'UXUY',
             icon: 'https://uxuy.com/logo.png',
         }
    });   
   
```


### connect to wallet
[connect-website](https://docs.tronlink.org/tronlink-wallet-extension/request-tronlink-extension/connect-website)

```ts

    const tgTronLink = new TronLink();   
    // connect to wallet
    async function getTronWeb() {
        let tronWeb;
        if (tgTronLink.ready) {
            tronWeb = tgTronLink.tronWeb;
        } else {
            const res = await tgTronLink.request({ method: 'tron_requestAccounts' });
            if (res.code === 200) {
            tronWeb = tgTronLink.tronWeb;
            }
        }
        return tronWeb;
    }
```

###  sign message
[message signature from TronLink](https://docs.tronlink.org/dapp/message-signature)

```ts

  try {
    const tronweb = await getTronWeb();
    const message = "0x1e"; // any hex string
    const signedString = await tronweb.trx.sign(message);
  } catch (e) {}
```


### General Transfer

[General Transfer from TronLink](https://docs.tronlink.org/dapp/general-transfer)
```ts

 const tronweb = await getTronWeb();
  const fromAddress = tronweb.defaultAddress.base58;
  const toAddress = "TAHQdDiZajMMP26STUnfsiRMNyXdxAJakZ";
  const tx = await tronweb.transactionBuilder.sendTrx(toAddress, 10, fromAddress); // Step1
  try {
    const signedTx = await tronweb.trx.sign(tx); // Step2
    await tronweb.trx.sendRawTransaction(signedTx); // Step3
  } catch (e) {
    // error handling
  }

```




