import SubjectCard from "./subject-card"

export default function Academia() {
    return (
        <div>
            <div className="mb-8 md:mb-16">
                <div className="flex justify-center items-center h-32 md:h-64 py-24 md:py-48 bg-white">
                    <div className="hidden md:block relative">
                        <h1 className="text-[9rem] font-bold tracking-tighter">Academia</h1>
                        <span className="absolute -right-20 bottom-[3.5rem] h-[0.0625rem] bg-black w-[50rem]"></span>
                        <span className="absolute right-0 bottom-[1rem] h-[10.5rem] bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-8 -top-5 h-64 w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[5.25rem] left-24 h-16 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="md:hidden block relative">
                        <h1 className="text-7xl font-bold tracking-tighter">Academia</h1>
                        <span className="absolute -right-10 bottom-[10px] h-[1px] bg-black w-96"></span>
                        <span className="absolute right-0 -bottom-3 h-24 bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-8 -top-5 h-32 w-32 md:h-64 md:w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[60px] left-8 h-10 bg-black w-[1px]"></span>
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
            <section className="mb-8 py-8 md:py-16" id="mathematics">
                <div className="flex justify-center items-center h-32 my-8 md:my-16">
                    <div className="relative">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Mathematics</h2>
                        <span className="absolute -right-8 bottom-[7px] md:bottom-[10px] h-[0.0625rem] bg-black w-80 md:w-[30rem]"></span>
                        <span className="absolute -right-[1px] md:-right-[2px] -bottom-2 md:-bottom-4 h-16 md:h-24 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="md:w-[40vw]"></div>
                </div>
                <div className="max-w-xs mx-auto grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start lg:max-w-3xl xl:max-w-7xl">
                    <SubjectCard title="Specialist Mathematics" unit="3/4" time="Sunday 1:30pm-3:30pm" points={[0,1,2,3,4,5]}>Mainly taught by Joel Cheok and Jerry Jin. Also suitable for advanced Unit 1/2 students.</SubjectCard>
                    <SubjectCard title="Mathematical Methods" unit="3/4" time="Saturday 1:30pm-3:30pm" points={[0,1,2,3,4,5]}>Taught by Joel Cheok, Jerry Jin and Chris Lu. Also suitable for advanced Unit 1/2 students.</SubjectCard>
                </div>
            </section>
            <section className="mb-8 py-8 md:py-16" id="science">
                <div className="flex justify-center items-center h-32 my-8 md:my-16">
                    <div className="relative">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Science</h2>
                        <span className="absolute -right-8 bottom-[7px] md:bottom-[10px] h-[0.0625rem] bg-black w-56 md:w-[20rem]"></span>
                        <span className="absolute -right-[1px] md:-right-[2px] -bottom-2 md:-bottom-4 h-16 md:h-24 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="md:w-[40vw]"></div>
                </div>
                <div className="max-w-xs mx-auto grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start lg:max-w-3xl xl:max-w-7xl">
                    <SubjectCard title="VCE Biology" unit="3/4" time="Monday 6:30pm-8:30pm" points={[0,1,3,4,5]}>Taught by Joel Cheok (International Biology Olympiad Silver Medallist, RAW 50).</SubjectCard>
                    <SubjectCard title="VCE Chemistry" unit="3/4" time="Tuesday 6:30pm-8:30pm" points={[0,1,3,4,5]}>Taught by Jerry Jin and Joel Cheok. Also suitable for advanced Unit 1/2 students.</SubjectCard>
                    <SubjectCard title="VCE Physics" unit="3/4" time="Wednesday 6:30pm-8:30pm" points={[0,1,3,4,5]}>Taught by Joel Cheok and Jerry Jin. Also suitable for advanced Unit 1/2 students.</SubjectCard>
                    <SubjectCard title="Olympiad Biology" unit="EX" time="Enquire for more" points={[6]}>Taught by Joel Cheok for Year 11s and below. Also suitable for non-VCE students.</SubjectCard>
                    <SubjectCard title="Olympiad Chemistry" unit="EX" time="Enquire for more" points={[6]}>Taught by Jerry Jin for Year 11s and below. Also suitable for non-VCE students.</SubjectCard>
                </div>
            </section>
            <section className="mb-8 py-8 md:py-16" id="other">
                <div className="flex justify-center items-center h-32 my-8 md:my-16">
                    <div className="relative">
                        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter">Other</h2>
                        <span className="absolute -right-8 bottom-[7px] md:bottom-[10px] h-[0.0625rem] bg-black w-44 md:w-[16rem]"></span>
                        <span className="absolute -right-[1px] md:-right-[3px] -bottom-2 md:-bottom-4 h-16 md:h-24 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="md:w-[40vw]"></div>
                </div>
                <div className="max-w-xs mx-auto grid gap-6 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-start lg:max-w-3xl xl:max-w-7xl">
                    <SubjectCard title="VCE English" unit="3/4" time="Thursday 6:30pm-8:30pm" points={[0,1,3,4,5]}>Taught by Chris Lu (only Section B and C). Also suitable for all Unit 1/2 students.</SubjectCard>
                    <SubjectCard title="SAT Preparation" unit="EX" time="Complimentary" points={[7]}>Taught by Chris Lu (1570) and Jerry Jin (1590). Complimentary advice with other subjects.</SubjectCard>
                </div>
            </section>
        </div>
    )
}

function C({children}: {children: React.ReactNode}) {
    return(<span className="text-accent">{children}</span>)
}