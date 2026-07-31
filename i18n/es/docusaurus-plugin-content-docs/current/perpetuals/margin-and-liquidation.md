---
id: margin-and-liquidation
title: Margen, pérdidas y ganancias y mecanismo de liquidación forzosa
sidebar_label: Margen y liquidación forzosa
sidebar_position: 2
description: Cálculo del margen en los contratos perpetuos de UXUY, pérdidas y ganancias no realizadas, fórmulas del precio de liquidación y proceso de liquidación forzosa en modo aislado.
keywords: [margen, pérdidas y ganancias no realizadas, precio de liquidación, margen aislado, tasa de margen de mantenimiento]
---

# Margen, pérdidas y ganancias y mecanismo de liquidación forzosa

:::info
Si el contenido de esta documentación difiere de lo mostrado en la interfaz de trading de UXUY, prevalecerán los datos y las reglas en tiempo real de la interfaz del producto. El cálculo real también puede incorporar parámetros específicos del producto, como reglas de precisión y redondeo, reserva de comisiones, costes de financiación y niveles de riesgo.
:::

## Margen y coste de apertura

### Margen de apertura estimado

```
Margen de apertura estimado = Cantidad de la orden × Precio de cálculo ÷ Múltiplo de apalancamiento
```

- El precio de cálculo de las órdenes limitadas es el precio límite introducido por el usuario.
- El precio de cálculo de las órdenes de mercado es el precio de marca en el momento de enviar la orden.

### Margen de apertura real

```
Margen de apertura real = Σ (Cantidad de cada ejecución × Precio de cada ejecución ÷ Múltiplo de apalancamiento)
```

### Coste de apertura estimado

```
Coste de apertura estimado = Margen de apertura estimado + Comisión de apertura estimada
```

### Coste de apertura real

```
Coste de apertura real = Margen de apertura real + Comisión de apertura real
```

### Comisión de apertura real

```
Comisión de apertura real = Σ (Cantidad de cada ejecución × Precio de cada ejecución × Tasa de comisión Maker/Taker aplicable)
```

## Cálculo de pérdidas y ganancias

### Pérdidas y ganancias no realizadas

```
Posición larga: Pérdidas y ganancias no realizadas = (Precio de marca − Precio medio de apertura) × Tamaño de la posición
Posición corta: Pérdidas y ganancias no realizadas = (Precio medio de apertura − Precio de marca) × Tamaño de la posición
```

## Capacidad de apertura y fondos comprometidos

### Cantidad máxima que puede abrirse

```
Orden limitada: Cantidad máxima que puede abrirse = Saldo disponible ÷ [Precio límite × (1 ÷ Múltiplo de apalancamiento + Tasa de comisión reservada)]
Orden de mercado: Cantidad máxima que puede abrirse = Saldo disponible ÷ [Precio de marca actual × (1 ÷ Múltiplo de apalancamiento + Tasa de comisión reservada)]
```

### Fondos estimados necesarios por unidad

```
Fondos estimados necesarios por unidad = Precio de cálculo ÷ Múltiplo de apalancamiento + Precio de cálculo × Tasa de comisión reservada
```

## Indicadores de posición y de margen

### Valor nocional de la posición

```
Valor nocional de la posición = Tamaño de la posición × Precio medio de apertura
```

### Margen de mantenimiento

```
Margen de mantenimiento = Valor nocional de la posición × Tasa de margen de mantenimiento del nivel de riesgo actual
```

### Margen inicial de la posición

```
Margen inicial de la posición = Valor nocional de la posición ÷ Múltiplo de apalancamiento
```

## Indicadores de la cuenta

### Saldo del monedero

```
Saldo del monedero = Saldo disponible + Saldo congelado
```

### Patrimonio de la cuenta

```
Patrimonio de la cuenta = Saldo del monedero + Todas las pérdidas y ganancias no realizadas
```

## Cálculos relacionados con la liquidación forzosa

### Comisión de liquidación forzosa

```
Comisión de liquidación forzosa = Cantidad liquidada × Precio de marca en el momento de la liquidación × Tasa de comisión de liquidación forzosa
```

### Pérdidas y ganancias teóricas de la liquidación forzosa

```
Posición larga: Pérdidas y ganancias teóricas de la liquidación forzosa = (Precio de marca en el momento de la liquidación − Precio medio de apertura) × Cantidad liquidada
Posición corta: Pérdidas y ganancias teóricas de la liquidación forzosa = (Precio medio de apertura − Precio de marca en el momento de la liquidación) × Cantidad liquidada
```

### Precio de liquidación de referencia

```
Posición larga: Precio de liquidación de referencia = Precio medio de apertura × (1 − 1 ÷ Múltiplo de apalancamiento + Tasa de margen de mantenimiento)
Posición corta: Precio de liquidación de referencia = Precio medio de apertura × (1 + 1 ÷ Múltiplo de apalancamiento − Tasa de margen de mantenimiento)
```

:::note
El precio de liquidación que se muestra realmente puede diferir de las fórmulas de referencia simplificadas anteriores debido a comisiones, costes de financiación, cambios en la posición, ajustes del nivel de riesgo, reglas de redondeo y otros factores de la cuenta.
:::

## Proceso de liquidación forzosa en modo de margen aislado

En el modo de margen aislado, cada posición utiliza un margen independiente. Cuando el riesgo de una posición aumenta de forma sostenida y el margen resulta insuficiente, solo esa posición aislada puede ser objeto de liquidación forzosa, sin que ello suela afectar directamente a las demás posiciones aisladas.

Las condiciones concretas de activación, la forma de ejecución y el resultado de la liquidación se rigen por los parámetros de riesgo en tiempo real mostrados en la página de trading de UXUY y por los resultados de ejecución reales.

| Paso | Descripción del proceso |
| --- | --- |
| 1. Aumento sostenido del riesgo | El precio de mercado se mueve en contra de la posición y las pérdidas no realizadas se amplían de forma sostenida. |
| 2. Margen insuficiente | Cuando el margen de la posición deja de ser suficiente para cubrir el requisito de margen de mantenimiento vigente, el sistema inicia el proceso de gestión de riesgo. |
| 3. Activación de la liquidación forzosa | Conforme a las reglas de control de riesgo aplicables, el sistema ejecuta la liquidación forzosa de esa posición aislada. |
| 4. Ejecución de la posición | La orden de cierre se envía al mercado para su ejecución; el precio final de ejecución depende de la liquidez del mercado en ese momento y de las condiciones reales de ejecución. |
| 5. Liquidación de pérdidas y ganancias | Una vez cerrada la posición, el sistema calcula el resultado final, deduce las comisiones aplicables y actualiza los activos de la cuenta. |
