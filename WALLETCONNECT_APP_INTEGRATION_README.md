# UXUY App WalletConnect 对外接入文档素材

> 本文档用于收集 UXUY App 的真实接入能力，最终产出给 DApp 和第三方开发者使用的对外 WalletConnect 接入文档。
> 
> 请根据当前 iOS、Android 和 App 内置浏览器的真实代码填写，不要直接复制 DApp 文档中的假设。所有标记为“待 App 确认”的内容，在发布前必须替换成实际值；如果不支持，请明确写“暂不支持”。

## 文档目标

请 App 开发团队根据本文档提供信息，输出一份可以直接放入 UXUY 开发者文档的公开版接入说明。公开版文档的读者是 DApp、钱包 SDK 和第三方集成开发者，不是 App 内部开发人员。

最终对外文档必须做到：

- 只描述当前生产版本已经支持的能力，不描述未实现或未经验证的能力。
- 给出可直接使用的协议版本、SDK 版本、Deep Link 格式、Provider API、方法、事件和错误码。
- 明确区分 PC WalletConnect、外部移动端 H5、UXUY App 内置浏览器三种场景。
- 对 EVM 和 Solana 分别说明实际接入方式，不把两者混写成同一套 API。
- 对不支持的链、方法、事件或平台明确写出限制和替代方案。
- 不包含私有 RPC、Project ID、内部接口、密钥、调试地址或其他不应公开的信息。

App 开发提交信息后，由文档维护者整理成面向第三方的最终 Markdown 文档，并同步中英文版本。

## App 端源码核查快照（非生产承诺）

以下信息来自当前 App 源码静态核查，只能作为对外文档整理的素材，不能代替商店版本、生产配置或真机端到端验证：

| 项目 | 当前核查结果 | 发布前要求 |
| --- | --- | --- |
| App 源码版本 | `2.7.4+309` | 另填 iOS/Android 商店版本 |
| WalletConnect SDK | `reown_walletkit 1.4.0` | 确认实际打包版本 |
| Deep Link scheme | iOS、Android 均为 `uxuyapp` | 真机冷启动和后台唤起测试 |
| Solana WalletConnect | 源码包含 mainnet namespace 处理 | 发布版本和端到端测试待确认 |
| 内置 Solana Provider | Phantom-compatible Provider 已实现 | iOS/Android 真机测试 |

不要把 `2.7.4+309` 写成商店已发布版本，也不要把 `reown_walletkit 1.4.0` 写成 WalletConnect 协议版本。

## 1. 文档信息

| 项目 | 内容 |
| --- | --- |
| App 名称 | UXUY Wallet |
| iOS 版本 | 待 App 确认 |
| Android 版本 | 待 App 确认 |
| App WebView/浏览器版本 | 待 App 确认 |
| WalletConnect 协议版本 | 待 App 确认，必须明确 v2.x 具体版本 |
| WalletConnect SDK 名称和版本 | 待 App 确认 |
| 文档更新时间 | 待 App 填写 |
| 负责人 | 待 App 填写 |

## 2. 支持范围

请明确以下能力是否已经在生产版本支持：

| 能力 | iOS | Android | 备注 |
| --- | --- | --- | --- |
| WalletConnect v2 扫码连接 | 待确认 | 待确认 | 需要填写实际 SDK |
| WalletConnect session 恢复 | 待确认 | 待确认 | App 重启后是否保留 |
| WalletConnect session 更新 | 待确认 | 待确认 | 账户/链变化 |
| WalletConnect session 断开 | 待确认 | 待确认 | 用户主动断开 |
| 外部 H5 Deep Link | 待确认 | 待确认 | 需要填写真实 scheme |
| App 内 EVM Provider | 待确认 | 待确认 | `window.ethereum` |
| App 内 Solana Provider | 待确认 | 待确认 | Phantom-compatible |

## 3. WalletConnect 钱包侧接入

### 3.1 协议和 SDK

请填写实际实现，不要使用已经停止服务的 WalletConnect v1：

```text
协议：WalletConnect v2 / 其他：________________
SDK：________________________________________
SDK 版本：____________________________________
Relay/网络配置：_______________________________
初始化入口：__________________________________
```

不得继续使用以下旧实现：

```text
@walletconnect/client
https://bridge.walletconnect.org
```

### 3.2 支持的 namespace 和方法

请从 App 实际代码和请求白名单中填写：

