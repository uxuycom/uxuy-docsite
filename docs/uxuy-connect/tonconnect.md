---
sidebar_label: "TON Connect"
sidebar_position: 4
---

# TON Connect Integration

This document provides information on how to integrate the TON Connect for UXUY Wallet.


# Ton Connect SDk

TonConnect is an open protocol that connects wallets and DApps (Web3 applications). It uses a bridge (JS Bridge or Http Bridge) to establish a connection between two applications and/or devices and starts communication.
Uxuy Wallet fully supports TonConnect.

## TonConnect SDK Packages and UXUY Wallet Integration Demo

ton docs:
- [ton docs](https://docs.ton.org/develop/overview)
- [TonConnect Official overview](https://docs.ton.org/develop/dapps/ton-connect/overview)

sdk packages:
- [@tonconnect/ui](https://www.npmjs.com/package/@tonconnect/ui)
- [@tonconnect/ui-react](https://www.npmjs.com/package/@tonconnect/ui-react)
- [@tonconnect/ui api](https://ton-connect.github.io/sdk/modules/_tonconnect_ui.html)
- [@tonconnect/ui-react api](https://ton-connect.github.io/sdk/modules/_tonconnect_ui_react.html)


UXUY Wallet integration demo:
- [quickstart-demo for @tonconnect/ui](https://github.com/uxuySafe/examples/tree/main/examples/tonconnect-v2/src/pages/tonconnectUi)
- [quickstart-demo for @tonconnect/ui-react](https://github.com/uxuySafe/examples/tree/main/examples/tonconnect-v2/src/pages/tonconnectUiReact)






## UXUY Wallet Integration

To integrate the TonConnect SDK into the Uxuy Wallet, follow the steps below:

### Step 1: Install the TonConnect SDK package and initialize :

use  @tonconnect/ui 

```ts
npm install @tonconnect/ui 

```
use  @tonconnect/ui-react
```ts
npm install @tonconnect/ui-react 
```

### Step 2: Initialize the TonClient and TonConnect objects:

 `manifestUrl` is the URL of the manifest file that contains information about the DApp. [manifest](https://docs.ton.org/develop/dapps/ton-connect/protocol/requests-responses#app-manifest)

 `walletsListConfiguration.includeWallets`  can be used to add custom wallets to the list of supported wallets.

`restoreConnection` is a boolean value that determines whether the TonConnect SDK should attempt to restore an existing connection with the DApp.


###  UXUY Wallet  `walletsListConfiguration.includeWallets`  configuration:

Add the following configuration to the `walletsListConfiguration.includeWallets` array in the `TonConnectUI` constructor:

```json
 
  {
        "name": "UXUY Wallet",
        "appName": "uxuyTonWallet",

        "universalLink": "https://t.me/UXUYbot/app",
        "bridgeUrl": "https://bridge.tonapi.io/bridge",
        "imageUrl": "https://raw.githubusercontent.com/uxuycom/uxuy-docsite/main/static/assets/UXUYWallet-logo/UXUYWallet_logo_circle.svg",
        "platforms": ["android", "ios", "linux", "windows", "macos"],
},
```



use  @tonconnect/ui 
```ts
    import { TonConnectUI  } from '@tonconnect/ui'

    const tonConnectUI =  new TonConnectUI({

        restoreConnection: true,
        walletsListConfiguration: {
            //custom wallets list configuration here
            includeWallets: [
                {

                    name: "UXUY Wallet",
                    appName: "uxuyTonWallet",
                    // we will support tonconnect-v2 in the future
                    // jsBridgeKey: "uxuyTonWallet",
                    // injected: true,
                    universalLink: "https://t.me/UXUYbot/app",
                    bridgeUrl: "https://bridge.tonapi.io/bridge",
                    imageUrl: "https://raw.githubusercontent.com/uxuycom/uxuy-docsite/main/static/assets/UXUYWallet-logo/UXUYWallet_logo_circle.svg",
                    platforms: ["android", "ios", "linux", "windows", "macos"],
                }

            ]
    },

    manifestUrl: "<Your manifest url>",
    // manifestUrl: "https://raw.githubusercontent.com/uxuySafe/examples/bb930d695232f2a9d900dfe69f429604dc00bbea/examples/tonconnect-v2/public/tonconnect-manifest.json",
})

```

use  @tonconnect/ui-react
```ts
import { TonConnectUIProvider } from '@tonconnect/ui-react';

    <TonConnectUIProvider
        //  manifestUrl={`https://raw.githubusercontent.com/uxuySafe/examples/bb930d695232f2a9d900dfe69f429604dc00bbea/examples/tonconnect-v2/public/tonconnect-manifest.json`}
        manifestUrl={`<Your manifest url>`}
        walletsListConfiguration={{
            includeWallets: [
                {
                    name: "UXUY Wallet",
                    appName: "uxuyTonWallet",

                    // we will support tonconnect-v2 in the future
                    // jsBridgeKey: "uxuyTonWallet",
                    // injected: true,

                    universalLink: "https://t.me/UXUYbot/app",
                    bridgeUrl: "https://bridge.tonapi.io/bridge",
                    imageUrl: "https://raw.githubusercontent.com/uxuycom/uxuy-docsite/main/static/assets/UXUYWallet-logo/UXUYWallet_logo_circle.svg",
                    platforms: ["android", "ios", "linux", "windows", "macos"],
                }
            ]
        }}>
            <App/>
        </TonConnectUIProvider>

```

### Step 3: Add the TonConnect UI button to the UI of the DApp:

use  @tonconnect/ui 
```tsx

// open Single Wallet Modal:
<button onClick={() => tonConnectUI.openSingleWalletModal("uxuyTonWallet")}
    >Connect to UXUY Wallet</button>

// open Multi Wallet Modal:
 <button onClick={async () => { tonConnectUI.openModal() }}>openModal</button>


 // get current wallet info:
  const unsubscribe = tonConnectUI.onStatusChange(
            walletInfo => {
                console.log("onStatusChange", {  walletInfo });
         
            });
//  remove listener      
// unsubscribe()

```

use  @tonconnect/ui-react
```tsx
    import { TonConnectButton, useTonAddress, useTonWallet, Locales, useTonConnectUI, useTonConnectModal,  } from "@tonconnect/ui-react"

    
    function App() {
        const [tonConnectUI] = useTonConnectUI();

        return <>
        
             {/*  open Single Wallet Modal: */}
             <button onClick={() => tonConnectUI.openSingleWalletModal("uxuyTonWallet")}>Connect to UXUY Wallet<button>

            {/*  open Multi Wallet Modal: */}
            <TonConnectButton> Connect to TON UI </TonConnectButton>

        
        </>
    }


    {/* // get account address : */}
    const AddressInfo = () => {
        const userFriendlyAddress = useTonAddress();
        const rawAddress = useTonAddress(false);

        return (
            rawAddress && (
                <div>
                    <span>User-friendly address: {userFriendlyAddress}</span>
                    <span>Raw address: {rawAddress}</span>
                </div>
            )
        );
    };

```


### Step 4: sign and send transactions using TonConnect SDK:

use  @tonconnect/ui 

```tsx

<button onClick={ 
    async () => {
        const transaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
            messages: [
                {
                    address: "UQA_ofPvh6hDWmGGIC9ZTaULpC18HxSEDSyuRxZSH4z3mDJk",
                    amount: "100000",
                },
                {
                    address: "UQA_ofPvh6hDWmGGIC9ZTaULpC18HxSEDSyuRxZSH4z3mDJk",
                    amount: "600000",

                }
            ]
        }
        const result = await tonConnectUI.sendTransaction(transaction);
    }
}>
    sendTransaction
</button>

```

use  @tonconnect/ui-react
```tsx

const [tonConnectUI] = useTonConnectUI();

  async function sendTon() {
        const myTransaction = {
            validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
            messages: [
                {
                    address: "UQCiLpPEi53uFdA4r3fNSZc_XMBJrtG24B4nzL7dPhQ3nytp",
                    amount: "1",
                    // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
                },
                {
                    address: "UQAvIWV8KxUsqWk5k639PLID_9NlaiVSqGbVcc-IdKPZOrjc",
                    amount: "600000",
                    // payload: "base64bocblahblahblah==" // just for instance. Replace with your transaction payload or remove
                }
            ]
        }
        const result = await tonConnectUI.sendTransaction(myTransaction)
        return result
    }

```