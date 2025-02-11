// app/resources/success/page.tsx

import React, { Suspense } from 'react';
import SuccessPage from './SuccessPage';

const SuccessPageWithSuspense: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPage />
    </Suspense>
  );
};

export default SuccessPageWithSuspense;