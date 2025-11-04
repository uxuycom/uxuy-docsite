---
sidebar_label: "Asset Recovery Guide"
sidebar_position: 8
---

# Tutorial for Recovering Assets Sent to the Wrong Address

Currently, we support asset recovery on the following chains: **opBNB, Arbitrum One, Optimism, BNB Smart Chain, Base, Ethereum**, and **X-Layer.**

Please follow the steps below carefully.

:::warning
For incorrect deposits on other chains, please contact our customer support team with your transaction details, and we will assist you.
:::

## Step 1: Import Private Key

1. Export the **mnemonic phrase from your UXUY wallet**, and import it into **MetaMask**.

<img src="/img/asset-recovery-guide/import-private-key.png" alt="alt" width="600px" />

:::note
Since UXUY wallet is a **contract wallet**, the address shown in MetaMask after importing your private key may differ from the address shown in UXUY. This is normal.
:::

2. Based on the chain where you made the wrong deposit, copy the corresponding MetaMask wallet address and **transfer a small amount of the native token** to cover **GAS fees**:
   - If the chain is **opBNB**, please deposit **0.0001 BNB** (opBNB native token).
   - If the chain is **Arbitrum One**, please deposit **0.0001 ETH** (Arbitrum native token).
   - If the chain is **Optimism**, please deposit **0.0001 ETH** (Optimism native token).
   - If the chain is **BNB Smart Chain**, please deposit **0.0001 BNB** (BNB native token).
   - If the chain is **Base**, please deposit **0.0001 ETH** (Base native token).
   - If the chain is **Ethereum**, please deposit **0.0001 ETH** (Ethereum native token).
   - If the chain is **X-Layer**, please deposit **0.0001 OKB** (X-Layer native token).

## Step 2: Connect Wallet

1. Visit the [UXUY Asset Recovery Website](https://smart-account-util.uxuy.com/) (we recommend using a desktop browser).
2. Click the **Connect Wallet** button in the upper right corner and connect using **MetaMask**.

:::warning
If you have other wallet extensions installed in your browser, please disable them to avoid conflicts.
:::

<img src="/img/asset-recovery-guide/connect-wallet-1.png" alt="alt" width="600px" />


## Step 3: Select Network

1. In the **Select Network** section, choose the chain where the wrong deposit occurred:
   - **opBNB**
   - **Arbitrum One**
   - **Optimism**
   - **BNB Smart Chain**
   - **Base**
   - **Ethereum**
   - **X-Layer**

<img src="/img/asset-recovery-guide/select-network-1.png" alt="alt" width="600px" />


## Step 4: Verify Account Info

1. In the **AA Account Info** section, you can view:
   - **User Address** (your MetaMask wallet address after importing the private key)
   - **AA Address** (your UXUY contract wallet address)
   - **Deployment Status** (if the status is "Not Deployed," you need to click **Deploy** and confirm the signature in MetaMask)

2. When the **Deployment Status shows "Deployed"**, your AA wallet is ready.

<img src="/img/asset-recovery-guide/verify-account-1.png" alt="alt" width="600px" />

## Step 5: Check Balance

1. In the **Token Balance Query** section:
   - Select the token you deposited by mistake (e.g., **USDT**, **USDC**, **ETH**) or enter the contract address of the token.
   - The system supports querying and recovering any token on the selected chain.

2. Click **Check Balance** to view the balance of the token in your AA wallet.

<img src="/img/asset-recovery-guide/check-balance-1.png" alt="alt" width="600px" />

## Step 6: Transfer Assets Out

1. In the **Asset Transfer** section, enter the target address where you want to withdraw your assets.

:::warning
Make sure the target address is **on the same chain.**
:::

2. Click **Execute Transfer** and wait for the transaction to complete.
3. Once the transaction is confirmed, your assets will be successfully transferred out, and the recovery process is complete ✅.


<img src="/img/asset-recovery-guide/transfer-assets-1.png" alt="alt" width="600px" />

## Additional Notes

:::tip
- Currently, asset recovery is supported on **opBNB, Arbitrum One, Optimism, BNB Smart Chain, Base, Ethereum,** and ** X-Layer** chains.
- For incorrect deposits on **other chains**, please contact our customer service in the community, and we will assist you.
:::