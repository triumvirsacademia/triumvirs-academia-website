import Image from "next/image"

export default function Home() {
    return (
        <>
            <div className="relative">
                <div className="absolute top-10 left-20 w-[calc(40vw/3)] h-[calc(40vw/3)] 3xl:h-64 3xl:w-64">
                    <Image src="/triumvirs_academia_logo_clear.png" alt="Triumvirs Academia Logo" fill={true} />
                </div>
                <div className="absolute flex h-[100vh] w-[100vw] justify-center items-center">
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
                <div className="absolute h-fit -bottom-[80vh] w-[100vw] flex justify-center">
                    <div className="font-serif text-4xl tracking-[-0.06em]">
                        Trademark Slogan
                    </div>
                </div>
            </div>
        </>
    )
}