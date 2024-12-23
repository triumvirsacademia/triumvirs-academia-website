import Link from "next/link"

export default function Contact() {
    return (
        <div>
            <div className="mb-8 md:mb-16">
                <div className="flex justify-center items-center h-32 md:h-64 py-24 md:py-48 bg-white">
                    <div className="hidden md:block relative">
                        <h1 className="text-[9rem] font-bold tracking-tighter">Contact</h1>
                        <span className="absolute -right-20 bottom-[3.5rem] h-[0.0625rem] bg-black w-[36rem]"></span>
                        <span className="absolute -right-[3px] bottom-[1rem] h-[10.5rem] bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-8 -top-5 h-64 w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[5.25rem] left-24 h-16 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="md:hidden block relative">
                        <h1 className="text-7xl font-bold tracking-tighter">Contact</h1>
                        <span className="absolute -right-10 bottom-[10px] h-[1px] bg-black w-72"></span>
                        <span className="absolute -right-[2px] -bottom-3 h-24 bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-8 -top-5 h-32 w-32 md:h-64 md:w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[60px] left-8 h-10 bg-black w-[1px]"></span>
                    </div>
                    <div className="w-[10vw] md:w-[15vw]"></div>
                </div>
            </div>
            <section className="mb-8 md:py-8">
                <div className="flex justify-center items-center h-32 md:my-8">
                    <div className="relative">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Email</h2>
                        <span className="absolute -right-8 bottom-[7px] md:bottom-[10px] h-[0.0625rem] bg-black w-44 md:w-[16rem]"></span>
                        <span className="absolute right-0 -bottom-2 md:-bottom-4 h-16 md:h-24 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="w-72 md:w-[32rem]"></div>
                </div>
                <div className="flex justify-center w-screen">
                    <div className="flex flex-col text-2xl md:text-4xl font-serif tracking-tighter gap-2 md:gap-4 w-96 md:w-[40rem]">
                        <div><span className="font-sans font-medium">Joel: </span>TBC</div>
                        <div><span className="font-sans font-medium">Jerry: </span><Link href="mailto:jerry@triumvirsacademia.com" className="text-accent">jerry@triumvirsacademia.com</Link></div>
                        <div><span className="font-sans font-medium">Chris: </span><Link href="mailto:chris@triumvirsacademia.com" className="text-accent">chris@triumvirsacademia.com</Link></div>
                    </div>
                </div>
            </section>
            <section className="mb-8 md:py-8">
                <div className="flex justify-center items-center h-32 md:my-8">
                    <div className="relative">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Phone</h2>
                        <span className="absolute -right-8 bottom-[7px] md:bottom-[10px] h-[0.0625rem] bg-black w-44 md:w-[16rem]"></span>
                        <span className="absolute -right-[1px] -bottom-2 md:-bottom-4 h-16 md:h-24 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="w-72 md:w-[32rem]"></div>
                </div>
                <div className="flex justify-center w-screen">
                    <div className="flex flex-col text-2xl md:text-4xl font-serif tracking-tighter gap-2 md:gap-4 w-96 md:w-[40rem]">
                        <div><span className="font-sans font-medium">General: </span><Link href="tel:+61493496789" className="text-accent">+61 493 496 789</Link></div>
                    </div>
                </div>
            </section>
        </div>
    )
}