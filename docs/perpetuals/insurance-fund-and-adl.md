---
id: insurance-fund-and-adl
title: Insurance Fund and Auto-Deleveraging (ADL)
sidebar_label: Insurance Fund and ADL
sidebar_position: 4
description: The sources and uses of the UXUY Insurance Fund, along with the trigger conditions and ranking rules for Auto-Deleveraging (ADL).
keywords: [insurance fund, auto-deleveraging, ADL, bankruptcy loss, risk control]
---

# Insurance Fund and Auto-Deleveraging (ADL)

## Insurance Fund

### What Is the Insurance Fund

The Insurance Fund is a risk protection mechanism designed to address extreme market volatility and the risk of bankruptcy losses from liquidations. When a liquidated position cannot be closed at a price sufficient to cover the related losses, the Insurance Fund may absorb those losses first in accordance with platform rules, reducing the likelihood of risk being passed on to other users.

The Insurance Fund helps strengthen the market's capacity to absorb risk and reduces the probability of Auto-Deleveraging (ADL) being triggered.

### Sources of the Insurance Fund

- Surplus funds generated when liquidation orders are filled at prices better than the bankruptcy price
- Risk reserve funds allocated by the platform in accordance with applicable rules
- Other supplementary risk funds permitted under platform rules

:::note
Insurance Funds for different contract markets or trading pairs may be accounted for separately. Specific arrangements are subject to the actual UXUY product rules.
:::

### Uses of the Insurance Fund

- Cover bankruptcy losses arising from liquidation orders
- Reduce the probability of Auto-Deleveraging (ADL) being triggered
- Strengthen the market's capacity to absorb risk
- Help keep the trading system stable under extreme market conditions

## Auto-Deleveraging (ADL)

### What Is ADL

ADL (Auto-Deleveraging) is the final layer of risk control under extreme market conditions. When liquidation orders cannot be adequately filled, bankruptcy losses occur, and the Insurance Fund is insufficient to cover all losses, the platform may automatically deleverage some profitable positions according to a risk ranking in order to maintain the stability of the overall trading system.

### Why ADL Is Triggered

- Liquidation orders cannot be fully filled
- Bankruptcy losses occur after liquidation
- The Insurance Fund is insufficient to cover the corresponding losses

### Which Positions Are More Likely to Enter the ADL Queue

The platform generally ranks positions according to established risk rules. Factors that may affect the ranking include profit level, effective leverage and position size. Specific ranking metrics and execution rules are subject to the UXUY product mechanism.

### What Happens After ADL

- Some or all of a position may be automatically deleveraged or closed
- Realized PnL for the deleveraged portion will be settled
- Any remaining position that is not deleveraged may continue to be held (if applicable)
- Users can review the results through trade records or platform notifications