#### EVM

Namespace：`eip155` / 其他：`________________`

支持的方法：

```text
eth_requestAccounts       [钱包侧 WC 白名单不包含]
eth_accounts              [钱包侧 WC 白名单不包含]
eth_chainId               [钱包侧 WC 白名单不包含]
eth_sendTransaction       [源码声明，发布/实测待确认]
personal_sign             [源码声明，发布/实测待确认]
eth_signTypedData         [源码声明，发布/实测待确认]
eth_signTypedData_v3      [源码声明，发布/实测待确认]
eth_signTypedData_v4      [源码声明，发布/实测待确认]
wallet_switchEthereumChain [源码声明，发布/实测待确认]
wallet_addEthereumChain   [仅检查 App 已知链，非任意 RPC 注册]
wallet_getCapabilities    [源码声明，发布/实测待确认]
```

支持的事件：

```text
accountsChanged           [支持 / 不支持]
chainChanged              [支持 / 不支持]
disconnect                [支持 / 不支持]
session_update            [支持 / 不支持]
```

#### Solana

当前源码已经包含 Solana WalletConnect mainnet namespace 的账户获取、消息签名、单笔/批量交易签名和签名广播处理，但正式发布版本和端到端测试仍待确认。请确认：

```text
WalletConnect Solana namespace： [源码已实现 / 发布待确认 / 实测待确认]
App 浏览器 Phantom Provider：     [源码已实现 / 发布待确认 / 实测待确认]
实际 Provider 名称：______________
```

如果最终只对外承诺 App 浏览器方式，请明确说明：

```text
Solana 不提供单独的 UXUY SDK，DApp 使用 Phantom-compatible Provider。
```

## 4. 支持的 EVM 网络

请以 App 当前发布版本的真实网络配置为准。当前链能力来自运行时 DApp 链元数据和地址能力过滤，不应直接把这七条链写成固定生产支持列表：

| Chain ID | 网络名称 | 是否支持 WalletConnect | 是否支持 App Provider | RPC/配置来源 |
| ---: | --- | --- | --- | --- |
| 1 | Ethereum | 待确认 | 待确认 | 待 App 填写 |
| 56 | BNB Chain | 待确认 | 待确认 | 待 App 填写 |
| 137 | Polygon | 待确认 | 待确认 | 待 App 填写 |
| 196 | X Layer | 待确认 | 待确认 | 运行时 DApp 链元数据 |
| 4663 | Robinhood Chain | 待确认 | 待确认 | 待 App 填写 |
| 8453 | Base | 待确认 | 待确认 | 待 App 填写 |
| 42161 | Arbitrum | 待确认 | 待确认 | 待 App 填写 |

如果某条链只支持余额展示、不支持签名或交易，请单独注明，不要只写“支持”。

## 5. Deep Link 和返回流程

### 5.1 真实 scheme

请填写 iOS 和 Android 的真实注册配置：

```text
iOS scheme：`uxuyapp`（源码已确认，真机待测）
Android scheme：`uxuyapp`（源码已确认，真机待测）
Universal Link：_________________________
App Link：_______________________________
```

当前 Web 端约定格式为：

```text
uxuyapp://wc?uri=${encodeURIComponent(uri)}
```

源码核查确认 iOS 和 Android 均注册 `uxuyapp`；如果 App 实际 scheme、参数名称或 URI 格式不同，必须在这里给出准确格式，并同步更新 DApp 文档。

### 5.2 App 收到 Deep Link 后的处理

请说明以下流程的实际行为。当前源码核查显示，外部 H5 Deep Link 会执行配对并打开连接确认页，不会自动打开外部 DApp WebView；只有原本从 UXUY WebView 发起的连接才有自动恢复 WebView 的逻辑：

1. App 是否能从冷启动接收 WalletConnect URI。
2. App 是否能从后台恢复到现有 WalletConnect session。
3. 对于外部 H5，App 是否不会自动打开对应 DApp 页面，而是要求用户手动返回。
4. 用户批准或拒绝后如何返回 DApp。
5. 用户取消后是否能重新发起连接。
6. URI 重复打开时如何处理。
7. App 被系统杀死后是否可以恢复未完成请求。
8. 用户未登录时是否会阻止外部链接处理。
9. 登录后是否保存并重放外部链接（当前核查未确认有自动重放）。

## 6. App 内置浏览器 Provider

