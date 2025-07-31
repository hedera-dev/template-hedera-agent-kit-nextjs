# Template Hedera Agent Kit Next.js

## Getting Started

Required env variables:
```
OPENAI_API_KEY=""
HEDERA_ACCOUNT_ID=""
HEDERA_PRIVATE_KEY=""
HEDERA_NETWORK=""

NEXT_PUBLIC_WALLET_CONNECT_ID=""
```
You will need an OPENAI_API_KEY [from OpenAI](https://platform.openai.com/api-keys) and a HEDERA_ACCOUNT_ID and HEDERA_PRIVATE_KEY from [the Hedera Developer Portal](https://portal.hedera.com/dashboard). 

You will also need a NEXT_PUBLIC_WALLET_CONNECT_ID [Wallet Connect](https://docs.blockscout.com/setup/configuration-options/walletconnect-project-id-for-contract-read-write) Project ID from the newly renamed [reown dashboard](https://dashboard.reown.com/). You will need to create a project on the reown dashbord, then copy the Project Id to use in your .env file. This is necessary to create a wallet to use with the Hedera agent kit.



run the server:

1. `npm install`
2. `npm run dev`

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.