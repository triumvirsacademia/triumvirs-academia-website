'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Stripe from 'stripe';
import { Suspense } from 'react';

const SuccessPage: React.FC = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [session, setSession] = useState<Stripe.Checkout.Session | null>(null);

  useEffect(() => {
    if (sessionId) {
      const fetchSession = async () => {
        const res = await fetch(`/api/session?session_id=${sessionId}`);
        const data = await res.json();
        setSession(data);
      };
      fetchSession();
    }
  }, [sessionId]);

  if (!sessionId) return <p>No session ID provided.</p>;
  if (!session) return <p>Loading...</p>;

  return (
    <Suspense>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold">Payment Successful!</h1>
        <p>Thank you for your purchase.</p>
      </div>
    </Suspense>
  );
};

export default SuccessPage;