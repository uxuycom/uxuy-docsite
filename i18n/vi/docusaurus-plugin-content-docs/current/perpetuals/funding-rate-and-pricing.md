---
id: funding-rate-and-pricing
title: Phí funding và cơ chế định giá
sidebar_label: Phí funding và định giá
sidebar_position: 5
description: Định nghĩa, mục đích sử dụng và cách tính giá đánh dấu, giá chỉ số và phí funding của UXUY.
keywords: [giá đánh dấu, giá chỉ số, phí funding, Mark Price, Index Price, Funding Rate]
---

# Phí funding và cơ chế định giá

## Giá đánh dấu

### Giá đánh dấu là gì

Giá đánh dấu là giá tham chiếu quan trọng mà nền tảng sử dụng để tính lãi lỗ chưa thực hiện, theo dõi rủi ro vị thế và xác định có kích hoạt thanh lý bắt buộc hay không. Giá đánh dấu không đồng nhất với giá khớp lệnh mới nhất.

### Vì sao sử dụng giá đánh dấu

Thị trường có thể xuất hiện biến động mạnh do các giao dịch bất thường hoặc thay đổi thanh khoản trong thời gian ngắn. Nếu trực tiếp dùng giá khớp lệnh mới nhất để tính rủi ro, có thể gây ra việc kích hoạt thanh lý không cần thiết. Vì vậy, nền tảng sử dụng giá đánh dấu tương đối ổn định làm cơ sở quản lý rủi ro.

### Các mục đích sử dụng chính của giá đánh dấu

- Tính lãi lỗ chưa thực hiện
- Xác định có đáp ứng điều kiện thanh lý bắt buộc hay không
- Theo dõi rủi ro của vị thế và tài khoản
- Tính một số chỉ số rủi ro

### Giá đánh dấu có ảnh hưởng đến việc khớp lệnh không

Không. Lệnh vẫn được khớp theo giá có thể khớp thực tế trên thị trường; giá đánh dấu chủ yếu dùng để tính lãi lỗ và rủi ro, không trực tiếp tham gia vào việc khớp lệnh.

## Giá chỉ số

Giá chỉ số được tính dựa trên giá của các nền tảng giao dịch tham chiếu hợp lệ và trọng số được phân bổ cho chúng.

```
Giá chỉ số = Σ（Giá của nền tảng giao dịch hợp lệ × Trọng số gốc）÷ Tổng trọng số hợp lệ
```

Nếu một nguồn tham chiếu nào đó bị mất hiệu lực hoặc tạm thời không khả dụng, nền tảng có thể loại nguồn đó khỏi phép tính hợp lệ hiện tại theo phương pháp tính chỉ số.

## Phí funding

### Phí funding là gì

Phí funding là khoản phí mà vị thế mua và vị thế bán trong thị trường hợp đồng vĩnh cửu chi trả hoặc thu về theo chu kỳ quy định. Khoản phí funding được chuyển giữa hai bên giao dịch theo hướng của mức phí, thông thường không tạo thành doanh thu phí giao dịch của nền tảng.

### Vì sao cần phí funding

Hợp đồng vĩnh cửu không có ngày đáo hạn cố định. Cơ chế phí funding thông qua các khoản chi trả định kỳ giữa bên mua và bên bán giúp giá hợp đồng vĩnh cửu duy trì mức tương đối nhất quán với giá thị trường giao ngay của tài sản cơ sở.

### Công thức phí funding

```
Phí funding（F）= Chỉ số phần bù trung bình（P）+ clamp（Lãi suất cơ bản − Chỉ số phần bù trung bình（P），−0.0005，0.0005）
```

- Khi F &gt; 0, vị thế mua chi trả phí funding cho vị thế bán.
- Khi F &lt; 0, vị thế bán chi trả phí funding cho vị thế mua.

### Phí funding được thanh toán khi nào

Nền tảng sẽ thực hiện thanh toán vào các thời điểm thanh toán phí funding đã quy định. Chỉ những người dùng vẫn còn giữ vị thế liên quan tại thời điểm thanh toán mới tham gia chi trả hoặc thu về phí funding của kỳ đó; các vị thế đã đóng hoàn toàn trước thời điểm thanh toán không tham gia lần thanh toán này.

:::note
Mức phí của các loại tiền khác nhau được điều chỉnh động theo tình hình thị trường, nội dung cụ thể được xác định theo những gì hiển thị trên trang chi tiết tài sản.
:::
