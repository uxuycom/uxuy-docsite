---
id: gasless-rules
title: Reglas de GasLess
sidebar_label: Reglas de GasLess
sidebar_position: 3
description: Condiciones aplicables, cuotas diarias, umbrales de importe y reglas por escenario para GasLess, mediante el cual la plataforma adelanta las comisiones de gas de la red.
keywords: [GasLess, pago de gas por la plataforma, sin gas, cuota, gasPrice]
---

# Reglas de GasLess

GasLess permite que la plataforma adelante las comisiones de gas de la red en las operaciones que cumplan los requisitos. El cumplimiento de los requisitos depende del tipo de operación, las redes implicadas, el importe de la operación y la cuota diaria.

:::warning
Las operaciones con acciones estadounidenses y de Hong Kong no admiten GasLess.
:::

## Reglas generales

- Cuando una operación implica varias redes, la elegibilidad para GasLess se determina según la red con los requisitos más estrictos.
- Si alguna de las redes implicadas no admite GasLess, la orden completa no será elegible para GasLess.
- **TRON no admite GasLess.**
- En las operaciones con cargo a la dirección del usuario, se utiliza prioritariamente el token nativo del propio usuario para pagar el gas; solo cuando el saldo es insuficiente se evalúa la elegibilidad para GasLess.

## Cuotas y umbrales de importe por escenario

| Escenario | Cuota diaria | Umbral de importe |
| --- | --- | --- |
| Trading spot | Hasta 20 operaciones/día | BNB Chain / Base / Solana / X Layer / Polygon / Arbitrum: ≥ 10 USDT; Ethereum: ≥ 50 USDT y gasPrice actual &lt; 10 Gwei |
| Transferencias / sobres rojos de SwitchU | Hasta 5 operaciones/día | Igual que el anterior; además, el token debe admitir GasLess (como Cash), ya que no todas las transferencias de tokens pueden ser GasLess |
| Operaciones en DApp | Hasta 5 operaciones/día | La red debe admitir GasLess; en Ethereum, el gasPrice actual debe ser &lt; 10 Gwei |

## Transferencias internas

| Dirección | Comisión |
| --- | --- |
| Spot → Perpetuos | Totalmente GasLess |
| Perpetuos → Spot | Se cobran 0.1 USDT |

## Tratamiento especial del pago de gas

- **Redes EVM**: se utiliza prioritariamente el token nativo del usuario para pagar el gas; si el saldo es insuficiente y la operación cumple las condiciones de GasLess, la plataforma lo adelanta; en caso contrario, se indica al usuario que reserve tokens nativos o stablecoins.
- **Solana**: el usuario paga por su cuenta las comisiones de red.

## Ejemplo: intercambio cross-chain

Un usuario dispone de BSC-BNB (0.1), BSC-USDT (10) y Base-USDC (2), y desea intercambiar un total de 12 USDT por Polygon-USDC, sin haber agotado su cuota diaria de GasLess. Esta operación consta de tres pasos:

1. **Transferencia de BSC-USDT al puente cross-chain**: el usuario paga el gas con su propio token nativo.
2. **Transferencia de Base-USDC al puente cross-chain**: el usuario no dispone de token nativo para pagar el gas, por lo que se activa la evaluación de GasLess; dado que el importe cross-chain es de 12 USDT y todos los activos son Cash, la orden completa cumple los requisitos y la plataforma adelanta el gas.
3. **Transferencia de Polygon-USDC desde el puente cross-chain a la dirección de destino**: la plataforma adelanta el gas.
