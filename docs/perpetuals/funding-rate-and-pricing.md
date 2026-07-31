---
id: funding-rate-and-pricing
title: Funding Rate and Pricing Mechanism
sidebar_label: Funding Rate and Pricing
sidebar_position: 5
description: The definitions, purposes and calculation methods of UXUY Mark Price, Index Price and Funding Rate.
keywords: [mark price, index price, funding rate, Mark Price, Index Price, Funding Rate]
---

# Funding Rate and Pricing Mechanism

## Mark Price

### What Is the Mark Price

The Mark Price is a key reference price used by the platform to calculate unrealized PnL, monitor position risk and determine whether liquidation is triggered. The Mark Price is not the same as the last traded price.

### Why the Mark Price Is Used

Markets may experience sharp swings due to abnormal fills or liquidity changes over short periods. Using the last traded price directly for risk calculations could cause unnecessary liquidations. The platform therefore uses the relatively stable Mark Price as the basis for risk management.

### Primary Uses of the Mark Price

- Calculating unrealized PnL
- Determining whether liquidation conditions are met
- Monitoring position and account risk
- Calculating certain risk metrics

### Does the Mark Price Affect Order Execution

No. Orders are still matched at prices actually available in the market. The Mark Price is used primarily for PnL and risk calculations and does not directly participate in order matching.

## Index Price

The Index Price is calculated from the prices of valid reference trading platforms and their assigned weights.

```
Index Price = Σ (Valid Trading Platform Price × Original Weight) ÷ Total Valid Weight
```

If a reference source fails or becomes temporarily unavailable, the platform may exclude it from the current valid calculation in accordance with the index calculation methodology.

## Funding Rate

### What Is the Funding Rate

The Funding Rate is a fee paid or received between longs and shorts in the perpetual contract market at defined intervals. Funding costs are transferred between counterparties according to the direction of the rate and generally do not constitute platform trading fee revenue.

### Why the Funding Rate Is Needed

Perpetual contracts have no fixed expiry date. Through periodic payments between longs and shorts, the Funding Rate mechanism helps keep perpetual contract prices relatively consistent with the spot price of the underlying market.

### Funding Rate Formula

```
Funding Rate (F) = Average Premium Index (P) + clamp (Interest Rate − Average Premium Index (P), −0.0005, 0.0005)
```

- When F &gt; 0, longs pay funding to shorts.
- When F &lt; 0, shorts pay funding to longs.

### When Funding Is Settled

The platform settles funding at the defined funding settlement times. Only users still holding the relevant position at the time of settlement pay or receive funding for that period; positions fully closed before settlement do not participate in that settlement.

:::note
Rates for different assets are adjusted dynamically according to market conditions. Specific details are subject to what is displayed on the asset details page.
:::
