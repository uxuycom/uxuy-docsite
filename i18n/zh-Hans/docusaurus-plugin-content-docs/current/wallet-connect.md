---
id: wallet-connect
title: WalletConnect 与 UXUY Wallet 接入
sidebar_label: WalletConnect 接入
sidebar_position: 3
description: 在仅 App 钱包环境中，使用 WalletConnect、RainbowKit、wagmi、viem 和 Phantom 兼容的 Solana Provider 接入 UXUY Wallet。
keywords: [WalletConnect, UXUY Wallet, RainbowKit, wagmi, viem, Solana, Phantom]
---

# WalletConnect 与 UXUY Wallet 接入

UXUY Wallet 当前是**仅 App 钱包**，不提供浏览器插件。因此，DApp 必须在 UXUY App 内置浏览器中打开后，才能使用 UXUY 注入的 Provider。

本文覆盖三种接入模式：

- WalletConnect v2 标准协议：适用于 PC 或外部移动端 H5 中运行的 DApp；
- EVM App 浏览器：通过 EIP-1193 Provider 接入；
- Solana App 浏览器：通过 Phantom 兼容的 Provider 接口接入。

示例中的 WalletConnect Project ID 使用占位符。每个 DApp 都必须申请并使用自己的 Project ID，不要复制其他 DApp 的 Project ID。

> **核验状态：** App 端源码审阅已确认部分协议入口，但正式发布版本的支持范围、生产链配置以及真机端到端测试仍待确认。下面的网络表和测试项是接入候选，不代表每个公开版本的 App 都已启用全部链和方法。

## 集成步骤

1. 在 WalletConnect Cloud（Reown Dashboard）创建项目，并仅在自己的 DApp 中使用该 Project ID。
2. 根据 DApp 的运行位置选择模式：PC/外部移动端 H5 使用 WalletConnect，UXUY App 内置浏览器使用注入式 Provider。
3. 按技术栈安装 SDK（RainbowKit、Reown AppKit、wagmi/viem 或 WalletConnect Universal Provider）。
4. 配置 DApp metadata、支持的链，以及在 UI 中单独展示 UXUY 时所需的品牌图标和深链。
5. 在 iOS 和 Android 上测试批准、拒绝、账户切换、链切换、断开连接和从 App 返回 DApp 等流程。

## 选择接入模式

| 模式 | DApp 运行位置 | 连接方式 | SDK/API |
| --- | --- | --- | --- |
| WalletConnect 标准协议 | PC 浏览器或外部移动端 H5 | 二维码或 UXUY 深链 | RainbowKit、Reown AppKit 或 WalletConnect v2 SDK |
| EVM App 浏览器 | UXUY App 内置浏览器 | 注入的 EIP-1193 Provider | `window.ethereum` 或 wagmi |
| Solana App 浏览器 | UXUY App 内置浏览器 | Phantom 兼容 Provider | `window.phantom.solana` 或 `window.solana` |

第一种是协议层连接，适合接入第三方 SDK；后两种是 App 浏览器内部接入，只有在 DApp 已经从 UXUY App 内置浏览器打开时才可用。

## 1. WalletConnect 标准协议（第三方 SDK）

当 DApp 运行在 PC 浏览器或外部移动端浏览器时，使用此模式。UXUY 通过 WalletConnect 二维码或 UXUY 深链接入，DApp 不应假设用户安装了浏览器插件。

### 连接流程

### PC 端 DApp

1. DApp 展示 WalletConnect 二维码。
2. 用户在手机上打开 UXUY Wallet，扫描二维码。
3. 用户在 UXUY Wallet 中查看并确认连接。
4. DApp 收到已批准的会话后，才能发起签名或交易请求。

PC 浏览器不需要安装 UXUY 插件。即使没有检测到注入 Provider，也应保留二维码连接入口。

### 外部移动端 H5

获得 WalletConnect URI 后，可以通过 UXUY 深链打开 UXUY Wallet 并开始配对：

