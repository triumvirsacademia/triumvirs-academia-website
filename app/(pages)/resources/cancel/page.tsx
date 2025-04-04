// app/cancel/page.tsx
'use client';

import React from 'react';
import Link from 'next/link';

const CancelPage: React.FC = () => {
  return (
    <div>
        <div className="mb-8 md:mb-16">
            <div className="flex justify-center items-center h-32 md:h-64 py-24 md:py-48 bg-white">
                <div className="hidden md:block relative">
                    <h1 className="text-[9rem] font-bold tracking-tighter">Cancelled</h1>
                    <span className="absolute -right-20 bottom-[3.5rem] h-[0.0625rem] bg-black w-[50rem]"></span>
                    <span className="absolute -right-[1px] bottom-[1rem] h-[10.5rem] bg-black w-[0.0625rem]"></span>
                    <div className="absolute -left-8 -top-5 h-64 w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                    <span className="absolute -top-[5.25rem] left-24 h-16 bg-black w-[0.0625rem]"></span>
                </div>
                <div className="md:hidden block relative">
                    <h1 className="text-7xl font-bold tracking-tighter">Cancelled</h1>
                    <span className="absolute -right-10 bottom-[9px] h-[1px] bg-black w-96"></span>
                    <span className="absolute right-0 -bottom-3 h-24 bg-black w-[0.0625rem]"></span>
                    <div className="absolute -left-4 -top-5 h-32 w-32 md:h-64 md:w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                    <span className="absolute -top-[60px] left-12 h-10 bg-black w-[1px]"></span>
                </div>
                <div className="w-[5vw]"></div>
            </div>
        </div>
        <h2 className='font-medium text-5xl tracking-tighter text-center'>You have cancelled your payment. Checkout some products in the <Link href="/resources" className="text-accent">resources</Link> page.</h2>
    </div>
  );
};

export default CancelPage;