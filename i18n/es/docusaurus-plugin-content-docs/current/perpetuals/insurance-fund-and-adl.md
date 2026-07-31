---
id: insurance-fund-and-adl
title: Fondo de seguro y desapalancamiento automático (ADL)
sidebar_label: Fondo de seguro y ADL
sidebar_position: 4
description: Origen y finalidad del fondo de seguro de UXUY, así como las condiciones de activación y las reglas de ordenación del desapalancamiento automático (ADL).
keywords: [fondo de seguro, desapalancamiento automático, ADL, saldo negativo, control de riesgo]
---

# Fondo de seguro y desapalancamiento automático (ADL)

## Fondo de seguro

### Qué es el fondo de seguro

El fondo de seguro es un mecanismo de protección frente al riesgo destinado a hacer frente a la volatilidad extrema del mercado y al riesgo de saldo negativo derivado de las liquidaciones forzosas. Cuando una posición liquidada no puede cerrarse a un precio suficiente para cubrir las pérdidas correspondientes, el fondo de seguro puede asumir dichas pérdidas de forma prioritaria conforme a las reglas de la plataforma, con el fin de reducir la posibilidad de que el riesgo se transmita a otros usuarios.

El fondo de seguro contribuye a mejorar la capacidad del mercado para absorber riesgos y a reducir la probabilidad de que se active el desapalancamiento automático (ADL).

### Origen del fondo de seguro

- Los fondos remanentes generados cuando las órdenes de liquidación forzosa se ejecutan a un precio mejor que el precio de bancarrota
- Los fondos de reserva de riesgo aportados por la plataforma conforme a las reglas aplicables
- Otros fondos complementarios de riesgo conformes a las reglas de la plataforma

:::note
El fondo de seguro de los distintos mercados de contratos o pares de trading puede contabilizarse de forma independiente; las disposiciones concretas se rigen por las reglas efectivas del producto UXUY.
:::

### Finalidad del fondo de seguro

- Compensar las pérdidas por saldo negativo generadas por las órdenes de liquidación forzosa
- Reducir la probabilidad de que se active el desapalancamiento automático (ADL)
- Mejorar la capacidad del mercado para absorber riesgos
- Garantizar el funcionamiento estable del sistema de trading en condiciones extremas de mercado

## Desapalancamiento automático (ADL)

### Qué es el ADL

El ADL (Auto Deleveraging, desapalancamiento automático) es el mecanismo de control de riesgo de último nivel en condiciones extremas de mercado. Cuando una orden de liquidación forzosa no puede ejecutarse en su totalidad, se generan pérdidas por saldo negativo y el fondo de seguro no basta para cubrir la totalidad de dichas pérdidas, la plataforma puede aplicar el desapalancamiento automático a parte de las posiciones con beneficios según un orden de riesgo, con el fin de preservar la estabilidad general del sistema de trading.

### Por qué se activa el ADL

- La orden de liquidación forzosa no puede ejecutarse en su totalidad
- Tras la liquidación forzosa se generan pérdidas por saldo negativo
- El fondo de seguro no basta para cubrir las pérdidas correspondientes

### Qué posiciones tienen más probabilidades de entrar en la cola de ADL

La plataforma suele ordenar las posiciones conforme a reglas de riesgo predefinidas. Entre los factores que pueden influir en la ordenación se encuentran el nivel de beneficios, el apalancamiento efectivo y el tamaño de la posición; los indicadores de ordenación y las reglas de ejecución concretos se rigen por los mecanismos del producto UXUY.

### Qué ocurre después de un ADL

- Parte o la totalidad de la posición puede ser reducida o cerrada automáticamente
- Las pérdidas y ganancias realizadas de la parte reducida se liquidarán
- La posición restante que no haya sido reducida puede mantenerse (si procede)
- El usuario puede consultar los resultados correspondientes en el historial de operaciones o en las notificaciones de la plataforma
