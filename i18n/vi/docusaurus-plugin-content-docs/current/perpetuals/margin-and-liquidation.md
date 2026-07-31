---
id: margin-and-liquidation
title: Cơ chế ký quỹ, lãi lỗ và thanh lý bắt buộc
sidebar_label: Ký quỹ và thanh lý
sidebar_position: 2
description: Cách tính ký quỹ, lãi lỗ chưa thực hiện, công thức giá thanh lý và quy trình thanh lý bắt buộc ở chế độ ký quỹ cô lập của hợp đồng vĩnh cửu UXUY.
keywords: [ký quỹ, lãi lỗ chưa thực hiện, giá thanh lý, ký quỹ cô lập, tỷ lệ ký quỹ duy trì]
---

# Cơ chế ký quỹ, lãi lỗ và thanh lý bắt buộc

:::info
Nếu nội dung tài liệu có khác biệt so với những gì hiển thị trên giao diện giao dịch UXUY, dữ liệu và quy tắc theo thời gian thực trên giao diện sản phẩm sẽ được ưu tiên áp dụng. Phép tính thực tế còn có thể bao gồm các tham số như quy tắc độ chính xác và làm tròn riêng của sản phẩm, khoản phí dự trữ, phí funding và bậc rủi ro.
:::

## Ký quỹ và chi phí mở vị thế

### Ký quỹ mở vị thế dự kiến

```
Ký quỹ mở vị thế dự kiến = Số lượng đặt lệnh × Giá tính toán ÷ Mức đòn bẩy
```

- Giá tính toán của lệnh giới hạn là giá đặt lệnh giới hạn do người dùng nhập.
- Giá tính toán của lệnh thị trường là giá đánh dấu tại thời điểm gửi lệnh.

### Ký quỹ mở vị thế thực tế

```
Ký quỹ mở vị thế thực tế = Σ（Số lượng khớp mỗi lần × Giá khớp mỗi lần ÷ Mức đòn bẩy）
```

### Chi phí mở vị thế dự kiến

```
Chi phí mở vị thế dự kiến = Ký quỹ mở vị thế dự kiến + Phí mở vị thế dự kiến
```

### Chi phí mở vị thế thực tế

```
Chi phí mở vị thế thực tế = Ký quỹ mở vị thế thực tế + Phí mở vị thế thực tế
```

### Phí mở vị thế thực tế

```
Phí mở vị thế thực tế = Σ（Số lượng khớp mỗi lần × Giá khớp mỗi lần × Mức phí Maker/Taker áp dụng）
```

## Cách tính lãi lỗ

### Lãi lỗ chưa thực hiện

```
Vị thế mua: Lãi lỗ chưa thực hiện =（Giá đánh dấu − Giá mở vị thế trung bình）× Số lượng vị thế
Vị thế bán: Lãi lỗ chưa thực hiện =（Giá mở vị thế trung bình − Giá đánh dấu）× Số lượng vị thế
```

## Khối lượng có thể mở và vốn bị chiếm dụng

### Số lượng mở vị thế tối đa

```
Lệnh giới hạn: Số lượng mở vị thế tối đa = Số dư khả dụng ÷ [Giá giới hạn ×（1 ÷ Mức đòn bẩy + Tỷ lệ phí dự trữ）]
Lệnh thị trường: Số lượng mở vị thế tối đa = Số dư khả dụng ÷ [Giá đánh dấu hiện tại ×（1 ÷ Mức đòn bẩy + Tỷ lệ phí dự trữ）]
```

### Vốn cần thiết dự kiến cho mỗi đơn vị

```
Vốn cần thiết dự kiến cho mỗi đơn vị = Giá tính toán ÷ Mức đòn bẩy + Giá tính toán × Tỷ lệ phí dự trữ
```

## Chỉ số vị thế và ký quỹ

### Giá trị danh nghĩa vị thế

```
Giá trị danh nghĩa vị thế = Số lượng vị thế × Giá mở vị thế trung bình
```

### Ký quỹ duy trì

