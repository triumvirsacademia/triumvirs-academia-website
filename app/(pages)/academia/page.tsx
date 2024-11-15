import SubjectCard from "./subject-card"

export default function Academia() {
    return (
        <div>
            <div>
                <h1 className="text-[9rem] font-bold tracking-tighter">Academia</h1>
                <p className="tracking-tighter">“At [Your Business Name], we are dedicated to helping students develop into independent thinkers and confident problem-solvers. With a focus on curiosity and clarity, our tutoring fosters an environment where students do not just memorize—they genuinely understand, question, and engage with their subjects. Guided by experienced tutors who are passionate about nurturing a love for learning, we support each student&apos;s unique path to success, whether they are strengthening core skills or aiming for top-tier achievements. We believe in empowering students to approach challenges with insight and resilience, skills that extend far beyond the classroom.”</p>
            </div>
            <section className="mb-8" id="mathematics">
                <h1 className="text-7xl font-bold tracking-tighter">Mathematics</h1>
                <div className="max-w-xs mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-7xl">
                    <SubjectCard title="Specialist Mathematics" unit="34" link="#0">We are specialists specialising in special students specialising in Specialist Mathematics.</SubjectCard>
                    <SubjectCard title="Mathematical Methods" unit="34" link="#0">We are methodologists methodically crafting methodologies to cover the methods of Mathematical Methods.</SubjectCard>
                    <SubjectCard title="UMEP Mathematics" unit="EX" link="#0">Triumvirs Academia vows to uphold our prowess in the field of mathematics.</SubjectCard>
                    <SubjectCard title="Specialist Mathematics" unit="12" link="#0">We are specialists specialising in special students specialising in Specialist Mathematics.</SubjectCard>
                    <SubjectCard title="Mathematical Methods" unit="12" link="#0">We are methodologists methodically crafting methodologies to cover the methods of Mathematical Methods.</SubjectCard>
                    <SubjectCard title="Olympiad Mathematics" unit="EX" link="#0">Triumvirs Academia vows to uphold our prowess in the field of mathematics.</SubjectCard>
                </div>
            </section>
            <section className="mb-8" id="science">
                <h1 className="text-7xl font-bold tracking-tighter">Science</h1>
                <div className="max-w-xs mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-7xl">
                    <SubjectCard title="VCE Biology" unit="34" link="#0">We are specialists specialising in special students specialising in Specialist Mathematics.</SubjectCard>
                    <SubjectCard title="VCE Chemistry" unit="34" link="#0">We are methodologists methodically crafting methodologies to cover the methods of Mathematical Methods.</SubjectCard>
                    <SubjectCard title="VCE Physics" unit="34" link="#0">Triumvirs Academia vows to uphold our prowess in the field of mathematics.</SubjectCard>
                    <SubjectCard title="VCE Biology" unit="12" link="#0">We are specialists specialising in special students specialising in Specialist Mathematics.</SubjectCard>
                    <SubjectCard title="VCE Chemistry" unit="12" link="#0">We are methodologists methodically crafting methodologies to cover the methods of Mathematical Methods.</SubjectCard>
                    <SubjectCard title="VCE Physics" unit="12" link="#0">Triumvirs Academia vows to uphold our prowess in the field of mathematics.</SubjectCard>
                    <SubjectCard title="Olympiad Biology" unit="EX" link="#0">We are specialists specialising in special students specialising in Specialist Mathematics.</SubjectCard>
                    <SubjectCard title="Olympiad Chemistry" unit="EX" link="#0">We are methodologists methodically crafting methodologies to cover the methods of Mathematical Methods.</SubjectCard>
                </div>
            </section>
            <section className="mb-8" id="other">
                <h1 className="text-7xl font-bold tracking-tighter">Other</h1>
                <div className="max-w-xs mx-auto grid gap-6 lg:grid-cols-3 items-start lg:max-w-7xl">
                    <SubjectCard title="VCE English" unit="34" link="#0">We are specialists specialising in special students specialising in Specialist Mathematics.</SubjectCard>
                    <SubjectCard title="VCE Economics" unit="34" link="#0">We are methodologists methodically crafting methodologies to cover the methods of Mathematical Methods.</SubjectCard>
                    <SubjectCard title="SAT Preparation" unit="EX" link="#0">Triumvirs Academia vows to uphold our prowess in the field of mathematics.</SubjectCard>
                    <SubjectCard title="VCE English" unit="12" link="#0">We are specialists specialising in special students specialising in Specialist Mathematics.</SubjectCard>
                    <SubjectCard title="VCE Economics" unit="12" link="#0">We are methodologists methodically crafting methodologies to cover the methods of Mathematical Methods.</SubjectCard>
                    <SubjectCard title="International Applications" unit="EX" link="#0">Triumvirs Academia vows to uphold our prowess in the field of mathematics.</SubjectCard>
                </div>
            </section>
        </div>
    )
}