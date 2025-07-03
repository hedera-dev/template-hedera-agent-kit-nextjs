import { HederaConversationalAgent, HederaNetworkType, ServerSigner } from 'hedera-agent-kit';

const operatorId = process.env.HEDERA_ACCOUNT_ID;
const operatorKey = process.env.HEDERA_PRIVATE_KEY;
const network = (process.env.HEDERA_NETWORK || 'testnet') as HederaNetworkType;
const openaiApiKey = process.env.OPENAI_API_KEY;
const userAccountId = process.env.USER_ACCOUNT_ID;

export async function initializeAgent() {
  if (!operatorId || !operatorKey)
    throw new Error('HEDERA_ACCOUNT_ID and HEDERA_PRIVATE_KEY must be set in .env');

  const agentSigner = new ServerSigner(operatorId, operatorKey, network);
  const conversationalAgent = new HederaConversationalAgent(agentSigner, {
    operationalMode: 'provideBytes',
    userAccountId: userAccountId,
    verbose: false,
    openAIApiKey: openaiApiKey,
    scheduleUserTransactionsInBytesMode: false,
  });
  await conversationalAgent.initialize();
  return conversationalAgent;
}
