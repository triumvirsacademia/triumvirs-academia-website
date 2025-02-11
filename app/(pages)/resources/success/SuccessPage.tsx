// app/resources/success/SuccessPage.tsx

'use client';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Stripe from 'stripe';

const SuccessPage: React.FC = () => {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [session, setSession] = useState<Stripe.Checkout.Session | null>(null);

  useEffect(() => {
    if (sessionId) {
      const fetchSession = async () => {
        try {
          const res = await fetch(`/api/session?session_id=${sessionId}`);
          if (!res.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await res.json();
          setSession(data);
        } catch (error) {
          console.error('Failed to fetch session:', error);
        }
      };
      fetchSession();
    }
  }, [sessionId]);

  if (!sessionId) return <p>No session ID provided.</p>;
  if (!session) return <p>Loading...</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Payment Successful!</h1>
      <p>Thank you for your purchase.</p>
      {/* You can add more details about the session if needed */}
    </div>
  );
};

export default SuccessPage;