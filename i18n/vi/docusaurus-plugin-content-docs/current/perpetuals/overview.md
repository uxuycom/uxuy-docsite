---
id: overview
title: Tổng quan hợp đồng vĩnh cửu
sidebar_label: Tổng quan
sidebar_position: 1
description: Cơ chế cơ bản của hợp đồng vĩnh cửu UXUY, những điều cần biết trước khi giao dịch, cách định giá lệnh và định nghĩa các dữ liệu cốt lõi.
keywords: [hợp đồng vĩnh cửu, đòn bẩy, thanh lý bắt buộc, phí funding, giá đánh dấu, ký quỹ duy trì]
---

# Tổng quan hợp đồng vĩnh cửu

Hợp đồng vĩnh cửu cho phép người dùng mở vị thế mua (Long) hoặc vị thế bán (Short) trên các thị trường được hỗ trợ mà không có ngày đáo hạn cố định.

- Khi giá thị trường tăng, vị thế mua có thể có lợi nhuận.
- Khi giá thị trường giảm, vị thế bán có thể có lợi nhuận.
- Đòn bẩy có thể phóng đại mức phơi nhiễm thị trường với cùng một khoản ký quỹ, đồng thời cũng phóng đại rủi ro tương ứng.
- Khi vị thế không đáp ứng được yêu cầu ký quỹ duy trì, có thể bị đóng vị thế bắt buộc.
- Cơ chế phí funding được dùng để giữ giá hợp đồng vĩnh cửu sát với giá thị trường của tài sản cơ sở.

## Những điều cần biết trước khi giao dịch

Trước khi đặt lệnh, vui lòng xác nhận các thông tin sau:

- Loại hợp đồng và hướng vị thế
- Loại lệnh và giá đặt lệnh
- Số lượng vị thế
- Mức đòn bẩy
- Ký quỹ và phí mở vị thế dự kiến
- Giá thanh lý dự kiến
- Phí funding và việc thanh toán

## Cách định giá lệnh

Khi ước tính ký quỹ:

- Giá tính toán của **lệnh giới hạn**: giá đặt lệnh giới hạn do người dùng nhập.
- Giá tính toán của **lệnh thị trường**: giá đánh dấu tại thời điểm gửi lệnh.

Ký quỹ và phí thực tế sẽ được tính theo số lượng khớp thực tế, giá khớp thực tế, mức đòn bẩy và mức phí Maker hoặc Taker được áp dụng.

## Định nghĩa dữ liệu cốt lõi

| Thuật ngữ | Diễn giải |
| --- | --- |
| Giá đánh dấu (Mark Price) | Giá tham chiếu dùng để tính lãi lỗ chưa thực hiện, theo dõi trạng thái ký quỹ và thực hiện các phép tính liên quan đến thanh lý bắt buộc. |
| Giá mở vị thế trung bình (Entry Price) | Giá trung bình có trọng số theo khối lượng của các lần khớp lệnh trong vị thế hiện tại. |
| Giá trị danh nghĩa vị thế (Position Notional) | Giá trị danh nghĩa có được bằng cách nhân số lượng vị thế với giá tham chiếu tương ứng. |
| Ký quỹ ban đầu (Initial Margin) | Khoản ký quỹ cần thiết để mở và duy trì mức phơi nhiễm ban đầu của vị thế. |
| Ký quỹ duy trì (Maintenance Margin) | Khoản ký quỹ tối thiểu cần thiết để vị thế không bị đóng bắt buộc. |
| Vốn chủ sở hữu tài khoản (Account Equity) | Tổng của số dư ví và toàn bộ lãi lỗ chưa thực hiện. |
| Phí funding (Funding Rate) | Mức phí được sử dụng khi trao đổi tiền giữa vị thế mua và vị thế bán theo chu kỳ cố định. |
| Bậc rủi ro (Risk Tier) | Cấp độ rủi ro được phân chia theo giá trị danh nghĩa vị thế, dùng để xác định đòn bẩy khả dụng tối đa, tỷ lệ ký quỹ duy trì và các tham số rủi ro khác. |
| Quỹ bảo hiểm (Insurance Fund) | Cơ chế bảo đảm rủi ro dùng để gánh một phần tổn thất âm vốn phát sinh từ thanh lý bắt buộc trong điều kiện thị trường cực đoan, và giảm xác suất kích hoạt tự động giảm đòn bẩy (ADL). |
| Tự động giảm đòn bẩy (ADL) | Cơ chế kiểm soát rủi ro ở cấp cuối cùng, theo đó khi tổn thất thanh lý không được quỹ bảo hiểm bù đắp đầy đủ, nền tảng có thể tự động giảm một phần các vị thế đang có lãi theo thứ tự rủi ro. |
