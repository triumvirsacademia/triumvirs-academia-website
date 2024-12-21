export const metadata = {
    title: 'FAQ',
    description: 'Page description',
  }
  
import Accordion from "./accordian"
import Link from "next/link"
  
  export default function FAQ() {
  
    const faqs = [
      {
        title: "Can I do a free trial lesson?",
        text: <span>Yes, please contact us at <Link href='mailto:jerry@triumvirsacademia.com' className="text-accent">jerry@triumvirsacademia.com</Link> to organise a time.</span>,
        active: false,
      },
      {
        title: "How is payment done?",
        text: "Bank transfer monthly, i.e. in advance for four classes.",
        active: false,
      },
      {
        title: "What is the format of the classes?",
        text: "Online recorded group classes.",
        active: false,
      },
      {
        title: "How much are the classes?",
        text: "$40 an hour for Unit 3/4 VCE classes. Enquire for Olympiad mentoring pricing.",
        active: false,
      },
      {
        title: "Can I join after the first week?",
        text: "Yes, but we recommend you join as early as possible for the best effect.",
        active: false,
      },
    ]
  
    return (
        <main>
            <div className="mb-8 md:mb-16">
                <div className="flex justify-center items-center h-32 md:h-64 py-24 md:py-48 bg-white">
                    <div className="hidden md:block relative">
                        <h1 className="text-[9rem] font-bold tracking-tighter">FAQs</h1>
                        <span className="absolute -right-20 bottom-[3.5rem] h-[0.0625rem] bg-black w-[36rem]"></span>
                        <span className="absolute -right-[3px] bottom-[1rem] h-[10.5rem] bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-8 -top-5 h-64 w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[5.25rem] left-24 h-16 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="md:hidden block relative">
                        <h1 className="text-7xl font-bold tracking-tighter">FAQs</h1>
                        <span className="absolute -right-10 bottom-[10px] h-[1px] bg-black w-72"></span>
                        <span className="absolute -right-[2px] -bottom-3 h-24 bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-8 -top-5 h-32 w-32 md:h-64 md:w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[60px] left-8 h-10 bg-black w-[1px]"></span>
                    </div>
                    <div className="w-[10vw]"></div>
                </div>
            </div>
            <div className="relative flex flex-col justify-center overflow-hidden">
                <div className="w-full max-w-2xl mx-auto px-4 md:px-6 pb-24">
        
                    <div className="divide-y divide-black">
                        {faqs.map((faq, index) => (
                        <Accordion key={index} title={faq.title} id={`faqs-${index}`} active={faq.active}>
                            {faq.text}
                        </Accordion>
                        ))}
                    </div>
        
                </div>
            </div>
        </main>
    )
  }