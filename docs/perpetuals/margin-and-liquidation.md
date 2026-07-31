---
id: margin-and-liquidation
title: Margin, PnL and the Liquidation Mechanism
sidebar_label: Margin and Liquidation
sidebar_position: 2
description: Margin calculations, unrealized PnL, Liquidation Price formulas and the isolated margin liquidation process for UXUY perpetual contracts.
keywords: [margin, unrealized PnL, liquidation price, isolated margin, maintenance margin rate]
---

# Margin, PnL and the Liquidation Mechanism

:::info
If the content of this document differs from what is displayed in the UXUY trading interface, the real-time data and rules shown in the product interface prevail. Actual calculations may also incorporate product-specific precision and rounding rules, fee reserves, funding costs, Risk Tiers and other parameters.
:::

## Opening Margin and Cost

### Estimated Opening Margin

```
Estimated Opening Margin = Order Quantity × Calculation Price ÷ Leverage
```

- The calculation price for a limit order is the limit price entered by the user.
- The calculation price for a market order is the Mark Price at the time the order is submitted.

### Actual Opening Margin

```
Actual Opening Margin = Σ (Filled Quantity per Fill × Execution Price per Fill ÷ Leverage)
```

### Estimated Opening Cost

```
Estimated Opening Cost = Estimated Opening Margin + Estimated Opening Fee
```

### Actual Opening Cost

```
Actual Opening Cost = Actual Opening Margin + Actual Opening Fee
```

### Actual Opening Fee

```
Actual Opening Fee = Σ (Filled Quantity per Fill × Execution Price per Fill × Applicable Maker/Taker Fee Rate)
```

## PnL Calculation

### Unrealized PnL

```
Long position: Unrealized PnL = (Mark Price − Average Entry Price) × Position Size
Short position: Unrealized PnL = (Average Entry Price − Mark Price) × Position Size
```

## Maximum Position Size and Capital Usage

### Maximum Position Size That Can Be Opened

```
Limit order: Maximum Position Size = Available Balance ÷ [Limit Price × (1 ÷ Leverage + Reserved Fee Rate)]
Market order: Maximum Position Size = Available Balance ÷ [Current Mark Price × (1 ÷ Leverage + Reserved Fee Rate)]
```

### Estimated Capital Required per Unit

```
Estimated Capital Required per Unit = Calculation Price ÷ Leverage + Calculation Price × Reserved Fee Rate
```

## Position and Margin Metrics

### Position Notional

```
Position Notional = Position Size × Average Entry Price
```

### Maintenance Margin

```
Maintenance Margin = Position Notional × Maintenance Margin Rate of the Current Risk Tier
```

### Position Initial Margin

```
Position Initial Margin = Position Notional ÷ Leverage
```

## Account Metrics

### Wallet Balance

```
Wallet Balance = Available Balance + Frozen Balance
```

### Account Equity

```
Account Equity = Wallet Balance + All Unrealized PnL
```

## Liquidation-Related Calculations

### Liquidation Fee

```
Liquidation Fee = Liquidated Quantity × Mark Price at Liquidation × Liquidation Fee Rate
```

### Theoretical Liquidation PnL

```
Long position: Theoretical Liquidation PnL = (Mark Price at Liquidation − Average Entry Price) × Liquidated Quantity
Short position: Theoretical Liquidation PnL = (Average Entry Price − Mark Price at Liquidation) × Liquidated Quantity
```

### Reference Liquidation Price

```
Long position: Reference Liquidation Price = Average Entry Price × (1 − 1 ÷ Leverage + Maintenance Margin Rate)
Short position: Reference Liquidation Price = Average Entry Price × (1 + 1 ÷ Leverage − Maintenance Margin Rate)
```

:::note
The Liquidation Price actually displayed may differ from the simplified reference formulas above due to fees, funding costs, position changes, Risk Tier adjustments, rounding rules and other account factors.
:::

## Isolated Margin Liquidation Process

Under isolated margin mode, each position uses its own independent margin. When the risk of a position continues to rise and its margin becomes insufficient, only that isolated position may be liquidated, and other isolated positions are generally not directly affected.

Specific trigger conditions, execution methods and settlement results are subject to the real-time risk parameters displayed on the UXUY trading page and the actual execution results.

| Step | Description |
| --- | --- |
| 1. Risk continues to rise | The market price moves unfavorably and the position's unrealized loss continues to widen. |
| 2. Insufficient margin | When position margin is no longer sufficient to meet the current Maintenance Margin requirement, the system enters the risk handling process. |
| 3. Liquidation triggered | The system liquidates the isolated position in accordance with the applicable risk control rules. |
| 4. Position filled | The closing order is submitted to the market for execution, and the final execution price depends on market liquidity and actual fills at that time. |
| 5. PnL settlement | After the position is closed, the system calculates the final PnL, deducts applicable fees and updates account assets. |
