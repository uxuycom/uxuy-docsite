---
sidebar_label: "Docs"
sidebar_position: 2
---

# 🧩 UXUY Connect Guide

## Overview

This guide demonstrates how to integrate the UXUY Wallet into your telegram mini application (miniapp) using the UXUY Connect SDK.

The integration enables users to connect their UXUY Wallet on Telegram and perform multi-chain transactions seamlessly.

## Resources

- [UXUY Wallet on Telegram](https://t.me/UXUYbot)
- [Connection Demo](https://t.me/uxuy_demo_miniapp_bot/demo)
- [Connection Demo Repository](https://github.com/uxuycom/test-tg-dapp)
- UXUY SDK Repository
- [Create a Telegram Bot](https://core.telegram.org/bots/tutorial#executing-commands)
- [Create a Telegram MinApp](https://core.telegram.org/bots#replace-entire-websites)

## Installation

Install the UXUY SDK using npm:

```bash
npm install @uxuycom/web3-tg-sdk
```

## Integration

- [Ethereum Wallet Integration](https://docs.uxuy.com/uxuy-connect/evm/)
- [Tron Wallet Integration](https://docs.uxuy.com/uxuy-connect/tronconnect)
- [Ton Connect Integration](https://docs.uxuy.com/uxuy-connect/tonconnect)

## Supported Chains

UXUY Wallet supports multiple chains:

| Chain Name   | Chain ID (Decimal) | Chain ID (Hexadecimal) | Chain Specification | DApp Supported |
| ------------ | ------------------ | ---------------------- | ------------------- | -------------- |
| Ethereum     | 1                  | 0x1                    | EVM                 | ✅             |
| BNB Chain    | 56                 | 0x38                   | EVM                 | ✅             |
| Base         | 8453               | 0x2105                 | EVM                 | ✅             |
| Arbitrum     | 42161              | 0xa4b1                 | EVM                 | ✅             |
| Polygon      | 137                | 0x89                   | EVM                 | ✅             |
| Fantom       | 250                | 0xfa                   | EVM                 | ✅             |
| Optimism     | 10                 | 0xa                    | EVM                 | ✅             |
| Avalanche    | 43114              | 0xa86a                 | EVM                 | ✅             |
| zkSync Era   | 324                | 0x144                  | EVM                 | ✅             |
| Linea        | 59144              | 0xe708                 | EVM                 | ❌             |
| Core         | 1116               | 0x45c                  | EVM                 | ✅             |
| zkLink Nova  | 810180             | 0xc5cc4                | EVM                 | ✅             |
| opBNB Chain  | 204                | 0xcc                   | EVM                 | ✅             |
| MAP Protocol | 22776              | 0x58f8                 | EVM                 | ✅             |
| Bitlayer     | 200901             | 0x310c5                | EVM                 | ✅             |
| PlatON       | 210425             | 0x335f9                | EVM                 | ✅             |
| Ton          | -                  | -                      | TON                 | ✅             |
| Tron         | -                  | -                      | TRON                | ✅             |
| Lighting     | -                  | -                      | LIGHTING            | ❌             |
| Flow         | 747                | -                      | EVM                 | ✅             |
| ...          | ...                | ...                    | ...                 | ...            | 

> ⚠️ Warning:EVM chains not supported in the table can be developed using custom chains.

## Contributing

We welcome contributions to the UXUY SDK! Please see our [Contributing Guidelines](CONTRIBUTING.md) for more information.

## License

This project is licensed under the [MIT License](LICENSE.md).
