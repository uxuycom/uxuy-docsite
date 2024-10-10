---
sidebar_label: "integrated MetaMask Standard (Beta)"
sidebar_position: 3
---

# integrated MetaMask Standard (Beta)

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

const { ethereum } =  new WalletTgSdk({ 
  injected: true  // Whether ethereum is injected into the window; if MetaMask is present, it will not be injected.
})

//Trigger Telegram
ethereum
// use window.ethereum to interact with the wallet
window.ethereum

```