### 6.1 EVM Provider

请确认 App 内置浏览器是否注入：

```js
window.ethereum
```

实际支持的方法：

```text
eth_requestAccounts       [支持 / 不支持]
eth_accounts              [支持 / 不支持]
eth_chainId               [支持 / 不支持]
eth_sendTransaction       [支持 / 不支持]
personal_sign             [支持 / 不支持]
eth_signTypedData_v4      [支持 / 不支持]
```

实际错误码：

```text
WalletConnect EVM/Solana 用户拒绝：________（当前源码为 5001，发布待确认）
EVM 注入 Provider 用户拒绝：_______________（按实际 Provider 填写）
Solana 注入 Provider 用户拒绝：_____________（当前源码为 4001，发布待确认）
Provider 断开：____________（通常为 4900）
链不支持：__________________
其他：______________________
```

### 6.2 Solana Provider

请确认 App 内置浏览器是否提供：

```js
window.phantom.solana
window.solana
```

实际支持的方法：

```text
connect()                    [支持 / 不支持]
connect({ onlyIfTrusted })   [支持 / 不支持]
disconnect()                 [支持 / 不支持]
signMessage()                [支持 / 不支持]
publicKey                    [支持 / 不支持]
isConnected                  [支持 / 不支持]
```

请说明返回的公钥格式、签名编码格式和拒绝错误格式。

## 7. DApp 展示信息和 UXUY Logo

DApp 需要将 UXUY 作为独立钱包展示时，统一使用：

```text
名称：UXUY Wallet
Logo：https://docs.uxuy.com/img/uxuy-wallet-icon.png
```

请 App 团队确认以下信息在 WalletConnect 审批页是否正确展示：

```text
App 显示名称：________________________
App 图标来源：________________________
DApp 名称是否可见： [是 / 否]
DApp 域名是否可见： [是 / 否]
请求链是否可见：    [是 / 否]
请求方法是否可见：  [是 / 否]
```

## 8. 安全要求

- 不向 DApp 或用户索要助记词、私钥、恢复码或 App 登录密码。
- 签名和交易确认页必须展示 DApp 来源、目标链、目标地址、金额和方法。
- 对域名、DApp metadata 和 WalletConnect session 做校验。
- 用户拒绝请求时返回标准错误，不要自动循环弹窗。
- 不要把已连接地址直接当作登录凭证，登录必须结合签名验证。
- 不要记录或上传私钥、助记词、完整签名请求中的敏感数据。

## 9. 测试记录

请填写测试设备、App 版本和结果：

| 场景 | iOS 结果 | Android 结果 | App 版本 | 备注 |
| --- | --- | --- | --- | --- |
| PC 扫码连接 | 待测试 | 待测试 | 待填写 | |
| 外部 H5 Deep Link | 待测试 | 待测试 | 待填写 | |
| 外部 H5 未登录后唤起 | 待测试 | 待测试 | 待填写 | 是否保存并重放 |
| 外部 H5 批准后手动返回 DApp | 待测试 | 待测试 | 待填写 | |
| App 内 EVM Provider | 待测试 | 待测试 | 待填写 | |
| App 内 Solana Provider | 待测试 | 待测试 | 待填写 | |
| Solana WalletConnect namespace | 待测试 | 待测试 | 待填写 | |
| 账户切换 | 待测试 | 待测试 | 待填写 | |
| 链切换 | 待测试 | 待测试 | 待填写 | |
| 签名 | 待测试 | 待测试 | 待填写 | |
| 转账 | 待测试 | 待测试 | 待填写 | |
| 用户拒绝 | 待测试 | 待测试 | 待填写 | |
| session 恢复 | 待测试 | 待测试 | 待填写 | |
| session 断开 | 待测试 | 待测试 | 待填写 | |
| App 冷启动 | 待测试 | 待测试 | 待填写 | |
| 页面刷新后恢复 | 待测试 | 待测试 | 待填写 | |

## 10. 已知限制和发布结论

请由 App 开发负责人最终填写：

```text
当前已支持：
- __________________________________________
- __________________________________________

当前不支持：
- __________________________________________
- __________________________________________

已知问题：
- __________________________________________
- __________________________________________

是否可以对外发布 WalletConnect 接入说明： [可以 / 不可以]
如果不可以，阻塞原因：______________________
负责人签字/确认：____________________________
确认日期：____________________________________
```