```ts
export function openUxuyWallet(uri: string) {
  const deepLink = `uxuyapp://wc?uri=${encodeURIComponent(uri)}`;
  window.location.href = deepLink;
}
```

如果未能打开 App，请提供官方下载页作为兜底：

```ts
export function openUxuyWalletWithFallback(uri: string) {
  const deepLink = `uxuyapp://wc?uri=${encodeURIComponent(uri)}`;
  const fallback = 'https://www.uxuy.com/download';

  window.location.href = deepLink;
  window.setTimeout(() => {
    if (document.visibilityState === 'visible') window.location.href = fallback;
  }, 1500);
}
```

当前 App 入口会解析 URI、开始配对并打开连接确认页，**不会**自动把外部 H5 DApp 打开到 App 内置浏览器中。只有原本从 UXUY WebView 发起的连接，成功后才会触发 WebView 恢复。外部 H5 流程在用户批准后，应明确提示用户手动返回 DApp。

当前流程还要求用户已有 UXUY 登录态。如果用户未登录，App 可能不会在登录后保存并重放外部链接；对外发布一键登录流程前，必须先完成验证并写明实际行为。

不要要求用户安装浏览器插件。深链只负责打开 UXUY App 并开始配对/确认流程。

## EVM 标准 SDK 接入（RainbowKit + wagmi + viem）

这是模式 1 的 EVM 实现。RainbowKit 和 wagmi 管理标准 WalletConnect 会话，UXUY 只作为单独展示的钱包选项加入。

### 安装依赖

```bash
npm install @rainbow-me/rainbowkit wagmi viem @tanstack/react-query
```

### 配置支持的链

以下 Chain ID 是当前 DApp 接入候选。UXUY 可用链来自运行时 DApp 链元数据，并会结合钱包地址能力进行过滤；在完成 App 发布配置以及签名、交易验证前，不应将该表理解为生产支持承诺。

| Chain ID | 名称 | 网络 | 稳定币 | 图标 |
| ---: | --- | --- | --- | --- |
| 1 | Ethereum | ERC-20 | USDT | [图标](https://static.uxuy.me/images/operation/c0057765331-ethereum.png) |
| 56 | BNB Chain | BEP-20 | USDT | [图标](https://static.uxuy.me/images/operation/3b683765361-bnb.png) |
| 137 | Polygon | Polygon Mainnet | USDC | [图标](https://static.uxuy.me/images/operation/72b76910656-Polygon.png) |
| 196 | X Layer | X Layer Mainnet | USD₮0 | [图标](https://static.uxuy.me/images/operation/2f6c2108981-Xlayer.png) |
| 4663 | Robinhood Chain | Robinhood Chain | USDG | [图标](https://static.uxuy.me/images/operation/7bd97432496-Robinhood.png) |
| 8453 | Base | Base Mainnet | USDC | [图标](https://static.uxuy.me/images/operation/72f3e677586-Base.png) |
| 42161 | Arbitrum | Arbitrum Mainnet | USDC | [图标](https://static.uxuy.me/images/operation/cc124910656-Arbitrum.png) |

有官方定义的链可以直接使用 viem 内置配置。X Layer 和 Robinhood Chain 需要由链方或 UXUY 部署团队提供最新的 RPC 和区块浏览器信息：

```ts
import type { Chain } from 'viem';

export const xLayer = {
  id: 196,
  name: 'X Layer',
  nativeCurrency: {
    name: 'YOUR_X_LAYER_NATIVE_TOKEN',
    symbol: 'YOUR_X_LAYER_NATIVE_SYMBOL',
    decimals: 18,
  },
  rpcUrls: { default: { http: ['YOUR_X_LAYER_RPC_URL'] } },
  blockExplorers: {
    default: { name: 'X Layer Explorer', url: 'YOUR_X_LAYER_EXPLORER_URL' },
  },
} as const satisfies Chain;

