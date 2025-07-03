import { handleChatBodySchema } from '@/server/schema';
import { initializeAgent } from '@/server/initialize-agent';
import { NextRequest } from 'next/server';

export const runtime = 'nodejs';

type ResponseData = {
    message: string;
    transactionBytes?: string;
};

export async function POST(req: NextRequest) {
    const conversationalAgent = await initializeAgent();
    const data = await req.json();
    const parsedBody = handleChatBodySchema.safeParse(data);
    if (!parsedBody.success) {
        return Response.json({ message: 'Invalid body request' });
    }

    const body = parsedBody.data;

    const agentResponse = await conversationalAgent.processMessage(body.input, body.history);

    const response: ResponseData = {
        message: agentResponse.message ?? '-',
    };

    if ('transactionBytes' in agentResponse) {
        response.transactionBytes = agentResponse.transactionBytes;
    }

    return Response.json(response);
}