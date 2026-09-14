---
id: wallet-connect
title: Tích hợp WalletConnect và UXUY Wallet
sidebar_label: Tích hợp WalletConnect
sidebar_position: 3
description: Integrate UXUY Wallet in an App-only environment with WalletConnect, RainbowKit, wagmi, viem and the Phantom-compatible Solana provider.
keywords: [WalletConnect, UXUY Wallet, RainbowKit, wagmi, viem, Solana, Phantom]
---

# Tích hợp WalletConnect và UXUY Wallet

UXUY Wallet currently runs as an **App-only wallet**. It does not provide a browser extension. A DApp must therefore be opened inside the UXUY App browser before the UXUY provider can be used.

This page covers three integration modes:

- WalletConnect v2 standard protocol for DApps running on PC or external mobile H5.
- EVM App browser integration through the EIP-1193 provider interface.
- Solana App browser integration through a Phantom-compatible provider interface.

The examples use a placeholder WalletConnect Cloud project ID. Each DApp must create and use its own project ID; do not copy a project ID from another DApp.

> **Verification status:** App-side source review has confirmed several protocol entry points, but release-version support, production chain configuration and end-to-end device testing are still pending. The network table and test cases below are integration candidates, not a guarantee that every chain or method is enabled in every public App release.

## Integration steps

1. Create a WalletConnect Cloud (Reown Dashboard) project and keep its project ID private to your DApp.
2. Choose the mode that matches where the DApp runs: WalletConnect for PC/external H5, or an injected provider for the UXUY App browser.
3. Install the SDK that matches your stack (RainbowKit, Reown AppKit, wagmi/viem, or WalletConnect Universal Provider).
4. Configure DApp metadata, supported chains and the UXUY branding/deep link where your UI exposes a dedicated UXUY entry.
5. Test approval, rejection, account changes, chain changes, disconnect and return-from-App behavior on iOS and Android.

## Choose an integration mode

| Mode | Where the DApp runs | Connection mechanism | SDK/API |
| --- | --- | --- | --- |
| WalletConnect standard protocol | PC browser or external mobile H5 | QR code or UXUY deep link | RainbowKit, Reown AppKit, or WalletConnect v2 SDK |
| EVM App browser | UXUY App browser | Injected EIP-1193 provider | `window.ethereum` or wagmi |
| Solana App browser | UXUY App browser | Phantom-compatible provider | `window.phantom.solana` or `window.solana` |

The first mode is a protocol-level connection and is suitable for third-party SDKs. The last two modes are App-browser integrations and are available only after the DApp is opened inside UXUY App.

## 1. WalletConnect standard protocol (third-party SDKs)

Use this mode when a DApp runs in a PC browser or an external mobile browser. UXUY is reached through WalletConnect QR code or the UXUY deep link; the DApp must not assume that a browser extension is installed.

### Connection flows

### PC DApp

1. The DApp displays a WalletConnect QR code.
2. The user opens UXUY Wallet on a mobile device and scans the QR code.
3. The user reviews and approves the connection in UXUY Wallet.
4. The DApp receives the approved session and can request signatures or transactions.

The PC browser does not need a UXUY extension. Keep the QR-code option visible even when no injected provider is detected.

### External mobile H5

When a WalletConnect URI is available, use the UXUY deep link to open UXUY Wallet and start pairing:

