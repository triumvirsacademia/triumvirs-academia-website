interface Triumvir {
    name: string;
    atar: string;
    subjects: object;
    extra: object;
  }

export default function About() {
    const triumvirs = [
        {
            name: "Joel Cheok",
            atar: "99.95",
            subjects:  {
                "English": "46",
                "Specialist Mathematics": "50",
                "Mathematical Methods": "50 (Premier's)",
                "Physics": "50",
                "UMEP Mathematics": "5.0",
                "Chemistry": "50",
                "Biology": "50",
                "Chinese as a Second Language": "29",
            },
            extra: {
                "International Biology Olympiad": "Silver",
                "AMC": "Medal",
            },
        },
        {
            name: "Jerry Jin",
            atar: "99.95",
            subjects:  {
                "English Language": "46",
                "Specialist Mathematics": "50",
                "Mathematical Methods": "50 (Premier's)",
                "Chinese as a Second Language": "43",
                "UMEP Mathematics": "5.0",
                "Chemistry": "50",
                "Physics": "46",
            },
            extra: {
                "International Chemistry Olympiad": "Bronze",
                "School Formal": "Cutest Couple",
            },
        },
        {
            name: "Chris Lu",
            atar: "99.95",
            subjects:  {
                "English": "50",
                "Specialist Mathematics": "42",
                "Mathematical Methods": "49",
                "Chinese as a Second Language": "40",
                "UMEP Mathematics": "4.5",
            },
            extra: {
                "Australian Economics Olympiad": "Top 40",
                "Debating": "Beast",
            },
        },
    ]

    return (
        <div>
            <div className="mb-8 md:mb-16">
                <div className="flex justify-center items-center h-32 md:h-64 py-24 md:py-48 bg-white">
                    <div className="hidden md:block relative">
                        <h1 className="text-[9rem] font-bold tracking-tighter">About</h1>
                        <span className="absolute -right-20 bottom-[3.5rem] h-[0.0625rem] bg-black w-[36rem]"></span>
                        <span className="absolute -right-[3px] bottom-[1rem] h-[10.5rem] bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-8 -top-5 h-64 w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[5.25rem] left-24 h-16 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="md:hidden block relative">
                        <h1 className="text-7xl font-bold tracking-tighter">About</h1>
                        <span className="absolute -right-10 bottom-[10px] h-[1px] bg-black w-72"></span>
                        <span className="absolute -right-[2px] -bottom-3 h-24 bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-8 -top-5 h-32 w-32 md:h-64 md:w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[60px] left-8 h-10 bg-black w-[1px]"></span>
                    </div>
                    <div className="w-[10vw] md:w-[15vw]"></div>
                </div>
            </div>
            <section>
                <div className="flex flex-col justify-center items-center text-2xl font-medium tracking-tighter">
                    <p className="mb-4 w-[80vw] md:w-[60vw] 3xl:w-[72rem]">Triumvirs Academia is run by <C>students</C> for <C>students</C>. We hope to bring a <C>new</C> understanding to what learning entails. <C>Gone</C> are the days of messy resources, confusing money-back guarantees and tutors who take all the credit for the good outcomes, and push the blame for bad outcomes onto students.</p>
                    <p className="mb-4 w-[80vw] md:w-[60vw] 3xl:w-[72rem]">The best thing to know is that we were in the <C>same</C> position you are in right now. We are here to guide you through it <C>effortlessly</C>, so that you not only hit those academic targets, but are set up for a <C>fulfilling</C> end to high school and a <C>proper</C> start to adulthood.</p>
                    <p className="mb-4 w-[80vw] md:w-[60vw] 3xl:w-[72rem]">We graduated in <C>2024</C> and below are our ATARs, study scores and some extra things on the side. We hope we are <C>guides</C> not only for VCE, but for the <C>other</C> parts of life students tend to forget about.</p>
                </div>
            </section>
            <Triumvirs triumvir={triumvirs[0]} />
            <Triumvirs triumvir={triumvirs[1]} />
            <Triumvirs triumvir={triumvirs[2]} />
        </div>
    )
}

function C({children}: {children: React.ReactNode}) {
    return(<span className="text-accent">{children}</span>)
}

function Triumvirs({triumvir}: {triumvir: Triumvir}) {
    const subjectLength1 = `h-[${((Object.keys(triumvir.subjects).length)*(1.75)+5).toFixed(2)}rem]`
    const subjectLength2 = `h-[${((Object.keys(triumvir.subjects).length)*2.25+8).toFixed(2)}rem]`

    // "h-[13.75rem] h-[17.25rem] h-[19.00rem] sm:h-[19.25rem] sm:h-[23.75rem] sm:h-[26.00rem]"

    return (
        <section className="flex flex-col lg:flex-row justify-center items-center py-16 lg:py-32">
                <div className="w-48 sm:w-72 lg:w-96">
                    <div className="rounded-[9rem] border border-black w-48 h-48 sm:h-72 sm:w-72 bg-white z-10 flex justify-center items-center">
                        <p className="text-6xl sm:text-8xl font-serif font-bold bg-gradient-to-r from-black via-[#682D6A] via-30% to-[#BD19C2] bg-clip-text text-transparent">{triumvir.atar}</p>
                    </div>
                </div>
                <div className="relative w-96  sm:w-[33rem] text-lg sm:text-3xl font-medium tracking-tighter">
                    <div className="relative">
                        <h2 className="pl-12 sm:pl-8 font-bold text-6xl sm:text-8xl tracking-tighter">{triumvir.name}</h2>
                        <span className="absolute left-8 sm:left-0 bottom-[9px] sm:bottom-[13px] h-[0.0625rem] bg-black w-80 sm:w-[36rem]"></span>
                    </div>
                    <div className="relative">
                        <span className={`absolute left-8 sm:left-0 bottom-0 ${subjectLength1} sm:${subjectLength2} bg-black w-[0.0625rem]`}></span>
                        <ul className="pl-12 sm:pl-8 pt-1 sm:pt-4 pb-3 sm:pb-6">
                            {Object.entries(triumvir.subjects).map(([key, value]) => (
                                <li key={key}>
                                {key} <span className="font-normal font-serif">{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="relative">
                        <span className="absolute -left-8 top-0 h-[0.0625rem] bg-black w-96 sm:w-[40rem]"></span>
                        <span className="absolute left-8 sm:left-0 top-0 h-24 sm:h-32 bg-black w-[0.0625rem]"></span>
                        <ul className="pl-12 sm:pl-8 pt-5 sm:pt-8">
                            {Object.entries(triumvir.extra).map(([key, value]) => (
                                <li key={key}>
                                {key} <span className="font-normal font-serif">{value}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
    )
}