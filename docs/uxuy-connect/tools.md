---
sidebar_label: "Tools"
sidebar_position: 4
---
# Tools
support version >=0.1.3

### Installation
Install the UXUY SDK  packages via npm:

```bash
npm install @uxuycom/web3-tg-sdk
```
### Usage

```ts
import { OpenLink, ChainKey} from '@uxuycom/web3-tg-sdk';
const chainKeys =  Object.values(ChainKey)



// Generate Dapp Link: https://tm....
const dappLink = OpenLink.getUniversalDappLink("https://your-dapp.com")
// const dappLink = OpenLink.getUniversalDappLink("https://your-dapp.com?a=12321")
// const dappLink = OpenLink.getUniversalDappLink("https://your-dapp.com", {a:123123})


// Generate Receive Link: https://tm....
const link = OpenLink.getUniversalReceivePaymentLink(
        ChainKey.BNBCHAIN
        , 
        {
            address: "<Your Receive Address>",
            tokenAddr: "<Your Token Address>",
        }
)

// Generate Invite Link: https://tm.... 
// You can use this link to invite your friends to join the UxuyWallet
const InviteLink = OpenLink.getUniversalInviteLink(
    {
        inviteTgId: "<Your Telegram ID>",
        inviteTgChannel: "<Your Telegram Channel>"
    }
)

```


