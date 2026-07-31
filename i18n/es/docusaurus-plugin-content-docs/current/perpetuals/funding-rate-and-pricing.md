---
id: funding-rate-and-pricing
title: Tasa de financiación y mecanismo de precios
sidebar_label: Tasa de financiación y precios
sidebar_position: 5
description: Definición, finalidad y método de cálculo del precio de marca, el precio índice y la tasa de financiación en UXUY.
keywords: [precio de marca, precio índice, tasa de financiación, Mark Price, Index Price, Funding Rate]
---

# Tasa de financiación y mecanismo de precios

## Precio de marca

### Qué es el precio de marca

El precio de marca es el precio de referencia que utiliza la plataforma para calcular las pérdidas y ganancias no realizadas, supervisar el riesgo de las posiciones y determinar si se activa la liquidación forzosa. El precio de marca no equivale al último precio negociado.

### Por qué se utiliza el precio de marca

El mercado puede experimentar fluctuaciones bruscas debido a ejecuciones anómalas o a cambios de liquidez en periodos muy breves. Si se utilizara directamente el último precio negociado para los cálculos de riesgo, podrían producirse liquidaciones forzosas innecesarias. Por ello, la plataforma adopta el precio de marca, relativamente más estable, como base para la gestión del riesgo.

### Principales usos del precio de marca

- Calcular las pérdidas y ganancias no realizadas
- Determinar si se cumplen las condiciones de liquidación forzosa
- Supervisar el riesgo de las posiciones y de la cuenta
- Calcular determinados indicadores de riesgo

### ¿Afecta el precio de marca a la ejecución?

No. Las órdenes se siguen emparejando al precio realmente disponible en el mercado; el precio de marca se utiliza principalmente para los cálculos de pérdidas y ganancias y de riesgo, y no participa directamente en el emparejamiento de órdenes.

## Precio índice

El precio índice se calcula a partir de los precios de las plataformas de trading de referencia válidas y de las ponderaciones asignadas a cada una.

```
Precio índice = Σ (Precio de la plataforma de trading válida × Ponderación original) ÷ Suma de las ponderaciones válidas
```

Si una fuente de referencia deja de ser válida o no está disponible temporalmente, la plataforma puede excluirla del cálculo válido vigente conforme al método de cálculo del índice.

## Tasa de financiación

### Qué es la tasa de financiación

La tasa de financiación es un coste que, en el mercado de contratos perpetuos, se paga o se recibe entre las posiciones largas y cortas según ciclos establecidos. Los costes de financiación se transfieren entre las partes de la operación según la dirección de la tasa y, por lo general, no constituyen ingresos por comisiones de trading para la plataforma.

### Por qué es necesaria la tasa de financiación

Los contratos perpetuos no tienen fecha de vencimiento fija. Mediante pagos periódicos entre posiciones largas y cortas, el mecanismo de tasa de financiación favorece que el precio del contrato perpetuo se mantenga relativamente alineado con el precio del mercado spot subyacente.

### Fórmula de la tasa de financiación

```
Tasa de financiación (F) = Índice de prima medio (P) + clamp (Tasa de interés base − Índice de prima medio (P), −0.0005, 0.0005)
```

- Cuando F &gt; 0, las posiciones largas pagan el coste de financiación a las posiciones cortas.
- Cuando F &lt; 0, las posiciones cortas pagan el coste de financiación a las posiciones largas.

### Cuándo se liquidan los costes de financiación

La plataforma realizará la liquidación en los horarios establecidos de liquidación de los costes de financiación. Solo los usuarios que mantengan la posición correspondiente en el momento de la liquidación participarán en el pago o el cobro del coste de financiación de ese periodo; las posiciones cerradas por completo antes de la liquidación no participan en dicha liquidación.

:::note
Las tasas de los distintos activos se ajustan dinámicamente según las condiciones del mercado; el contenido concreto se rige por lo mostrado en la página de detalles del activo.
:::
