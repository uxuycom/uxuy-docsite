---
sidebar_position: 4
---

# Product Features

## GasLess: Gas-Free On-Chain Interaction

In traditional blockchains, every transfer or contract interaction requires paying gas fees, which can be complex and costly. To lower barriers and enhance user experience, UXUY has independently developed the **GasLess** protocol, enabling truly "**zero-cost on-chain transactions.**"

### Core Advantages:

- Single transfer or trade amount **≥ 10 USDT** qualifies for gas fee exemption
- No need to pre-fund gas; on-chain broadcasting completes seamlessly
- Currently supports **BNB Smart Chain** and **Base** networks, with more major chains coming soon
- GasLess makes every on-chain transaction easier and more efficient!

![Installing UXUY](/img/image12.png)

## Cross-Chain Transfers: Multi-Chain Stablecoins, One-Click Connectivity

UXUY's built-in instant cross-chain bridge now supports aggregated stablecoin transfers across multiple chains. When you hold USD assets (such as USDT, USDC, etc.) from different networks in your funds account, you can transfer them to any target chain with one click—no need for manual chain switching or intermediaries. This ensures security, efficiency, and a smooth user experience.

### Key Advantages:

- Instant cross-chain speed with rapid fund arrival
- Supports multi-chain stablecoin aggregation, automatically detecting the source network
- Smart matching of cross-chain paths without complex steps
- Making cross-chain transfers simpler and asset flow freer.
- 
![Installing UXUY](/img/image13.png)

## Cross-Chain Trading Routing: Global Optimal Path Calculation Engine

Built on UXUY's proprietary instant cross-chain bridge, we introduce an innovative one-stop cross-chain trading routing mechanism.

When users hold USD stablecoins across multiple chains (such as USDT/USDC on BNB Smart Chain, Base, Ethereum) and want to purchase an asset (e.g., ETH), UXUY automatically queries prices across multiple chains, identifies the best-priced chain, and completes the swap directly on that chain—no manual network switching or asset splitting required.

### ✅ Key Features:

- Automatically detects multi-chain balances
- Smart price inquiries and cross-chain price comparison
- Executes swaps on the chain with the optimal price
- Users only need to click once; the system handles cross-chain allocation and swapping automatically 
```
[User Wallet Multi-Chain USD Assets]
     ├── Ethereum: 50 USDT
     ├── Base:     30 USDT
     └── BNB:      20 USDT

             │
             ▼
[On-Chain Route Scanning]
→ Uniswap、Sushiswap（ETH）
→ BaseSwap、Aerodrome（Base）
→ PancakeSwap、MDEX（BNB）

             │
             ▼
[Cross-Chain Bridge Cost Evaluation]
→ ETH <-> Base
→ BNB <-> ETH
→ Base <-> BNB

             │
             ▼
[Slippage, Gas, and Swap Outcome Calculation]

             │
             ▼
[Optimal Route Combination Recommendation]

             │
             ▼
[Execute Composite Transactions]
→ Multi-Chain Transaction Initiation → Aggregated Routing → User Receives ETH

```