export const robinhoodChain = {
  id: 4663,
  name: 'Robinhood Chain',
  nativeCurrency: {
    name: 'Robinhood Chain native token',
    symbol: 'YOUR_NATIVE_SYMBOL',
    decimals: 18,
  },
  rpcUrls: { default: { http: ['YOUR_ROBINHOOD_RPC_URL'] } },
  blockExplorers: {
    default: {
      name: 'Robinhood Chain Explorer',
      url: 'YOUR_ROBINHOOD_EXPLORER_URL',
    },
  },
} as const satisfies Chain;
```

不要猜测或发布 RPC 地址。生产环境启用自定义链前，必须替换这些占位符。

### 在 RainbowKit 中单独注册 UXUY

使用 RainbowKit 的 custom-wallet API，将 UXUY Wallet 作为独立入口展示。关键配置包括钱包名称、图标、深链处理器和 WalletConnect connector：

```tsx
import {
  getDefaultConfig,
  getWalletConnectConnector,
  type Wallet,
} from '@rainbow-me/rainbowkit';
import { walletConnectWallet } from '@rainbow-me/rainbowkit/wallets';
import { arbitrum, base, bsc, mainnet, polygon } from 'wagmi/chains';

const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID';

const uxuyWallet = ({ projectId }: { projectId: string }): Wallet => ({
  id: 'uxuy',
  name: 'UXUY Wallet',
  iconUrl: 'https://docs.uxuy.com/img/uxuy-wallet-icon.png',
  iconBackground: '#000000',
  // UXUY 没有浏览器插件，PC 端仍保留二维码连接。
  mobile: {
    getUri: (uri: string) =>
      `uxuyapp://wc?uri=${encodeURIComponent(uri)}`,
  },
  qrCode: {
    getUri: (uri: string) => uri,
  },
  createConnector: getWalletConnectConnector({ projectId }),
});

const wallets = [
  {
    groupName: 'Recommended',
    wallets: [uxuyWallet, walletConnectWallet],
  },
];

export const config = getDefaultConfig({
  appName: 'My DApp',
  projectId,
  chains: [mainnet, bsc, polygon, base, arbitrum],
  wallets,
  ssr: false,
});
```

`getDefaultConfig` 接收钱包列表并自行构造 connectors。如果需要手动构造 connectors，应使用 `connectorsForWallets` 配合 wagmi 的 `createConfig`，并单独配置 transports：

```tsx
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import { createConfig, http } from 'wagmi';

const connectors = connectorsForWallets(
  [
    {
      groupName: 'Recommended',
      wallets: [uxuyWallet, walletConnectWallet],
    },
  ],
  { appName: 'My DApp', projectId },
);

export const config = createConfig({
  chains: [mainnet, bsc, polygon, base, arbitrum],
  connectors,
  transports: {
    [mainnet.id]: http(),
    [bsc.id]: http(),
    [polygon.id]: http(),
    [base.id]: http(),
    [arbitrum.id]: http(),
  },
});
```

将 `uxuyWallet` 放在通用 `walletConnectWallet` 之前，UXUY 就会在 UI 中显示为独立选项。通用 WalletConnect 入口仍应保留，以支持其他 WalletConnect 兼容钱包。

请锁定并测试 DApp 使用的 RainbowKit 和 wagmi 版本。`getDefaultConfig` 和 custom-wallet API 会随版本变化；不要复制将 `connectors` 传入 `getDefaultConfig` 的配置。

### Reown AppKit（Web3Modal）配置

Reown AppKit 是另一种标准 WalletConnect 接入方式，适合需要现成连接弹窗且已经使用 wagmi 的 DApp。metadata 应描述 DApp 自身，Project ID 必须来自 DApp 自己的 Reown Dashboard 项目：

```bash
npm install @reown/appkit @reown/appkit-adapter-wagmi wagmi viem @tanstack/react-query
```

```ts
import { createAppKit } from '@reown/appkit/react';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { mainnet, arbitrum, base, polygon } from '@reown/appkit/networks';

const projectId = 'YOUR_WALLETCONNECT_PROJECT_ID';
const networks = [mainnet, arbitrum, base, polygon];
const metadata = {
  name: 'My DApp',
  description: 'My DApp description',
  url: 'https://example.com',
  icons: ['https://example.com/icon.png'],
};

