---
id: risk-tiers
title: Risk Limits and Position Tiers
sidebar_label: Risk Limits and Position Tiers
sidebar_position: 3
description: UXUY perpetual contracts assign Risk Tiers based on Position Notional and dynamically adjust leverage and the Maintenance Margin Rate.
keywords: [risk tier, position tier, risk limit, maintenance margin rate, maximum leverage]
---

# Risk Limits and Position Tiers

## What Are Position Tiers

To manage the market risk associated with different position sizes, the platform assigns positions to different Risk Tiers based on Position Notional and configures corresponding risk parameters for each tier.

## Why Position Tiers Exist

As position size increases, liquidity and liquidation risk under extreme market conditions may also increase. Larger positions therefore generally require stricter risk constraints, including:

- Higher margin requirements
- Lower maximum available leverage
- Stricter Maintenance Margin and risk control parameters

## How Tiers Change

Position tiers adjust dynamically as Position Notional changes:

- As a position increases, it may move into a higher Risk Tier.
- As a position decreases, it may return to a lower Risk Tier.

After a tier change, the maximum available leverage, Maintenance Margin Rate and other applicable risk parameters may be adjusted accordingly. Specific tiers and parameters are subject to what is displayed in the UXUY trading interface.
