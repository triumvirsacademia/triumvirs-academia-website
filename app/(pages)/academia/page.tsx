import SubjectCard from "./subject-card"

export default function Academia() {
    return (
        <div>
            <div className="mb-16">
                <div className="flex justify-center items-center h-64 py-48 bg-white">
                    <div className="relative">
                        <h1 className="text-[9rem] font-bold tracking-tighter">Academia</h1>
                        <span className="absolute -right-20 bottom-[3.5rem] h-[0.0625rem] bg-black w-[50rem]"></span>
                        <span className="absolute right-0 bottom-[1rem] h-[10.5rem] bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-8 -top-5 h-64 w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[5.25rem] left-24 h-16 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="w-[10vw]"></div>
                </div>
            </div>
            <section>
                <div className="flex flex-col justify-center items-center">
                    <p className="text-2xl font-medium tracking-tighter mb-4 w-[60vw] 3xl:w-[72rem]">We offer a <C>wide</C> variety of subjects, so that you can have the most <C>consistent</C> experience across all your studies.</p>
                </div>
            </section>
            <section className="mb-8 py-16" id="mathematics">
                <div className="flex justify-center items-center h-32 my-16">
                    <div className="relative">
                        <h2 className="text-7xl font-bold tracking-tighter">Mathematics</h2>
                        <span className="absolute -right-8 bottom-[0.625rem] h-[0.0625rem] bg-black w-[32rem]"></span>
                        <span className="absolute -right-[0.125rem] -bottom-4 h-24 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="w-[40vw]"></div>
                </div>
                <div className="max-w-xs mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-7xl">
                    <SubjectCard title="Specialist Mathematics" unit="34" link="#0">We are specialists specialising in special students specialising in Specialist Mathematics.</SubjectCard>
                    <SubjectCard title="Mathematical Methods" unit="34" link="#0">We are methodologists methodically crafting methodologies to cover the methods of Mathematical Methods.</SubjectCard>
                    <SubjectCard title="UMEP Mathematics" unit="EX" link="#0">Triumvirs Academia vows to uphold our prowess in the field of mathematics.</SubjectCard>
                </div>
            </section>
            <section className="mb-8 py-16" id="science">
                <div className="flex justify-center items-center h-32 my-16">
                    <div className="relative">
                        <h2 className="text-7xl font-bold tracking-tighter">Science</h2>
                        <span className="absolute -right-8 bottom-[0.625rem] h-[0.0625rem] bg-black w-96"></span>
                        <span className="absolute -right-[0.125rem] -bottom-4 h-24 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="w-[40vw]"></div>
                </div>
                <div className="max-w-xs mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-7xl">
                    <SubjectCard title="VCE Biology" unit="34" link="#0">We are specialists specialising in special students specialising in Specialist Mathematics.</SubjectCard>
                    <SubjectCard title="VCE Chemistry" unit="34" link="#0">We are methodologists methodically crafting methodologies to cover the methods of Mathematical Methods.</SubjectCard>
                    <SubjectCard title="VCE Physics" unit="34" link="#0">Triumvirs Academia vows to uphold our prowess in the field of mathematics.</SubjectCard>
                    <SubjectCard title="Olympiad Biology" unit="EX" link="#0">We are specialists specialising in special students specialising in Specialist Mathematics.</SubjectCard>
                    <SubjectCard title="Olympiad Chemistry" unit="EX" link="#0">We are methodologists methodically crafting methodologies to cover the methods of Mathematical Methods.</SubjectCard>
                </div>
            </section>
            <section className="mb-8 py-16" id="other">
                <div className="flex justify-center items-center h-32 my-16">
                    <div className="relative">
                        <h2 className="text-7xl font-bold tracking-tighter">Other</h2>
                        <span className="absolute -right-8 bottom-[0.625rem] h-[0.0625rem] bg-black w-64"></span>
                        <span className="absolute -right-[0.1875rem] -bottom-4 h-24 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="w-[40vw]"></div>
                </div>
                <div className="max-w-xs mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-7xl">
                    <SubjectCard title="VCE English" unit="34" link="#0">We are specialists specialising in special students specialising in Specialist Mathematics.</SubjectCard>
                    <SubjectCard title="VCE Economics" unit="34" link="#0">We are methodologists methodically crafting methodologies to cover the methods of Mathematical Methods.</SubjectCard>
                    <SubjectCard title="SAT Preparation" unit="EX" link="#0">Triumvirs Academia vows to uphold our prowess in the field of mathematics.</SubjectCard>
                    <SubjectCard title="International Applications" unit="EX" link="#0">Triumvirs Academia vows to uphold our prowess in the field of mathematics.</SubjectCard>
                </div>
            </section>
        </div>
    )
}

function C({children}: {children: React.ReactNode}) {
    return(<span className="text-accent">{children}</span>)
}