const wagmiAdapter = new WagmiAdapter({
  networks,
  projectId,
  ssr: false,
});

createAppKit({
  adapters: [wagmiAdapter],
  networks,
  projectId,
  metadata,
});
```

AppKit 的默认钱包列表由 WalletConnect 目录控制。如果需要将 UXUY 作为单独品牌按钮展示，应使用已确认的 UXUY 钱包 ID 配置 `featuredWalletIds`，或自行添加调用 UXUY 深链的按钮。不要猜测钱包 ID；上面的 RainbowKit custom-wallet 示例可以稳定控制 UXUY 的名称和图标。

> Bitget 页面中的 `@walletconnect/client` v1 和 `bridge.walletconnect.org` 属于旧版示例。WalletConnect v1 已停止服务，新项目应使用兼容 WalletConnect v2 的 Reown AppKit 或 Universal Provider。

## 2. EVM App 浏览器内部接入

仅当 DApp 已经在 UXUY App 内置浏览器中运行时使用此模式，与上面的 WalletConnect 协议流程和第三方 SDK 接入相互独立。

下面的方法描述的是注入式 EIP-1193 Provider，不能复制到 WalletConnect 钱包侧的方法白名单中。当前 App 的 WalletConnect 白名单是独立约定，其中不包含 `eth_accounts`、`eth_requestAccounts` 或 `eth_chainId`。

### 在 App 内置浏览器中使用 EIP-1193 Provider

```ts
type EvmProvider = {
  request(args: { method: string; params?: unknown[] }): Promise<unknown>;
};

export function getUxuyEvmProvider(): EvmProvider {
  const provider = (window as Window & { ethereum?: EvmProvider }).ethereum;
  if (!provider) {
    throw new Error('请在 UXUY App 内置浏览器中打开此 DApp。');
  }
  return provider;
}

const provider = getUxuyEvmProvider();
const accounts = (await provider.request({
  method: 'eth_requestAccounts',
})) as string[];
const chainId = (await provider.request({
  method: 'eth_chainId',
})) as string;
```

应用状态优先使用 wagmi hooks 管理。对于 `4001`（用户拒绝）和 `4900`（已断开）等结果，应给出可理解的提示和重试入口。

当前 App 的 `wallet_addEthereumChain` 不是任意自定义链注册接口。它会检查 App 已知的链元数据并触发支持链流程，不应对外承诺会持久化 DApp 提供的任意 RPC 配置。

## 3. Solana App 浏览器内部接入（Phantom 兼容）

仅当 DApp 已经在 UXUY App 内置浏览器中运行时使用此模式。UXUY 遵循 Phantom 兼容的 Solana Provider 接口，不额外引入 UXUY 专属 Solana SDK。

UXUY 在 App 内置浏览器中提供 Phantom 兼容的 Solana Provider。Solana 不要使用 EVM 方法，也不要使用 `window.ethereum`。

```ts
type SolanaProvider = {
  publicKey: { toString(): string } | null;
  isConnected: boolean;
  connect(options?: { onlyIfTrusted?: boolean }): Promise<{
    publicKey: { toString(): string };
  }>;
  disconnect(): Promise<void>;
  signMessage(
    message: Uint8Array,
    display?: 'utf8' | 'hex',
  ): Promise<{ signature: Uint8Array }>;
  on?(event: string, callback: (...args: unknown[]) => void): void;
};

export function getUxuySolanaProvider(): SolanaProvider {
  const globals = window as Window & {
    phantom?: { solana?: SolanaProvider };
    solana?: SolanaProvider;
  };
  const provider = globals.phantom?.solana ?? globals.solana;
  if (!provider) {
    throw new Error('请在 UXUY App 内置浏览器中打开此 DApp。');
  }
  return provider;
}

const provider = getUxuySolanaProvider();
const { publicKey } = await provider.connect();
console.log('Connected Solana address:', publicKey.toString());

