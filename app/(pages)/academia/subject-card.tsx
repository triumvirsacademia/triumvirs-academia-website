'use client'

import { useState } from "react"
import Link from "next/link"

export default function SubjectCard({title, unit, time, points, children}: {title: string, unit: string, time: string, points: number[], children: React.ReactNode}) {
    const [active, setActive] = useState(false)

    const togglePopup = () => {
        setActive(!active);
    }

    const allPoints = [
        "Weekly 2 hour lessons which are recorded",
	 	"Weekly exam-style homework sheets to reinforce knowledge",
	 	"Complimentary CAS class teaching useful obscure commands",
	 	"Personalised feedback available out of class",
	 	"Access to assessment tasks and targeted guidance on which ones to complete",
	 	"Access to notes from a range of sources",
        (<span key={6}>Enquire for more at <Link href='mailto:jerry@triumvirsacademia.com' className="text-accent">jerry@triumvirsacademia.com</Link></span>),
        "Offered as complimentary help to anyone undertaking a class at Triumvirs Academia (not sold separately)",
    ]

    return (
        <div>
            <div className="[background:linear-gradient(45deg,#FFFFFF,theme(colors.white)_50%,#FFFFFF)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.white)_80%,_theme(colors.accent)_86%,_theme(colors.accent)_90%,_theme(colors.accent)_94%,_theme(colors.white))_border-box] border border-transparent animate-border w-96 items-stretch rounded-2xl bg-white shadow-xl focus-visible:outline-none focus-visible:ring focus-visible:ring-accent min-[480px]:flex transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-x-8 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-12">
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
                        <button onClick={togglePopup} className="inline-flex justify-center text-lg font-medium tracking-tighter transition-colors duration-150 ease-out hover:text-accent focus-visible:outline-none focus-visible:ring focus-visible:ring-accent">
                            <div className="flex items-center justify-end">
                                Learn more
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="size-4">
                                    <path fillRule="evenodd" d="M6.22 4.22a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06L8.94 8 6.22 5.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            {active && (
                <div>
                    {/* Dimmed Background */}
                    <div
                        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-500 ${
                            active ? "opacity-100" : "opacity-0"
                        }`}
                        onClick={togglePopup}
                        ></div>
                    <div
                        className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 ${
                            active ? "opacity-100" : "opacity-0"
                        }`}
                        >

                        {/* Modal Content */}
                        <div className="fixed inset-0 z-50 flex items-center justify-center">
                            <div className="bg-white rounded-lg pt-12 px-12 pb-10 shadow-xl max-w-2xl mx-auto">
                                <div className="relative w-fit">

                                    <h2 className="text-5xl tracking-tighter font-bold mb-4">{title + " " + unit}</h2>
                                    <span className="absolute -left-4 bottom-[6px] h-[0.0625rem] bg-black w-[24rem]"></span>
                                    <span className="absolute -right-8 bottom-[6px] h-[0.0625rem] bg-black w-[16rem]"></span>
                                </div>

                                <h3 className="font-semibold text-2xl tracking-tighter mb-2">{time}*</h3>
                                
                                <ul className="mb-2 font-serif text-xl tracking-tighter list-disc pl-4">
                                {points.map((x, index) => (
                                    <li key={index}>{allPoints[x]}</li>
                                ))}
                                </ul>
                                <p className="mb-2 font-serif tracking-tighter">*We are very flexible and open to suggestions for different times, or even new classes.</p>
                                <div className="flex justify-end">
                                    <button
                                        onClick={togglePopup}
                                        className="rounded-lg hover:text-accent focus:outline-none focus:ring-2 focus:ring-accent"
                                        >
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}