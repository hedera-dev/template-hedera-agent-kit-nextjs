import { handleChatBodySchema } from '@/server/schema';
import { initializeAgent } from '@/server/initialize-agent';
import { NextRequest } from 'next/server';

const conversationalAgent = await initializeAgent();

type ResponseData = {
  message: string;
  transactionBytes?: string;
};

export async function POST(req: NextRequest) {
  const parsedBody = handleChatBodySchema.safeParse(req.body);
  if (!parsedBody.success) {
    return Response.json({ message: 'Invalid body request' });
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

  Response.json(response);
}
