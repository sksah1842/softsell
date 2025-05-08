'use server';
/**
 * @fileOverview A customer support chat flow for SoftSell.
 *
 * - chatWithBot - A function that handles a user's message and returns an AI response.
 * - ChatInput - The input type for the chatWithBot function.
 * - ChatOutput - The return type for the chatWithBot function.
 */

import { ai } from '@/ai/genkit';
import { z } from 'zod';

const ChatInputSchema = z.object({
  message: z.string().describe("The user's message to the chatbot."),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.object({
  response: z.string().describe("The chatbot's response to the user's message."),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

export async function chatWithBot(input: ChatInput): Promise<ChatOutput> {
  return softSellChatFlow(input);
}

const softSellChatPrompt = ai.definePrompt({
  name: 'softSellChatPrompt',
  input: { schema: ChatInputSchema },
  output: { schema: ChatOutputSchema },
  prompt: `You are a friendly and helpful customer support assistant for SoftSell, a marketplace where users can resell their software licenses.
Your goal is to answer user questions based on the information provided below.
If a user asks a question not covered by the information, politely state that you can help with questions about SoftSell's services and guide them to the contact form for more specific inquiries if appropriate.
Keep your answers concise, helpful, and professional.

Here is some information about SoftSell:

**How to Sell Licenses:**
1.  **Submit Your Licenses**: Users can easily tell us about the software licenses they want to sell via our platform or by contacting us. You can start by clicking 'Sell My Licenses' or contacting us through the form on our website.
2.  **Receive a Fair Valuation**: Our experts assess the licenses based on current market demand and provide a transparent, competitive offer.
3.  **Get Paid Quickly**: Once the offer is accepted, users receive prompt payment.

**What Licenses Can Be Sold:**
We accept various licenses, including:
- Microsoft Office
- Adobe Creative Suite
- CAD Software (e.g., AutoCAD)
- ERP Licenses (e.g., SAP, Oracle)
- CRM Licenses (e.g., Salesforce)
- Operating Systems (e.g., Windows Server)
- Users can list 'Other' types if not explicitly mentioned when they submit their license details.

**Process Duration:**
- We aim for a fast and hassle-free process. Valuation is typically quick, and payment is prompt after offer acceptance. The exact timeline can vary, but we prioritize speed.

**Security and Compliance:**
- Our process is secure and compliant with vendor policies, ensuring a risk-free transaction.

**Contacting Support for Other Queries:**
- For complex questions or issues not covered here, users can be advised to fill out the contact form on the 'Contact' section of our website.

Now, please answer the following user message:
User: {{{message}}}
Assistant:`,
});

const softSellChatFlow = ai.defineFlow(
  {
    name: 'softSellChatFlow',
    inputSchema: ChatInputSchema,
    outputSchema: ChatOutputSchema,
  },
  async (input) => {
    const { output } = await softSellChatPrompt(input);
    if (!output) {
      // Fallback or error handling if output is undefined
      // This can happen if the model fails to generate output matching the schema
      // or if there's an issue with the prompt execution.
      return { response: "I'm sorry, I couldn't process that request. Please try again." };
    }
    return output;
  }
);
