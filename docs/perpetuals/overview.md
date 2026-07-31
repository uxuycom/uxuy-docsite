---
id: overview
title: Perpetual Contracts Overview
sidebar_label: Overview
sidebar_position: 1
description: The basic mechanics of UXUY perpetual contracts, what to know before trading, order pricing notes and core data definitions.
keywords: [perpetual contracts, leverage, liquidation, funding rate, mark price, maintenance margin]
---

# Perpetual Contracts Overview

Perpetual contracts allow users to open long or short positions on supported markets without a fixed expiry date.

- When the market price rises, long positions may generate gains.
- When the market price falls, short positions may generate gains.
- Leverage can amplify market exposure for the same amount of margin, while amplifying risk to the same degree.
- When a position cannot meet the Maintenance Margin requirement, liquidation may be triggered.
- The Funding Rate mechanism helps keep the perpetual contract price close to the price of the underlying market.

## Before You Trade

Before placing an order, confirm the following:

- Contract market and position direction
- Order type and order price
- Position size
- Leverage
- Estimated margin and opening fee
- Estimated Liquidation Price
- Funding Rate and settlement

## Order Pricing Notes

When estimating margin:

- The calculation price for a **limit order** is the limit price entered by the user.
- The calculation price for a **market order** is the Mark Price at the time the order is submitted.

Actual margin and fees are calculated based on the actual filled quantity, execution price, leverage and the applicable Maker or Taker fee rate.

## Core Data Definitions

| Term | Description |
| --- | --- |
| Mark Price | The reference price used to calculate unrealized PnL, monitor margin status and perform liquidation-related calculations. |
| Entry Price | The volume-weighted average of the execution prices of all fills in the current position. |
| Position Notional | The notional value obtained by multiplying position size by the corresponding reference price. |
| Initial Margin | The margin required to open and maintain the initial position exposure. |
| Maintenance Margin | The minimum margin required to keep a position from being liquidated. |
| Account Equity | The sum of wallet balance and all unrealized PnL. |
| Funding Rate | The rate used when funds are exchanged between longs and shorts at fixed intervals. |
| Risk Tier | The risk level assigned according to Position Notional, used to determine the maximum available leverage, Maintenance Margin Rate and other risk parameters. |
| Insurance Fund | A risk-buffer mechanism used to absorb part of the bankruptcy losses from liquidations under extreme market conditions and to reduce the likelihood of Auto-Deleveraging (ADL) being triggered. |
| Auto-Deleveraging (ADL) | The final layer of risk control, under which the platform may automatically reduce some profitable positions according to a risk ranking when liquidation losses cannot be fully covered by the Insurance Fund. |
