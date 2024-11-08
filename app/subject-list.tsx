export const metadata = {
    title: 'Unconventional Tabs - Cruip Tutorials',
    description: 'Page description',
  }
import Tabs from './tabs'
  
  const tabs = [
    {
      title: 'Mathematics',
      tag: 'VCE & Olympiad',
      excerpt: "Often the area of expertise of most, yet never the area of most confidence. It is not the mathematics that is hard, it is your mindset that needs to be hardened.",
      link: '#0'
    },
    {
      title: 'Science',
      tag: 'VCE & Olympiad',
      excerpt: "The often overlooked side of STEM minds, science is always a newer field for most. But you should not be new to achieving great things in science.",
      link: '#0'
    },
    {
      title: 'Other',
      tag: 'VCE & University',
      excerpt: "The place for those who are lost (everyone). Guiding English to Economics and miscellaneous decisions for the future, you will finally be able to fully understand yourself.",
      link: '#0'
    },
  ]
  
  export default function SubjectList() {
    return (
      <main className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden">
        <div className="absolute flex justify-center top-[20vh] text-[9rem] font-bold tracking-tighter w-screen">
            <div className='w-[20vw]'></div>
            <div className="relative">
                Academia
                <span className="absolute -right-20 bottom-[3.5rem] h-[0.0625rem] bg-black w-[50rem]"></span>
                <span className="absolute right-0 bottom-[1rem] h-[10.5rem] bg-black w-[0.0625rem]"></span>
            </div>
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
          <div className='absolute left-20 top-8'>
            <Tabs tabs={tabs} />
          </div>
        </div>
      </main>
    )
  }