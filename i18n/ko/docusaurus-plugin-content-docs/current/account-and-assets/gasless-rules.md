---
id: gasless-rules
title: GasLess 규칙
sidebar_label: GasLess 규칙
sidebar_position: 3
description: 플랫폼이 네트워크 Gas 비용을 대납하는 GasLess의 적용 조건, 일일 한도, 금액 기준 및 시나리오별 규칙입니다.
keywords: [GasLess, Gas 대납, Gas 면제, 한도, gasPrice]
---

# GasLess 규칙

GasLess는 조건을 충족하는 거래에 대해 플랫폼이 네트워크 Gas 비용을 대납하는 기능입니다. 조건 충족 여부는 거래 유형, 관련 네트워크, 거래 금액 및 일일 한도에 따라 결정됩니다.

:::warning
미국 주식 및 홍콩 주식 거래에는 GasLess가 적용되지 않습니다.
:::

## 공통 규칙

- 하나의 거래가 여러 네트워크와 관련되는 경우, 그중 요건이 가장 엄격한 네트워크를 기준으로 GasLess 적용 여부를 판정합니다.
- 관련된 네트워크 중 GasLess를 지원하지 않는 네트워크가 하나라도 있으면 해당 주문에는 GasLess가 적용되지 않습니다.
- **TRON은 GasLess를 지원하지 않습니다.**
- 사용자 주소에서 차감되는 작업의 경우, 사용자 자신의 네이티브 토큰으로 Gas를 우선 지불하며, 잔액이 부족한 경우에 한해 GasLess 적용 여부를 판정합니다.

## 시나리오별 한도 및 금액 기준

| 시나리오 | 일일 한도 | 금액 기준 |
| --- | --- | --- |
| 현물 거래 | 최대 20건/일 | BNB Chain / Base / Solana / X Layer / Polygon / Arbitrum：≥ 10 USDT；Ethereum：≥ 50 USDT 및 현재 gasPrice &lt; 10 Gwei |
| 전송 / SwitchU 레드 패킷 | 최대 5건/일 | 위와 동일；또한 해당 토큰이 GasLess를 지원해야 하며(예: Cash), 모든 토큰의 전송에 GasLess가 적용되는 것은 아닙니다 |
| DApp 거래 | 최대 5건/일 | 네트워크가 GasLess를 지원해야 하며；Ethereum은 현재 gasPrice &lt; 10 Gwei 조건을 충족해야 합니다 |

## 내부 이체

| 방향 | 수수료 |
| --- | --- |
| 현물 → 무기한 선물 | 전액 GasLess |
| 무기한 선물 → 현물 | 0.1 USDT 부과 |

## Gas 지불 관련 특수 처리

- **EVM 네트워크**: 사용자의 네이티브 토큰으로 Gas를 우선 지불하며, 잔액이 부족하고 해당 거래가 GasLess 조건을 충족하는 경우 플랫폼이 대납합니다. 그렇지 않은 경우 사용자에게 네이티브 토큰 또는 스테이블코인을 남겨두도록 안내합니다.
- **Solana**: 사용자가 네트워크 수수료를 직접 지불합니다.

## 예시: 크로스체인 스왑

사용자가 BSC-BNB（0.1）, BSC-USDT（10）, Base-USDC（2）를 보유하고 있으며, 합계 12 USDT 전액을 Polygon-USDC로 스왑하고, 당일 GasLess 한도가 아직 소진되지 않은 경우입니다. 이 거래는 세 단계로 구성됩니다.

1. **BSC-USDT를 크로스체인 브리지로 전송**: 사용자가 자신의 네이티브 토큰으로 Gas를 지불합니다.
2. **Base-USDC를 크로스체인 브리지로 전송**: 사용자에게 Gas를 지불할 네이티브 토큰이 없어 GasLess 판정이 시작됩니다. 크로스체인 금액이 12 USDT이고 자산이 모두 Cash이므로 주문 전체가 조건을 충족하여 플랫폼이 Gas를 대납합니다.
3. **Polygon-USDC를 크로스체인 브리지에서 수취 주소로 전송**: 플랫폼이 Gas를 대납합니다.
