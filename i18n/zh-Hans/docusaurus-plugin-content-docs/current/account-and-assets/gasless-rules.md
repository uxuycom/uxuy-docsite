---
id: gasless-rules
title: GasLess 规则
sidebar_label: GasLess 规则
sidebar_position: 3
description: GasLess 由平台垫付网络 Gas 费用的适用条件、每日额度、金额门槛与各场景规则。
keywords: [GasLess, Gas 代付, 免 Gas, 额度, gasPrice]
---

# GasLess 规则

GasLess 允许符合条件的交易由平台垫付网络 Gas 费用。是否符合条件取决于交易类型、涉及网络、交易金额与每日额度。

:::warning
美股与港股交易不适用 GasLess。
:::

## 通用规则

- 当一笔交易涉及多条网络时，按其中要求最严格的网络判定是否符合 GasLess。
- 若涉及的网络中有任意一条不支持 GasLess，则该笔订单不适用 GasLess。
- **TRON 不支持 GasLess。**
- 对于从用户地址扣款的操作，优先使用用户自身的原生代币支付 Gas；余额不足时，才判定是否符合 GasLess。

## 各场景额度与金额门槛

| 场景 | 每日额度 | 金额门槛 |
| --- | --- | --- |
| 现货交易 | 最多 20 笔/天 | BNB Chain / Base / Solana / X Layer / Polygon / Arbitrum：≥ 10 USDT；Ethereum：≥ 50 USDT 且当前 gasPrice &lt; 10 Gwei |
| 转账 / SwitchU 红包 | 最多 5 笔/天 | 同上；且代币需支持 GasLess（如 Cash），并非所有代币的转账均可 GasLess |
| DApp 交易 | 最多 5 笔/天 | 网络需支持 GasLess；Ethereum 需当前 gasPrice &lt; 10 Gwei |

## 内部划转

| 方向 | 费用 |
| --- | --- |
| 现货 → 永续 | 全部 GasLess |
| 永续 → 现货 | 收取 0.1 USDT |

## Gas 支付特殊处理

- **EVM 网络**：优先使用用户原生代币支付 Gas；余额不足且交易符合 GasLess 条件时，由平台垫付；否则提示用户预留原生代币或稳定币。
- **Solana**：由用户自行支付网络手续费。

## 示例：跨链兑换

用户持有 BSC-BNB（0.1）、BSC-USDT（10）、Base-USDC（2），将合计 12 USDT 全部兑换为 Polygon-USDC，且当日 GasLess 额度尚未用完。该交易包含三步操作：

1. **BSC-USDT 转入跨链桥**：用户以自身原生代币支付 Gas。
2. **Base-USDC 转入跨链桥**：用户无原生代币支付 Gas，触发 GasLess 判定；因跨链金额为 12 USDT 且资产均为 Cash，整笔订单符合条件，由平台垫付 Gas。
3. **Polygon-USDC 从跨链桥转至收款地址**：由平台垫付 Gas。
