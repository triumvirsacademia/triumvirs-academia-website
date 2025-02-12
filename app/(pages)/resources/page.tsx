'use client'

import ProductCard from './ProductCard';
import { products } from './Products';
import { Product } from './Product';

export default function Resources() {
    
    return (
        <div>
            <div className="mb-8 md:mb-16">
                <div className="flex justify-center items-center h-32 md:h-64 py-24 md:py-48 bg-white">
                    <div className="hidden md:block relative">
                        <h1 className="text-[9rem] font-bold tracking-tighter">Resources</h1>
                        <span className="absolute -right-20 bottom-[3.5rem] h-[0.0625rem] bg-black w-[50rem]"></span>
                        <span className="absolute -right-[3px] bottom-[1rem] h-[10.5rem] bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-8 -top-5 h-64 w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[5.25rem] left-24 h-16 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="md:hidden block relative">
                        <h1 className="text-7xl font-bold tracking-tighter">Resources</h1>
                        <span className="absolute -right-10 bottom-[9px] h-[1px] bg-black w-96"></span>
                        <span className="absolute -right-0.5 -bottom-3 h-24 bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-4 -top-5 h-32 w-32 md:h-64 md:w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[60px] left-12 h-10 bg-black w-[1px]"></span>
                    </div>
                    <div className="w-[5vw]"></div>
                </div>
            </div>
            <section>
                <div className="flex flex-col justify-center items-center text-2xl font-medium tracking-tighter">
                    <p className="mb-4 w-[80vw] md:w-[60vw] 3xl:w-[72rem]">We offer a <C>wide</C> variety of subjects (taught in small groups), so that you can have the most <C>consistent</C> experience across all your studies.</p>
                    <p className="mb-4 w-[80vw] md:w-[60vw] 3xl:w-[72rem]">Each VCE subject will be offered at <C>$40/hour</C>, with further enquiries about the Olympiad courses, whilst the SAT preparation is <C>complimentary</C> with subjects.</p>
                    <p className="mb-4 w-[80vw] md:w-[60vw] 3xl:w-[72rem]">We are starting the week <C>beginning</C> the <C>13th of January 2025</C>, and hope to wrap up content around the winter holidays, so you can <C>efficiently</C> learn all the content whilst saving time to <C>savour</C> all the fun Year 12 has to bring.</p>
                </div>
            </section>
            <main className="container mx-auto p-4">
                <section className='mb-8 py-8 md:py-16'>
                    <div className="flex justify-center items-center h-32 my-8 md:my-16">
                        <div className="relative">
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Notes</h2>
                            <span className="absolute -right-8 bottom-[7px] md:bottom-[10px] h-[0.0625rem] bg-black w-44 md:w-[16rem]"></span>
                            <span className="absolute -right-[1px] md:-right-[2px] -bottom-2 md:-bottom-4 h-16 md:h-24 bg-black w-[0.0625rem]"></span>
                        </div>
                        <div className="md:w-[40vw]"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {products.filter((product: Product) => product.id.substring(0,4) === 'note').map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
                <section className='mb-8 py-8 md:py-16'>
                    <div className="flex justify-center items-center h-32 my-8 md:my-16">
                        <div className="relative">
                            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">English</h2>
                            <span className="absolute -right-8 bottom-[7px] md:bottom-[10px] h-[0.0625rem] bg-black w-56 md:w-[20rem]"></span>
                            <span className="absolute -right-[1px] md:right-0 -bottom-2 md:-bottom-4 h-16 md:h-24 bg-black w-[0.0625rem]"></span>
                        </div>
                        <div className="md:w-[40vw]"></div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {products.filter((product: Product) => product.id.substring(0,3) === 'eng').map((product: Product) => (
                        <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </section>
            </main>
        </div>
    )
}

function C({children}: {children: React.ReactNode}) {
    return(<span className="text-accent">{children}</span>)
}