```
Ký quỹ duy trì = Giá trị danh nghĩa vị thế × Tỷ lệ ký quỹ duy trì tương ứng với bậc rủi ro hiện tại
```

### Ký quỹ ban đầu của vị thế

```
Ký quỹ ban đầu của vị thế = Giá trị danh nghĩa vị thế ÷ Mức đòn bẩy
```

## Chỉ số tài khoản

### Số dư ví

```
Số dư ví = Số dư khả dụng + Số dư bị đóng băng
```

### Vốn chủ sở hữu tài khoản

```
Vốn chủ sở hữu tài khoản = Số dư ví + Toàn bộ lãi lỗ chưa thực hiện
```

## Các phép tính liên quan đến thanh lý bắt buộc

### Phí thanh lý bắt buộc

```
Phí thanh lý bắt buộc = Số lượng thanh lý × Giá đánh dấu khi thanh lý × Tỷ lệ phí thanh lý
```

### Lãi lỗ thanh lý theo lý thuyết

```
Vị thế mua: Lãi lỗ thanh lý theo lý thuyết =（Giá đánh dấu khi thanh lý − Giá mở vị thế trung bình）× Số lượng thanh lý
Vị thế bán: Lãi lỗ thanh lý theo lý thuyết =（Giá mở vị thế trung bình − Giá đánh dấu khi thanh lý）× Số lượng thanh lý
```

### Giá thanh lý tham chiếu

```
Vị thế mua: Giá thanh lý tham chiếu = Giá mở vị thế trung bình ×（1 − 1 ÷ Mức đòn bẩy + Tỷ lệ ký quỹ duy trì）
Vị thế bán: Giá thanh lý tham chiếu = Giá mở vị thế trung bình ×（1 + 1 ÷ Mức đòn bẩy − Tỷ lệ ký quỹ duy trì）
```

:::note
Giá thanh lý thực tế được hiển thị có thể khác với công thức tham chiếu đơn giản hóa ở trên do phí giao dịch, phí funding, thay đổi vị thế, điều chỉnh bậc rủi ro, quy tắc làm tròn và các yếu tố tài khoản khác.
:::

## Quy trình thanh lý bắt buộc ở chế độ ký quỹ cô lập

Ở chế độ ký quỹ cô lập, mỗi vị thế sử dụng ký quỹ độc lập. Khi rủi ro của một vị thế liên tục tăng và ký quỹ không đủ, chỉ vị thế ký quỹ cô lập đó có thể bị thanh lý bắt buộc, thông thường không ảnh hưởng trực tiếp đến các vị thế ký quỹ cô lập khác.

Điều kiện kích hoạt cụ thể, phương thức thực thi và kết quả thanh toán được xác định theo các tham số rủi ro theo thời gian thực hiển thị trên trang giao dịch UXUY và kết quả khớp lệnh thực tế.

| Bước | Diễn giải quy trình |
| --- | --- |
| 1. Rủi ro liên tục tăng | Giá thị trường biến động theo hướng bất lợi, lỗ chưa thực hiện của vị thế tiếp tục mở rộng. |
| 2. Ký quỹ không đủ | Khi ký quỹ của vị thế không đủ đáp ứng yêu cầu ký quỹ duy trì hiện tại, hệ thống bước vào quy trình xử lý rủi ro. |
| 3. Kích hoạt thanh lý bắt buộc | Hệ thống thực hiện thanh lý bắt buộc đối với vị thế ký quỹ cô lập đó theo các quy tắc kiểm soát rủi ro áp dụng. |
| 4. Vị thế được khớp | Lệnh đóng vị thế sẽ được gửi ra thị trường để thực thi, giá khớp cuối cùng phụ thuộc vào thanh khoản thị trường và tình hình khớp lệnh thực tế tại thời điểm đó. |
| 5. Thanh toán lãi lỗ | Sau khi vị thế được đóng, hệ thống tính lãi lỗ cuối cùng, trừ các khoản phí áp dụng và cập nhật tài sản tài khoản. |
