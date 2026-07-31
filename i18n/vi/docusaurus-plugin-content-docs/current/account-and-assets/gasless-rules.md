---
id: gasless-rules
title: Quy tắc GasLess
sidebar_label: Quy tắc GasLess
sidebar_position: 3
description: Điều kiện áp dụng, hạn mức mỗi ngày, ngưỡng số tiền và quy tắc theo từng tình huống của GasLess, khi nền tảng ứng trước phí Gas mạng.
keywords: [GasLess, trả Gas thay, miễn Gas, hạn mức, gasPrice]
---

# Quy tắc GasLess

GasLess cho phép các giao dịch đủ điều kiện được nền tảng ứng trước phí Gas mạng. Việc có đủ điều kiện hay không phụ thuộc vào loại giao dịch, mạng liên quan, số tiền giao dịch và hạn mức mỗi ngày.

:::warning
Giao dịch cổ phiếu Mỹ và cổ phiếu Hồng Kông không áp dụng GasLess.
:::

## Quy tắc chung

- Khi một giao dịch liên quan đến nhiều mạng, việc có đủ điều kiện GasLess hay không được xác định theo mạng có yêu cầu nghiêm ngặt nhất trong số đó.
- Nếu có bất kỳ mạng nào trong số các mạng liên quan không hỗ trợ GasLess, thì lệnh đó không áp dụng GasLess.
- **TRON không hỗ trợ GasLess.**
- Đối với các thao tác trừ tiền từ địa chỉ người dùng, ưu tiên sử dụng token gốc của chính người dùng để trả Gas; chỉ khi số dư không đủ mới xác định có đủ điều kiện GasLess hay không.

## Hạn mức và ngưỡng số tiền theo từng tình huống

| Tình huống | Hạn mức mỗi ngày | Ngưỡng số tiền |
| --- | --- | --- |
| Giao dịch spot | Tối đa 20 lệnh/ngày | BNB Chain / Base / Solana / X Layer / Polygon / Arbitrum: ≥ 10 USDT; Ethereum: ≥ 50 USDT và gasPrice hiện tại &lt; 10 Gwei |
| Chuyển tiền / Bao đỏ SwitchU | Tối đa 5 lệnh/ngày | Như trên; đồng thời token phải hỗ trợ GasLess (ví dụ Cash), không phải mọi token đều có thể chuyển tiền GasLess |
| Giao dịch DApp | Tối đa 5 lệnh/ngày | Mạng phải hỗ trợ GasLess; Ethereum cần gasPrice hiện tại &lt; 10 Gwei |

## Chuyển nội bộ

| Hướng | Phí |
| --- | --- |
| Spot → Vĩnh cửu | Toàn bộ GasLess |
| Vĩnh cửu → Spot | Thu 0.1 USDT |

## Xử lý đặc biệt về việc trả Gas

- **Mạng EVM**: Ưu tiên sử dụng token gốc của người dùng để trả Gas; nếu số dư không đủ và giao dịch đáp ứng điều kiện GasLess, nền tảng sẽ ứng trước; nếu không, hệ thống sẽ nhắc người dùng dự trữ token gốc hoặc stablecoin.
- **Solana**: Người dùng tự chi trả phí mạng.

## Ví dụ: Hoán đổi xuyên chuỗi

Người dùng nắm giữ BSC-BNB (0.1), BSC-USDT (10), Base-USDC (2), và hoán đổi toàn bộ tổng cộng 12 USDT sang Polygon-USDC, trong khi hạn mức GasLess trong ngày vẫn chưa dùng hết. Giao dịch này gồm ba bước:

1. **Chuyển BSC-USDT vào cầu nối xuyên chuỗi**: Người dùng dùng token gốc của mình để trả Gas.
2. **Chuyển Base-USDC vào cầu nối xuyên chuỗi**: Người dùng không có token gốc để trả Gas, kích hoạt việc xác định GasLess; vì số tiền xuyên chuỗi là 12 USDT và các tài sản đều là Cash, toàn bộ lệnh đủ điều kiện, nền tảng sẽ ứng trước Gas.
3. **Chuyển Polygon-USDC từ cầu nối xuyên chuỗi đến địa chỉ nhận**: Nền tảng ứng trước Gas.
