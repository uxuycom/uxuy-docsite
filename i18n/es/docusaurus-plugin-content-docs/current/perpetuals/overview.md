---
id: overview
title: Descripción general de los contratos perpetuos
sidebar_label: Descripción general
sidebar_position: 1
description: Mecanismos básicos de los contratos perpetuos de UXUY, información previa a operar, valoración de órdenes y definición de los datos principales.
keywords: [contratos perpetuos, apalancamiento, liquidación forzosa, tasa de financiación, precio de marca, margen de mantenimiento]
---

# Descripción general de los contratos perpetuos

Los contratos perpetuos permiten a los usuarios abrir posiciones largas o cortas en los mercados compatibles sin una fecha de vencimiento fija.

- Cuando el precio de mercado sube, una posición larga puede obtener beneficios.
- Cuando el precio de mercado baja, una posición corta puede obtener beneficios.
- El apalancamiento amplía la exposición al mercado con la misma aportación de margen, pero también amplía el riesgo en la misma medida.
- Cuando una posición no cumple el requisito de margen de mantenimiento, puede activarse la liquidación forzosa.
- El mecanismo de tasa de financiación sirve para mantener el precio del contrato perpetuo lo más cerca posible del precio del mercado subyacente.

## Información previa a operar

Antes de enviar una orden, confirme la siguiente información:

- El contrato y la dirección de la posición
- El tipo de orden y el precio de la orden
- El tamaño de la posición
- El múltiplo de apalancamiento
- El margen y la comisión de apertura estimados
- El precio de liquidación estimado
- La tasa de financiación y su liquidación

## Valoración de las órdenes

Al estimar el margen:

- Precio de cálculo de las **órdenes limitadas**: el precio límite introducido por el usuario.
- Precio de cálculo de las **órdenes de mercado**: el precio de marca en el momento de enviar la orden.

El margen y las comisiones reales se calcularán en función del volumen ejecutado, el precio de ejecución, el múltiplo de apalancamiento y la tasa de comisión Maker o Taker aplicable.

## Definición de los datos principales

| Término | Descripción |
| --- | --- |
| Precio de marca (Mark Price) | Precio de referencia utilizado para calcular las pérdidas y ganancias no realizadas, supervisar el estado del margen y realizar los cálculos relacionados con la liquidación forzosa. |
| Precio medio de apertura (Entry Price) | Precio medio de las distintas ejecuciones de la posición actual, ponderado por volumen. |
| Valor nocional de la posición (Position Notional) | Valor nocional obtenido al multiplicar el tamaño de la posición por el precio de referencia correspondiente. |
| Margen inicial (Initial Margin) | Margen necesario para abrir y mantener la exposición inicial de la posición. |
| Margen de mantenimiento (Maintenance Margin) | Margen mínimo necesario para que la posición no sea objeto de liquidación forzosa. |
| Patrimonio de la cuenta (Account Equity) | Suma del saldo del monedero y de todas las pérdidas y ganancias no realizadas. |
| Tasa de financiación (Funding Rate) | Tasa utilizada en el intercambio de fondos entre posiciones largas y cortas según un ciclo fijo. |
| Nivel de riesgo (Risk Tier) | Categoría de riesgo definida según el valor nocional de la posición, utilizada para determinar el apalancamiento máximo disponible, la tasa de margen de mantenimiento y otros parámetros de riesgo. |
| Fondo de seguro (Insurance Fund) | Mecanismo de protección frente al riesgo que absorbe parte de las pérdidas por saldo negativo derivadas de liquidaciones en condiciones extremas de mercado y reduce la probabilidad de activar el desapalancamiento automático (ADL). |
| Desapalancamiento automático (ADL) | Mecanismo de control de riesgo de último nivel mediante el cual, cuando las pérdidas por liquidación no pueden cubrirse suficientemente con el fondo de seguro, la plataforma puede reducir automáticamente parte de las posiciones con beneficios según un orden de riesgo. |