```ts
export function openUxuyWallet(uri: string) {
  const deepLink = `uxuyapp://wc?uri=${encodeURIComponent(uri)}`;
  window.location.href = deepLink;
}
```

Provide a fallback link to the official download page if the app does not open:

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

The current App entry point parses the URI, starts pairing and opens the connection confirmation page. It does **not** automatically open the external H5 DApp inside the App browser. Automatic WebView restoration applies only when the original connection was initiated from a UXUY WebView. For an external H5 flow, provide a clear “return to DApp” instruction after approval.

The current flow also requires an existing UXUY login session. If the user is not logged in, the App may not preserve the external link for replay after login; test and document the actual behavior before publishing a one-tap login flow.

Do not ask users to install a browser extension. The deep link only opens UXUY App and starts the pairing/approval flow.

## EVM standard SDK integration (RainbowKit + wagmi + viem)

This is an EVM implementation of mode 1. RainbowKit and wagmi manage the standard WalletConnect session; UXUY is only added as a separately displayed wallet option.

### Install dependencies

```bash
npm install @rainbow-me/rainbowkit wagmi viem @tanstack/react-query
```

### Configure supported chains

The following Chain IDs are the current DApp integration candidates. UXUY's available chains are supplied by runtime DApp chain metadata and filtered by the wallet's address capabilities; this table must not be read as a production guarantee until the App release configuration and signing/transaction flows have been verified.

| Chain ID | Name | Network | Stablecoin | Icon |
| ---: | --- | --- | --- | --- |
| 1 | Ethereum | ERC-20 | USDT | [icon](https://static.uxuy.me/images/operation/c0057765331-ethereum.png) |
| 56 | BNB Chain | BEP-20 | USDT | [icon](https://static.uxuy.me/images/operation/3b683765361-bnb.png) |
| 137 | Polygon | Polygon Mainnet | USDC | [icon](https://static.uxuy.me/images/operation/72b76910656-Polygon.png) |
| 196 | X Layer | X Layer Mainnet | USD₮0 | [icon](https://static.uxuy.me/images/operation/2f6c2108981-Xlayer.png) |
| 4663 | Robinhood Chain | Robinhood Chain | USDG | [icon](https://static.uxuy.me/images/operation/7bd97432496-Robinhood.png) |
| 8453 | Base | Base Mainnet | USDC | [icon](https://static.uxuy.me/images/operation/72f3e677586-Base.png) |
| 42161 | Arbitrum | Arbitrum Mainnet | USDC | [icon](https://static.uxuy.me/images/operation/cc124910656-Arbitrum.png) |

Use viem's built-in definitions where available. X Layer and Robinhood Chain require the current RPC and explorer values from the chain or UXUY deployment team:

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

Do not publish guessed RPC endpoints. Replace the placeholders before enabling a custom chain in production.

### Register UXUY as a separate RainbowKit wallet

Use RainbowKit's custom-wallet API to show UXUY Wallet as its own entry. The important parts are the wallet name, icon, deep-link handler and WalletConnect connector:

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
  // UXUY has no browser extension. The QR-code path stays available on PC.
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

`getDefaultConfig` accepts a wallet list and constructs the connectors itself. If you need to construct connectors manually, use `connectorsForWallets` with wagmi's `createConfig` and configure transports separately:

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

Keep `uxuyWallet` before the generic `walletConnectWallet` so that UXUY appears as a dedicated option. The generic WalletConnect option must remain available for other WalletConnect-compatible wallets.

Pin and test the RainbowKit and wagmi versions used by your DApp. The `getDefaultConfig` and custom-wallet APIs are version-sensitive; do not copy a configuration that passes `connectors` to `getDefaultConfig`.

### Reown AppKit (Web3Modal) configuration

Reown AppKit is another standard WalletConnect integration. It is useful when the DApp wants a prebuilt modal and already uses wagmi. The metadata belongs to the DApp, and the project ID must come from the DApp's own Reown Dashboard project:

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

AppKit's default wallet list is controlled by the WalletConnect directory. If UXUY needs to appear as a dedicated, separately branded button, use a confirmed UXUY wallet ID with `featuredWalletIds` or add a custom wallet button that calls the UXUY deep link. Do not invent a wallet ID; RainbowKit's custom-wallet example above gives deterministic UXUY branding.

> The Bitget page includes a legacy `@walletconnect/client` v1 example and the old `bridge.walletconnect.org` endpoint. WalletConnect v1 was shut down; new integrations must use WalletConnect v2-compatible SDKs such as Reown AppKit or Universal Provider.

## 2. EVM App browser integration

Use this mode only when the DApp is already running inside the UXUY App browser. It is separate from the WalletConnect protocol flow and third-party SDK integration above.

The methods shown here describe the injected EIP-1193 provider. They must not be copied into the WalletConnect wallet-side method whitelist: the current App WalletConnect whitelist is a separate contract and does not include `eth_accounts`, `eth_requestAccounts` or `eth_chainId`.

### Use the EIP-1193 provider in the App browser

```ts
type EvmProvider = {
  request(args: { method: string; params?: unknown[] }): Promise<unknown>;
};

