// app/cart/page.tsx
'use client';

import React from 'react';
import { useCart } from '../UseCart';
import { loadStripe } from '@stripe/stripe-js';
import Link from 'next/link';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string);

const CartPage: React.FC = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleCheckout = async () => {
    const stripe = await stripePromise;

    const response = await fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ items: cart }),
    });

    const session = await response.json();

    // Redirect to Stripe Checkout
    const result = await stripe?.redirectToCheckout({
      sessionId: session.id,
    });

    if (result?.error) {
      alert(result.error.message);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="mb-8 md:mb-16">
                <div className="flex justify-center items-center h-32 md:h-64 py-24 md:py-48 bg-white">
                    <div className="hidden md:block relative">
                        <h1 className="text-[9rem] font-bold tracking-tighter">Cart</h1>
                        <span className="absolute -right-20 bottom-[3.5rem] h-[0.0625rem] bg-black w-[36rem]"></span>
                        <span className="absolute -right-[3px] bottom-[1rem] h-[10.5rem] bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-8 -top-5 h-64 w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[5.25rem] left-24 h-16 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="md:hidden block relative">
                        <h1 className="text-7xl font-bold tracking-tighter">Cart</h1>
                        <span className="absolute -right-10 bottom-[10px] h-[1px] bg-black w-72"></span>
                        <span className="absolute -right-[2px] -bottom-3 h-24 bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-8 -top-5 h-32 w-32 md:h-64 md:w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[60px] left-8 h-10 bg-black w-[1px]"></span>
                    </div>
                    <div className="w-[10vw]"></div>
                </div>
            </div>
      {cart.length === 0 ? (
        <h2 className='font-medium text-5xl tracking-tighter text-center'>Your cart is empty. Checkout some products in the <Link href="/resources" className="text-accent">resources</Link> page.</h2>
      ) : (
        <div>
            {
                cart.filter((product) => product.id.substring(0, 4) === 'note').length === 0 ? null
                : <section className=''>
                    <div className="flex justify-center items-center h-32 my-8">
                        <div className="relative">
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Notes</h2>
                            <span className="absolute -right-8 bottom-[7px] md:bottom-[10px] h-[0.0625rem] bg-black w-44 md:w-[16rem]"></span>
                            <span className="absolute -right-[1px] md:-right-[2px] -bottom-2 md:-bottom-4 h-16 md:h-24 bg-black w-[0.0625rem]"></span>
                        </div>
                        <div className="md:w-[40vw]"></div>
                    </div>
                    <ul>
                        {cart.filter((product) => product.id.substring(0, 4) === 'note').map((item) => (
                        <li key={item.id} className="flex justify-between items-center mb-4">
                            <div>
                            <h2 className="text-3xl font-medium tracking-tighter">{item.name}</h2>
                            <p className='font-serif text-2xl tracking-tighter'>
                                ${item.price} x {item.quantity}
                            </p>
                            </div>
                            <button
                            className="text-red-500"
                            onClick={() => removeFromCart(item.id)}
                            >
                            Remove
                            </button>
                        </li>
                        ))}
                    </ul>
                </section>
            }
            {
                cart.filter((product) => product.id.substring(0, 3) === 'eng').length === 0 ? null
                : <section className=''>
                    <div className="flex justify-center items-center h-32 my-8">
                        <div className="relative">
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">English</h2>
                            <span className="absolute -right-8 bottom-[7px] md:bottom-[10px] h-[0.0625rem] bg-black w-44 md:w-[16rem]"></span>
                            <span className="absolute -right-[1px] md:-right-[2px] -bottom-2 md:-bottom-4 h-16 md:h-24 bg-black w-[0.0625rem]"></span>
                        </div>
                        <div className="md:w-[40vw]"></div>
                    </div>
                    <ul>
                        {cart.filter((product) => product.id.substring(0, 3) === 'eng').map((item) => (
                        <li key={item.id} className="flex justify-between items-center mb-4">
                            <div>
                            <h2 className="text-xl">{item.name}</h2>
                            <p>
                                ${item.price} x {item.quantity}
                            </p>
                            </div>
                            <button
                            className="text-red-500"
                            onClick={() => removeFromCart(item.id)}
                            >
                            Remove
                            </button>
                        </li>
                        ))}
                    </ul>
                </section>
            }
          <div className="mt-6">
            <h2 className="text-2xl">Total: ${total}</h2>
            <button
              className="mt-4 ml-4 bg-gray-500 text-white px-4 py-2 rounded"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className='flex justify-center items-center mt-16'>
                <div className='w-[20vw]'></div>
                    <div className='relative w-[40vw] flex justify-end'>
                        <button onClick={handleCheckout} className="text-5xl font-bold tracking-tighter hover:text-accent">
                            <p className='flex items-center justify-end'>Checkout<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-12 pt-2">
                                <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg></p>
                            <span className="absolute -right-4 md:-right-16 bottom-[0.375rem] h-[0.0625rem] bg-black w-72 md:w-96"></span>
                        </button>
                    </div>
                </div>
            </div>
      )}
    </div>
  );
};

export default CartPage;