const message = new TextEncoder().encode('Sign in to My DApp');
const { signature } = await provider.signMessage(message, 'utf8');
```

页面加载时可以调用 `connect({ onlyIfTrusted: true })` 尝试恢复连接；若被拒绝，再通过明确的“连接钱包”按钮调用 `connect()`。Solana 消息签名使用 Ed25519，只有在使用可信 Solana 库验证签名后，才能将其作为登录凭证。

## WalletConnect 标准协议：原生 SDK（不使用 RainbowKit）

这是模式 1 的另一种实现，适合需要完全自定义连接 UI 的 DApp。

如果需要自定义连接 UI，可以直接使用 WalletConnect v2 兼容 Provider。Project metadata 应标识 DApp 本身，而不是 UXUY：

```ts
import UniversalProvider from '@walletconnect/universal-provider';

const provider = await UniversalProvider.init({
  projectId: 'YOUR_WALLETCONNECT_PROJECT_ID',
  metadata: {
    name: 'My DApp',
    description: 'My DApp description',
    url: 'https://example.com',
    icons: ['https://example.com/icon.png'],
  },
});

// 必须在 connect() 前监听首次配对 URI。
provider.on('display_uri', (uri: string) => {
  // 将 uri 展示为二维码，或在移动端调用 UXUY 深链：
  // window.location.href = `uxuyapp://wc?uri=${encodeURIComponent(uri)}`;
  console.log('WalletConnect URI:', uri);
});

await provider.connect({
  optionalNamespaces: {
    eip155: {
      chains: ['eip155:1', 'eip155:56', 'eip155:137'],
      methods: [
        'eth_sendTransaction',
        'personal_sign',
        'eth_signTypedData_v4',
      ],
      events: ['accountsChanged', 'chainChanged'],
    },
  },
});
```

Provider 必须在 `connect()` 之前监听 `display_uri`，将首次配对 URI 展示为二维码，或调用 UXUY 深链。还应监听 `session_update` 和 `session_delete`，才能覆盖完整生命周期。

如果 DApp 没有 EVM namespace 就无法运行，应改用 `requiredNamespaces`。请求的方法和链应限制在 DApp 实际需要的最小范围内。

当前 UXUY App 源码已经包含 Solana WalletConnect mainnet namespace 的账户、消息签名、交易签名和广播处理，但正式发布版本和真机端到端支持仍待确认。App 内置浏览器中的 Solana 接入则使用上文的 Phantom 兼容 Provider。

## 错误处理与安全

- 绝不要向用户索要助记词、私钥或恢复验证码。
- 在请求确认前展示 DApp 来源、目标链和请求的方法。
- 不要复用其他 DApp 的 WalletConnect Project ID。
- 构造 UXUY 深链时，只对完整 WalletConnect URI 编码一次。
- 不要把“已连接地址”直接当作身份凭证；应验证签名，或采用合适的 SIWx/SIWS 流程。
- 错误码必须按通道区分：当前 WalletConnect EVM 和 WalletConnect Solana 请求路径使用 `5001` 表示拒绝；注入式 Solana App Provider 使用 `4001`。对外文档发布前仍需确认具体 App 版本行为，不能统一假设为一个错误码。
- 用户拒绝不是应该循环重试的连接故障，应提供手动重试入口。
- 在 iOS 和 Android 的 UXUY App 版本上测试二维码扫描、深链返回、刷新页面、账户切换、链切换和断开连接。

## 参考资料

- [WalletConnect Cloud](https://cloud.walletconnect.com/)
- [Reown AppKit 安装（wagmi）](https://docs.reown.com/appkit/react/core/installation?platform=wagmi)
- [RainbowKit 自定义钱包](https://rainbowkit.com/docs/custom-wallets)
- [RainbowKit 安装](https://rainbowkit.com/docs/installation)
- [Phantom Solana Provider](https://docs.phantom.com/solana/establishing-a-connection)
- [Phantom 消息签名](https://docs.phantom.com/solana/signing-a-message)