export function getUxuyEvmProvider(): EvmProvider {
  const provider = (window as Window & { ethereum?: EvmProvider }).ethereum;
  if (!provider) {
    throw new Error('Open this DApp inside the UXUY App browser.');
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

Use wagmi hooks for application state where possible. Treat `4001` (user rejected) and `4900` (disconnected) as normal user-facing outcomes and allow the user to retry.

`wallet_addEthereumChain` is not an arbitrary custom-chain registration mechanism in the current App implementation. It checks the App's known chain metadata and emits the supported-chain flow; do not promise that a DApp-supplied RPC configuration will be persisted.

## 3. Solana App browser integration (Phantom-compatible)

Use this mode only when the DApp is already running inside the UXUY App browser. UXUY follows the Phantom-compatible Solana provider surface; it is not an additional UXUY-only Solana SDK.

UXUY exposes the Solana provider with the Phantom-compatible API inside the UXUY App browser. Do not use EVM methods or `window.ethereum` for Solana.

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
    throw new Error('Open this DApp inside the UXUY App browser.');
  }
  return provider;
}

const provider = getUxuySolanaProvider();
const { publicKey } = await provider.connect();
console.log('Connected Solana address:', publicKey.toString());

const message = new TextEncoder().encode('Sign in to My DApp');
const { signature } = await provider.signMessage(message, 'utf8');
```

For connection restoration, call `connect({ onlyIfTrusted: true })` on page load and fall back to an explicit `connect()` button when the request is rejected. Solana message signatures use Ed25519; verify the returned signature with a trusted Solana library before treating it as authentication.

## WalletConnect standard protocol: native SDK (without RainbowKit)

This is an alternative implementation of mode 1 for DApps that need a fully custom connection UI.

Use a WalletConnect v2-compatible provider when you need a custom UI. The project metadata should identify the DApp, not UXUY:

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

// Register this before connect(): the first connection emits the pairing URI.
provider.on('display_uri', (uri: string) => {
  // Render a QR code with uri, or open UXUY on mobile:
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

The provider must expose the `display_uri` value to a QR-code component or the UXUY deep link before the user can approve the first connection. Also subscribe to `session_update` and `session_delete` for a complete lifecycle.

Use `requiredNamespaces` instead when the DApp cannot operate without the EVM namespace. Keep the requested methods and chains limited to the capabilities the DApp actually needs.

The current UXUY App source contains Solana WalletConnect request handlers for the mainnet namespace, including account, message-signing, transaction-signing and broadcast paths. Release availability and end-to-end device verification are still required before describing these capabilities as production support. For App-browser Solana integration, use the Phantom-compatible provider described above.

## Error handling and security

- Never request a seed phrase, private key or recovery code from a user.
- Display the DApp origin, chain and requested method before asking the user to approve.
- Do not reuse another DApp's WalletConnect project ID.
- Encode the complete WalletConnect URI exactly once when building the UXUY deep link.
- Do not treat a connected address as proof of identity without verifying a signature or using a suitable SIWx/SIWS flow.
- Error codes are channel-specific: the current WalletConnect EVM and WalletConnect Solana request paths use `5001` for a rejected request, while the injected Solana App-browser provider uses `4001`. Confirm the exact App release behavior before hard-coding a single code in a DApp.
- A rejected request is not a connection failure that should be retried in a loop. Show a retry action instead.
- Test QR scanning, deep-link return, page refresh, account change, chain change and disconnect on both iOS and Android UXUY App versions.

## References

- [WalletConnect Cloud](https://cloud.walletconnect.com/)
- [Reown AppKit installation (wagmi)](https://docs.reown.com/appkit/react/core/installation?platform=wagmi)
- [RainbowKit custom wallets](https://rainbowkit.com/docs/custom-wallets)
- [RainbowKit installation](https://rainbowkit.com/docs/installation)
- [Phantom Solana provider](https://docs.phantom.com/solana/establishing-a-connection)
- [Phantom message signing](https://docs.phantom.com/solana/signing-a-message)
