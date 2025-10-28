---
sidebar_position: 3
sidebar_label: "Copy Trading Guide (CN)"
---

# 跟单交易指引

## 如何开始跟单交易?

在开始之前，请确保您的账户中至少有 **100 USDT** 作为启动资金。

如果余额不足，可以点击👉 **链上充值** 或 **法币入金**，建议充值到 **BNB**、**BASE** 或 **SOLANA** 链。

:::tip
单笔大于 **10 USDT** 的划转，我们将为您**免 GAS 费用**。
:::

## 什么是跟单交易？
跟单交易就是 **自动复制专业交易员的操作**：

- 他们开仓 → 您的钱包也开仓
- 他们平仓或调整仓位 → 您的钱包同步执行

👉 简单来说，这是 **"专业操盘 + 资金自主管理"** 的模式，非常适合新手或没有太多时间的投资者。

## 跟单原理与账户体系

为确保资金安全与透明，系统机制如下：
- 跟单交易采用**独立账户体系**，与合约账户分离
- 每次确认跟单时，系统会为您自动创建一个 **跟单账户**
- 跟单交易均通过 **Hyperliquid 协议** 执行
- 系统会为您生成一个 **代理钱包（Proxy Wallet）**，用于执行交易

:::warning 重要安全功能
**⚠️ 代理钱包没有提款权限**，资金安全完全可控。
:::
- 停止跟单后，保证金将自动返还至合约钱包。

## 什么是按比例跟单？

UXUY 跟单支持**按比例分配**，即系统会根据带单员的仓位比例自动为您复制开仓。

**公式：**
```
跟单比例 = 带单员开仓保证金 ÷ 带单员总保证金 × 100%
```

**例：**
- 带单员余额 1,000 USDT，用 500 USDT 开 BTC 单 → 比例 = 50%
- 您跟单金额为 500 USDT → 系统为您用 250 USDT 开同单

## 支持的交易对

目前支持约 **100+ 合约交易对**，与 UXUY 合约交易对完全一致。

## 如何开始跟单

### 步骤 1：下载并注册 UXUY

- 已有 UXUY → 进入 **合约跟单页面**
- 没有 UXUY → 下载 UXUY（支持安卓、TestFlight、iOS）

### 步骤 2：选择交易员

- 每个账户可同时跟单**多个交易员**
- 盈亏数据实时更新，方便比较选择

<img src="/img/copy-trading/cn/copy-trading-app.png" alt="UXUY App Download" width="300px" />

### 步骤 3：开始跟单

- 点击交易员旁的 **"跟单"**
- 输入 **保证金金额**，**止损比例**
- 一键确认后，系统自动同步交易

<img src="/img/copy-trading/cn/copy-trading-interface.png" alt="Copy Trade Interface" width="300px" />

### 步骤 4：查看持仓与记录

在 **[我的跟单]** 页面，您可以：
- 查看历史跟单记录
- 调整止损或主动平仓
- 调整止损率

<img src="/img/copy-trading/cn/positions-and-history.png" alt="My Copy Trades Dashboard" width="300px" />
<img src="/img/copy-trading/cn/positions-and-history-2.png" alt="My Copy Trades Dashboard" width="300px" />

进入 **[我的跟单]** 页面后，用户可查看 **[当前持仓]** 的实时盈亏情况及交易记录，并可在此调整止盈止损价格或执行平仓操作。

<!-- <img src="/img/copy-trading/cn/stop-copy-4-1.png" alt="Stop Copy Trading" width="300px" /> -->
<img src="/img/copy-trading/cn/stop-copy-4-1.png" alt="Stop Copy Trading" width="300px" />
<img src="/img/copy-trading/cn/stop-copy-4-2.png" alt="Stop Copy Trading" width="300px" style={{marginLeft: "5px",marginRight: "5px"}}/>
<img src="/img/copy-trading/cn/stop-copy-4-3.png" alt="Stop Copy Trading" width="300px"/>

### 步骤 5：停止跟单

- 触发您设置的止损价格时，系统将自动停止跟单
- 您也可主动停止，系统会自动平仓并返还剩余保证金

<img src="/img/copy-trading/cn/stop-copy-5-1.png" alt="Stop Copy Trading" width="300px" />

## 我要成为带单员

如果您具备良好的交易能力，可申请成为 **带单员（Leader Trader）**，通过分润获取收益。

### 步骤 1：进入带单申请入口

- 打开 APP → 点击 **"交易"**，找到**"我要带单"**
- 在轮播区域找到 **"Want to be a Leader Trader"** → 点击 **Apply Now**

<img src="/img/copy-trading/cn/application-page.png" alt="Leader Application Form" width="300px" />
<img src="/img/copy-trading/cn/application-page-2.png" alt="Leader Application Form" width="300px" style={{marginLeft: "5px",marginRight: "5px"}}/>

### 步骤 2：填写带单信息

- 用户名与头像
- 设置可跟单金额范围（最小值与最大值）
- 撰写个人介绍，吸引更多用户跟单

<img src="/img/copy-trading/cn/leader-application.png" alt="Leader Application Form" width="300px" />

### 步骤 3：提交申请并开始带单

- 点击 **Apply Now** 完成申请
- 一旦有人跟单，您的所有合约操作将被自动复制
- 系统会自动计算利润并将分润发放至您的账户

<img src="/img/copy-trading/cn/leader-dashboard.png" alt="Leader Dashboard" width="300px" />

### 步骤 4：查看带单数据

在跟单页面的 **Smart Trader** 区域展示，可查看：
- 带单收益
- 跟单者数量与表现

<img src="/img/copy-trading/cn/view-leader-data.png" alt="Leader Performance Data" width="300px" />
