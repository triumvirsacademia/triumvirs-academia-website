import Image from "next/image"
import SubjectList from "./subject-list"

export default function Home() {
    return (
        <>
            <div className="relative h-screen">
                <div className="absolute top-10 left-20 w-[calc(40vw/3)] h-[calc(40vw/3)] 3xl:h-64 3xl:w-64">
                    <Image src="/triumvirs_academia_logo_clear.png" alt="Triumvirs Academia Logo" fill={true} />
                </div>
                <div className="absolute flex h-screen w-screen justify-center items-center">
                    <div>
                        <div className="flex w-[884px] justify-between h-[10.75rem]">
                            <div className="relative text-[9rem]  font-bold tracking-tighter">Triumvirs
                                <span className="absolute -left-10 bottom-[0.75rem] h-[0.0625rem] bg-black w-[42rem]"></span>
                            </div>
                        </div>
                        <div className="flex w-[884px] justify-between h-[10.75rem] items-end">
                            <div className="border-r border-black"></div>
                            <div>
                                <div className="relative text-[9rem] font-bold tracking-tighter">
                                    Academia
                                    <span className="absolute -left-10 bottom-[3.5rem] h-[0.0625rem] bg-black w-[42rem]"></span>
                                    <span className="absolute left-0 bottom-[1rem] h-[10.5rem] bg-black w-[0.0625rem]"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute h-fit bottom-[4rem] w-screen flex justify-center">
                    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
                        <div className="text-center">                            
                            <div className="font-serif tracking-tighter text-3xl md:text-4xl">A reinvention of  
                                <span className="inline-flex flex-col h-[calc(theme(fontSize.3xl)*theme(lineHeight.tight))] md:h-[calc(theme(fontSize.4xl)*theme(lineHeight.tight))] overflow-hidden">
                                    <ul className="pl-3 block animate-text-slide text-left leading-tight [&_li]:block">
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
            <SubjectList />
        </>
    )
}