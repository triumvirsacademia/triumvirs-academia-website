import Link from "next/link"

export default function SubjectCard({title, unit, link, children}: {title: string, unit: string, link: string, children: React.ReactNode}) {
    return (
        <div className="[background:linear-gradient(45deg,#FFFFFF,theme(colors.white)_50%,#FFFFFF)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.white)_80%,_theme(colors.accent)_86%,_theme(colors.accent)_90%,_theme(colors.accent)_94%,_theme(colors.white))_border-box] border border-transparent animate-border w-full items-stretch rounded-2xl bg-white shadow-xl focus-visible:outline-none focus-visible:ring focus-visible:ring-accent min-[480px]:flex transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-x-8 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-12">
            <div className="flex-1 flex flex-col p-6">
                <div className="flex-1">
                    <header className="my-4 relative">
                        {title.split(" ").map((x, index) => (
                            <div key={index} className="relative">
                                <h2 className="pl-2 text-4xl font-semibold tracking-tighter">{x}</h2>
                                <span className="absolute -left-1 bottom-[0.4375rem] h-[0.0625rem] bg-black w-[16rem]"></span>
                                <span className="absolute left-[0.58rem] bottom-[0rem] h-[3rem] bg-black w-[0.0625rem]"></span>
                            </div>
                        ))}
                            <div className="absolute -top-6 right-0 w-32 flex justify-center items-center">
                                <div className="rounded-[8rem] border border-black h-32 w-32 bg-white z-10 flex justify-center items-center">
                                    <p className="text-6xl font-serif font-bold bg-gradient-to-r from-black via-[#682D6A] via-30% to-[#BD19C2] bg-clip-text text-transparent">{unit}</p>
                                </div>
                            </div>
                            <span className="absolute right-16 -top-[2.5rem] h-4 bg-black w-[0.0625rem]"></span>
                    </header>
                    <div className="font-serif text-2xl tracking-tighter mt-14 mb-10">
                        <p>{children}</p>
                    </div>
                </div>
                <div className="flex justify-end space-x-2">
                    <Link className="inline-flex justify-center text-lg font-medium tracking-tighter transition-colors duration-150 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring focus-visible:ring-accent" href={link}>
                        <div className="flex items-center justify-end">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}