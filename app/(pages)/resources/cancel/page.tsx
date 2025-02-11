// app/cancel/page.tsx
'use client';

import React from 'react';

const CancelPage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold">Payment Cancelled</h1>
      <p>You have cancelled your payment.</p>
    </div>
  );
};

export default CancelPage;