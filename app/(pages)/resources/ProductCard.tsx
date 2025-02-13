// components/ProductCard.tsx
'use client';

import { Product } from './Product';
import { useCart } from './UseCart';
import { useState } from 'react';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
    const { addToCart } = useCart();
    const [active, setActive] = useState(false)
    
        const togglePopup = () => {
            setActive(!active);
        }

    return (
        <div>
            <div className="p-8 [background:linear-gradient(45deg,#FFFFFF,theme(colors.white)_50%,#FFFFFF)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.white)_80%,_theme(colors.accent)_86%,_theme(colors.accent)_90%,_theme(colors.accent)_94%,_theme(colors.white))_border-box] border border-transparent animate-border rounded-2xl bg-white shadow-xl focus-visible:outline-none focus-visible:ring focus-visible:ring-accent transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-x-8 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-12">
                {/* <img src={product.image} alt={product.name} className="w-full h-48 object-cover" /> */}
                <div className='flex justify-between items-start'>
                    <h2 className="text-4xl font-semibold mt-2 tracking-tighter">{product.name}</h2>
                    <div className="w-24 md:w-32 flex justify-center items-center">
                        <div className="rounded-[8rem] border border-black w-24 h-24 md:h-32 md:w-32 bg-white z-10 flex justify-center items-center">
                            <p className="tracking-tighter text-5xl md:text-6xl font-serif font-bold bg-gradient-to-r from-black via-[#682D6A] via-30% to-[#BD19C2] bg-clip-text text-transparent p-1">${product.price}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between space-x-2 mt-4">
                    <button onClick={togglePopup} className="inline-flex justify-center text-2xl font-medium tracking-tighter transition-colors duration-150 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring focus-visible:ring-accent">
                        <div className="flex items-center justify-end">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </button>
                    <button onClick={() => addToCart(product)} className="inline-flex justify-center text-2xl font-medium tracking-tighter transition-colors duration-150 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring focus-visible:ring-accent">
                        <div className="flex items-center justify-end">
                            Add to cart
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
            {active && (
                <div>
                    {/* Dimmed Background */}
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${
                            active ? "opacity-100" : "opacity-0"
                        }`}
                        onClick={togglePopup}
                        ></div>
                    <div
                        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
                            active ? "opacity-100" : "opacity-0"
                        }`}
                        >

                        {/* Modal Content */}
                        <div className="fixed inset-0 z-50 flex items-center justify-center">
                        <div className="max-w-s lg:max-w-2xl p-12 [background:linear-gradient(45deg,#FFFFFF,theme(colors.white)_50%,#FFFFFF)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.white)_80%,_theme(colors.accent)_86%,_theme(colors.accent)_90%,_theme(colors.accent)_94%,_theme(colors.white))_border-box] border border-transparent animate-border rounded-2xl bg-white shadow-xl focus-visible:outline-none focus-visible:ring focus-visible:ring-accent transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-x-8 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-12">
                                <div className="relative w-fit">
                                    <h2 className="text-4xl md:text-5xl tracking-tighter font-bold mb-4">{product.name}</h2>
                                </div>                                
                                <ul className="mb-2 font-serif text-lg md:text-xl tracking-tighter list-disc pl-4">
                                {product.desc.map((x, index) => (
                                    <li key={index}>{x}</li>
                                ))}
                                </ul>
                                <div className="flex justify-end">
                                    <button
                                        onClick={togglePopup}
                                        className="rounded-lg hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
                                        >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        
    );
};

export default ProductCard;