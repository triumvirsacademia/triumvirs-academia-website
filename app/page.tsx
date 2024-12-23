import Image from "next/image"
import Link from "next/link"
import SubjectList from "./subject-list"
import Footer from "./footer"

export default function Home() {
    return (
        <>
            <div className="relative h-screen">
                <div className="absolute top-4 md:top-8 left-10 md:left-20 w-32 h-32 md:w-48 md:h-48 3xl:h-64 3xl:w-64">
                    <Image src="/triumvirs_academia_logo_clear.png" alt="Triumvirs Academia Logo" fill={true} />
                </div>
                <div className="absolute flex h-screen w-screen justify-center items-center">
                    <div className="hidden md:block">
                        <div className="flex w-[42rem] lg:w-[884px] justify-between h-[10.75rem]">
                            <div className="relative text-[9rem] font-bold tracking-tighter">Triumvirs
                                <span className="absolute -left-10 bottom-[0.75rem] h-[0.0625rem] bg-black w-[42rem]"></span>
                            </div>
                        </div>
                        <div className="relative flex w-[42rem] lg:w-[884px] justify-between h-[10.75rem] items-end">
                            <div></div>
                            <div className="relative">
                                <div className="text-[9rem] font-bold tracking-tighter">Academia</div>
                                <span className="absolute -left-10 bottom-[3.5rem] h-[0.0625rem] bg-black w-[42rem]"></span>
                                <span className="absolute left-0 bottom-[1rem] h-[10.5rem] bg-black w-[0.0625rem]"></span>
                                <div className="absolute right-8 bottom-24 h-64 w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                                <span className="absolute bottom-[22rem] right-40 h-[50vh] bg-black w-[0.0625rem]"></span>
                            </div>
                        </div>
                    </div>
                    <div className="block md:hidden">
                        <div className="flex w-[22rem] justify-between">
                            <div className="relative text-7xl font-bold tracking-tighter">Triumvirs
                                <span className="absolute -left-8 bottom-[10px] h-[0.0625rem] bg-black w-[22rem]"></span>
                            </div>
                        </div>
                        <div className="relative flex w-[22rem] justify-between items-end h-16">
                            <div></div>
                            <div className="relative">
                                <div className="text-7xl font-bold tracking-tighter">Academia</div>
                                <span className="absolute -left-8 bottom-[10px] h-[0.0625rem] bg-black w-[22rem]"></span>
                                <span className="absolute left-0 -top-[1px] h-24 bg-black w-[0.0625rem]"></span>
                                <div className="absolute right-0 bottom-8 h-32 w-32 md:h-64 md:w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                                <span className="absolute bottom-40 right-16 h-[50vh] bg-black w-[0.0625rem]"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute h-fit bottom-[10vh] w-screen flex justify-center">
                    <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
                        <div className="text-center">                            
                            <div className="font-serif tracking-tighter text-3xl md:text-4xl">A reinvention of 
                                <span className="inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                                    <ul className="pl-2 block animate-text-slide text-left leading-tight [&_li]:block">
                                        <li>education</li>
                                        <li>mentorship</li>
                                        <li>communication</li>
                                        <li>mindset</li>
                                        <li>achievement</li>
                                        <li aria-hidden="true">education</li>
                                    </ul>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center mt-16 mb-16'>
                <div className='relative flex justify-start'>
                    <Link href="/sign-up"><p className="text-7xl md:text-9xl font-bold tracking-tighter hover:text-accent flex items-center justify-end">Sign up<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-[90px] md:size-32 pt-2">
                                    <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg></p></Link>
                    <span className="absolute -left-4 md:-left-16 bottom-[19px] h-[1px] bg-black w-80 md:w-[40rem]"></span>
                </div>
            </div>
            <div className="flex justify-center items-center py-16">
                <iframe className="w-[calc(100vw-2rem)] aspect-video md:w-[64vw]" src="https://www.youtube.com/embed/pf8DL67PGK4?si=SgcNgYk6rJDDxCDf" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            </div>
            <section className="relative h-[36rem] md:h-[48rem]">
                <div className="absolute flex justify-center top-32 w-screen">
                    <div className="relative text-7xl md:text-[9rem] font-bold tracking-tighter">
                        About
                        <span className="absolute -right-10 md:-right-16 bottom-[10px] md:bottom-5 h-[1px] bg-black w-64 md:w-[32rem]"></span>
                        <span className="absolute -right-[3px] -bottom-3 md:-bottom-5 h-24 md:h-[10.5rem] bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className='w-0 md:w-[5vw] lg:w-[10vw] xl:w-[20vw]'></div>
                </div>
                <div className="relative top-56 md:top-96 w-full max-w-6xl mx-auto px-4 md:px-6">
                    <div className="flex flex-col text-2xl md:text-4xl tracking-tighter gap-2 md:gap-4">
                        <div><span className="font-serif font-normal">3.</span> Camberwell Grammar duxes</div>
                        <div><span className="font-serif font-normal">2.</span> International Olympians in Biology and Chemistry</div>
                        <div><span className="font-serif font-normal">1.</span> Final goal: to guide you on your academic journey through Year 12, so you can spend more time on the things you enjoy the most.</div>
                        <Link className="font-serif font-normal flex justify-end items-center hover:text-accent" href="/about">
                            - Joel, Jerry and Chris
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-6 md:size-12 pt-1">
                                <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>
            <SubjectList />
            <Footer />
        </>
    )
}