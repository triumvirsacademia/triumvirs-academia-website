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
                        <div className="relative flex w-[884px] justify-between h-[10.75rem] items-end">
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
            <div className="relative">
                <span className="absolute bottom-24 h-[0.0625rem] bg-black w-[50vw] left-0"></span>
                <div className="w-screen flex justify-center items-center">
                    <div className="rounded-[8rem] border border-black h-64 w-96 bg-white z-10 flex justify-center items-center">
                        <p className="text-[8rem] font-serif font-bold bg-gradient-to-r from-black via-[#682D6A] via-30% to-[#BD19C2] bg-clip-text text-transparent">99.95</p>
                    </div>
                </div>
                <span className="absolute top-24 h-[0.0625rem] bg-black w-[50vw] right-0"></span>
            </div>
            <SubjectList />
        </>
    )
}