---
id: gasless-rules
title: GasLess Rules
sidebar_label: GasLess Rules
sidebar_position: 3
description: Eligibility conditions, daily quotas, amount thresholds and scenario-specific rules for GasLess, where the platform covers network gas fees.
keywords: [GasLess, gas sponsorship, gas-free, quota, gasPrice]
---

# GasLess Rules

GasLess allows eligible transactions to have their network gas fees covered by the platform. Eligibility depends on the transaction type, the networks involved, the transaction amount and the daily quota.

:::warning
GasLess does not apply to US or Hong Kong equity trading.
:::

## General Rules

- When a transaction involves multiple networks, GasLess eligibility is determined by the strictest network among them.
- If any network involved does not support GasLess, the order is not eligible for GasLess.
- **TRON does not support GasLess.**
- For operations that deduct from a user's address, the user's own native token is used to pay gas first. GasLess eligibility is only assessed when that balance is insufficient.

## Quotas and Amount Thresholds by Scenario

| Scenario | Daily Quota | Amount Threshold |
| --- | --- | --- |
| Spot trading | Up to 20 transactions/day | BNB Chain / Base / Solana / X Layer / Polygon / Arbitrum: ≥ 10 USDT; Ethereum: ≥ 50 USDT and current gasPrice &lt; 10 Gwei |
| Transfers / SwitchU red packets | Up to 5 transactions/day | Same as above; the token must also support GasLess (such as Cash), as not all token transfers are eligible for GasLess |
| DApp transactions | Up to 5 transactions/day | The network must support GasLess; on Ethereum, the current gasPrice must be &lt; 10 Gwei |

## Internal Transfers

| Direction | Fee |
| --- | --- |
| Spot → Perpetuals | Fully GasLess |
| Perpetuals → Spot | 0.1 USDT charged |

## Special Handling of Gas Payments

- **EVM networks**: The user's native token is used to pay gas first. If that balance is insufficient and the transaction meets GasLess conditions, the platform covers the gas. Otherwise, the user is prompted to reserve native tokens or stablecoins.
- **Solana**: The user pays the network fee directly.

## Example: Cross-Chain Swap

A user holds BSC-BNB (0.1), BSC-USDT (10) and Base-USDC (2), and swaps the combined 12 USDT into Polygon-USDC while their GasLess quota for the day has not been used up. The transaction involves three steps:

1. **BSC-USDT transferred into the bridge**: The user pays gas with their own native token.
2. **Base-USDC transferred into the bridge**: The user has no native token to pay gas, so GasLess eligibility is assessed. Because the cross-chain amount is 12 USDT and all assets are Cash, the entire order is eligible and the platform covers the gas.
3. **Polygon-USDC transferred from the bridge to the receiving address**: The platform covers the gas.
