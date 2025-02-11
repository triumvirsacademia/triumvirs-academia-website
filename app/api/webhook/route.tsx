// app/api/webhook/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-01-27.acacia',
});

// Replace with your actual endpoint secret
const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET as string;

export const config = {
  runtime: 'nodejs',
  api: {
    bodyParser: false, // Disallow body parsing, consume as Stream
  },
};

export async function POST(request: Request) {
  const sig = request.headers.get('stripe-signature') as string;
  const buf = await request.arrayBuffer();
  const bufBuffer = Buffer.from(buf);

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(bufBuffer, sig, endpointSecret);
  } catch (err: unknown) {
     if (err instanceof Error) {
        console.error(`⚠️  Webhook signature verification failed.`, err.message);
        return NextResponse.json({ error: 'Webhook signature verification failed.' }, { status: 400 });
    }

    // Handle unexpected error types
    console.error('Unexpected Error:', err);
    return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }

  // Handle the checkout.session.completed event
  if (event.type === 'checkout.session.completed') {
    const session = event.data.object as Stripe.Checkout.Session;
    // Fulfill the purchase... e.g., update database, send confirmation email
    console.log(`Payment for session ${session.id} was successful!`);
  }

  return NextResponse.json({ received: true });
}