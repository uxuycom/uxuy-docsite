---
sidebar_label: "Integrated MetaMask Standard"
sidebar_position: 3
---

# Integrated MetaMask Standard

MetaMask Standard Wallet Integration

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

