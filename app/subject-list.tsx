import Tabs from './tabs'
  
const tabs = [
  {
    title: 'Mathematics',
    tag: 'VCE',
    excerpt: "Often the area of expertise of most, yet never the area of most confidence. It is not the mathematics that is hard, it is your mindset that needs to be hardened.",
    link: '/academia#mathematics'
  },
  {
    title: 'Science',
    tag: 'VCE & Olympiad',
    excerpt: "The often overlooked side of STEM minds, science is always a newer field for most. But you should not be new to achieving great things in science.",
    link: '/academia#science'
  },
  {
    title: 'Other',
    tag: 'VCE & Tests',
    excerpt: "The place for those who are lost (everyone). Guiding English to Economics and miscellaneous decisions for the future, you will finally be able to fully understand yourself.",
    link: '/academia#other'
  },
]

export default function SubjectList() {
  return (
    <main className="relative bg-white h-[48rem] md:h-[64rem]">
      <div className="absolute flex justify-center top-32 w-screen">
          <div className='w-0 md:w-[5vw] lg:w-[10vw] xl:w-[20vw]'></div>
          <div className="relative text-7xl md:text-[9rem] font-bold tracking-tighter">
              Academia
              <span className="absolute -right-10 md:-right-16 bottom-[9px] md:bottom-5 h-[1px] bg-black w-96 md:w-[48rem]"></span>
              <span className="absolute right-0 -bottom-3 md:-bottom-5 h-24 md:h-[10.5rem] bg-black w-[0.0625rem]"></span>
          </div>
      </div>
      <div className="relative top-56 md:top-96 w-full max-w-6xl mx-auto px-4 md:px-6 py-6 md:py-24">
        <div className='flex md:absolute left-20 top-8'>
          <Tabs tabs={tabs} />
        </div>
      </div>
    </main>
  )
}