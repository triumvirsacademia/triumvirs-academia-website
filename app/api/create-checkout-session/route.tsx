// app/api/create-checkout-session/route.ts
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

interface CartItem {
    name: string;
    image: string; // URL of the product image
    price: number; // Price in dollars (will be converted to cents for Stripe)
    quantity: number;
  }

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
  apiVersion: '2025-01-27.acacia',
});

export async function POST(request: Request) {
  try {
    const { items } = await request.json();

    // Transform cart items to Stripe line items
    const lineItems = items.map((item: CartItem) => ({
      price_data: {
        currency: 'usd',
        product_data: {
          name: item.name,
          images: [item.image],
        },
        unit_amount: item.price * 100, // Stripe expects amount in cents
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/resources/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_SITE_URL}/resources/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err: unknown) {
    console.error(err);
    if (err instanceof Error) {
        console.error(err.message);
        return NextResponse.json({ error: err.message }, { status: 500 });
      }
  
      // Handle unexpected error types
      console.error('Unexpected Error:', err);
      return NextResponse.json({ error: 'An unexpected error occurred.' }, { status: 500 });
  }
}