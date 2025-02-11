'use client'

import { useCart } from "./(pages)/resources/UseCart";
import Link from "next/link";

export default function Cart() {
    const { cart } = useCart();
    const itemCount = cart.reduce((acc: number, item) => acc + item.quantity, 0);
    return (
        (
            itemCount === 0
            ? null
            :   <div className="fixed right-4 bottom-4">
                    <div className="relative">                        
                        <div className="flex justify-center items-center [background:linear-gradient(45deg,#FFFFFF,theme(colors.white)_50%,#FFFFFF)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.white)_80%,_theme(colors.accent)_86%,_theme(colors.accent)_90%,_theme(colors.accent)_94%,_theme(colors.white))_border-box] border border-transparent animate-border w-16 h-16 rounded-2xl bg-white shadow-xl focus-visible:outline-none focus-visible:ring focus-visible:ring-accent transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-x-8 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-12">
                            <Link href="/resources/cart">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                                </svg>
                            </Link>
                        </div>
                        <div className="absolute -top-2 -right-2  bg-black text-white rounded-xl font-serif font-medium text-lg w-8 h-8 flex items-center justify-center border-2 border-white tracking-tighter">
                            {itemCount}
                        </div>
                    </div>
                </div>
        )
    )
}