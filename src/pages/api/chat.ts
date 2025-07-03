import type { NextApiRequest, NextApiResponse } from 'next';
import { handleChatBodySchema } from '@/server/schema';
import { initializeAgent } from '@/server/initialize-agent';

const conversationalAgent = await initializeAgent();

type ResponseData = {
  message: string;
  transactionBytes?: string;
};

export default async function handler(req: NextApiRequest, res: NextApiResponse<ResponseData>) {
  if (req.method !== 'POST') {
    return res.status(404).json({ message: 'Error 404' });
  }

  const parsedBody = handleChatBodySchema.safeParse(req.body);
  if (!parsedBody.success) {
    return res.status(400).json({ message: 'Invalid body request' });
  }

  const body = parsedBody.data;

  const agentResponse = await conversationalAgent.processMessage(body.input, body.history);

  console.log(agentResponse);

  const response: ResponseData = {
    message: agentResponse.message ?? '-',
  };

  if ('transactionBytes' in agentResponse) {
    response.transactionBytes = agentResponse.transactionBytes;
  }

  res.status(200).json(response);
}
