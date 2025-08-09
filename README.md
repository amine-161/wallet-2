<div align="center">
<img width="200" alt="Image" src="https://github.com/user-attachments/assets/8b617791-cd37-4a5a-8695-a7c9018b7c70" />
<br>
<br>
<h1>Zlo.Co</h1>

<div align="center">
<a href="#">Live Demo</a>  | <a href="https://docs.crossmint.com/">Docs</a>
</div>

<br>
<br>
<img src="https://github.com/user-attachments/assets/9bd7085c-5a92-4590-ae22-f892e353efce" alt="Image" width="full">
</div>

## Table of contents

- [Introduction](#introduction)
- [Deploy](#deploy)
- [Setup](#setup)
- [Using another chain](#using-another-chain)
- [Using in production](#using-in-production)
  - [Enabling Withdrawals](#enabling-withdrawals)

## Introduction

Zlo.Co is a modern digital wallet built on **[Crossmint](https://crossmint.com)** wallets and onramp.

**Key features**

- Login with email or social media
- Automatically create non-custodial wallets for your users
- Top up with USDC using a credit or debit card
- Transfer USDC to another wallet or email address
- View your wallet activity
- Withdraw USDC to your bank account
- Support for +40 chains (Solana, EVM, etc)
- Leverage more than +200 onchain tools integrating [GOAT](https://github.com/goat-sdk/goat)

**Coming soon**

- Currency conversion
- Earn interest on your USDC
- Issue a debit card linked to your wallet

Get in touch with us to get early access to these features!

Join our [Telegram community](https://t.me/crossmintdevs) to stay updated on the latest features and announcements.

## Deploy

Easily deploy the template to Vercel with the button below. You will need to set the required environment variables in the Vercel dashboard.

<!-- Removed starter app deploy button -->

## Setup

1. Clone the repository and navigate to the project folder:

```bash
git clone <your-repo> && cd zlo-co
```

2. Install all dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Set up the environment variables:

```bash
cp .env.template .env
```

4. Login to the <a href="https://staging.crossmint.com/console" target="_blank">Crossmint staging console</a> and get the client API key from the <a href="https://staging.crossmint.com/console/overview" target="_blank">overview page</a>:

```env
NEXT_PUBLIC_CROSSMINT_CLIENT_API_KEY=your_client_side_API_key
```

5. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

## Using another chain

To use another chain, you'll need to:

1. Update the chain environment variable to the chain you want to use.

```env
NEXT_PUBLIC_CHAIN_ID=solana
```

2. Update the USDC locator to the USDC of the chain you want to use.

```env
# For solana 4zMMC9srt5Ri5X14GAgXhaHii3GnPAEERYPJgZJDncDU
NEXT_PUBLIC_USDC_MINT=your_USDC_mint
```

## Using in production

This app is designed for rapid prototyping and testing in a staging environment. To move to production you'll need to:

1. Login to the [Crossmint production console](https://www.crossmint.com/console) and [create a client side API key](https://www.crossmint.com/console/projects/apiKeys) with the following scopes: `users.create`, `users.read`, `wallets.read`, `wallets.create`, `wallets:transactions.create`, `wallets:transactions.sign`, `wallets:transactions.read`, `wallets:balance.read`, `wallets.fund`.
2. Update the chain environment variable to a mainnet chain.
   - **Note ⚠️**: Non custodial signers for solana are not available in production yet since they are undergoing a security audit. Reach out to us on [Telegram](https://t.me/crossmintdevs) to be the first to know when they are available.
3. Update the USDC locator to the USDC of the mainnet chain you want to use.
4. Customize your email template for login and signup in the [Crossmint console](https://www.crossmint.com/console) under the Settings tab in the Branding section.
5. For using onramp in production reach out to Crossmint.

### Enabling Withdrawals

Withdrawals are powered by [Coinbase](https://www.coinbase.com/en-es/developer-platform) and only work in production. For enabling withdrawals you'll need to:

1. [Create a Coinbase developer account](https://www.coinbase.com/en-es/developer-platform)
2. Create a Server API Key
3. Add the `NEXT_PUBLIC_COINBASE_APP_ID`, `COINBASE_API_KEY_ID`, and `API_KEY_SECRET` to the `.env` file.
4. In the [Onramp configuration](https://portal.cdp.coinbase.com/products/onramp) add your domain to the domain allowlist
