import Image from "next/image"
import Link from "next/link"
import Underline from "./nav-link";


class NewLink {
    name: string;
    link: string;
    current: boolean;

    constructor(name: string, link: string, current: boolean = false) {
        this.name = name;
        this.link = link
        this.current = current;
    }
}

const links = [
    new NewLink("About", "/about"),
    new NewLink("Academia", "/academia"),
    new NewLink("Resources", "/resources"),
    new NewLink("Sign Up", "/sign-up"),
]

export default function Header() {

    return (
        <>
            <div className="flex justify-between items-center border-b border-black z-0 bg-white">
                <div className="ml-8 lg:ml-24">
                    <Link href={"/"}>
                        <div className="flex items-center">
                            <div className="relative w-24 h-24 lg:w-32 lg:h-32">
                                <Image
                                    src="/triumvirs_academia_logo_clear.png"
                                    fill={true}
                                    alt="Triumvirs Academia Logo"
                                    />
                            </div>
                            <div className="hidden xl:block font-serif ml-4 pt-1 text-4xl tracking-tighter">
                                Triumvirs Academia
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="lg:flex pr-24 hidden">
                    {
                        links.map((x, index) => (
                            <div key={index} className="font-serif text-3xl tracking-tighter ml-12">
                                <Link href={x.link} className="relative group w-32 h-32 border border-transparent hover:border-transparent overflow-hidden">
                                    {x.name}
                                    <Underline href={x.link} className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform translate-y-[47px] transition-transform duration-700 ease-in-out group-hover:translate-y-[10px] group-hover:bg-accent z-20 [&.active]:translate-y-[10px] [&.active]:bg-accent" />
                                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-white transform translate-y-[47px] z-10"></span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
                <div className="group lg:hidden h-8 w-8 relative hover:cursor-pointer mr-8">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-8 w-8 stroke-1 stroke-black">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>

                        <div className="group-hover:block hidden absolute right-0 top-[3vh] z-10 text-md">
                            <div className="[background:linear-gradient(45deg,#FFFFFF,theme(colors.white)_50%,#FFFFFF)_padding-box,conic-gradient(from_var(--border-angle),theme(colors.white)_80%,_theme(colors.accent)_86%,_theme(colors.accent)_90%,_theme(colors.accent)_94%,_theme(colors.white))_border-box] border border-transparent animate-border items-stretch rounded-2xl bg-white shadow-xl focus-visible:outline-none focus-visible:ring focus-visible:ring-accent flex flex-col px-8 pt-6 pb-4 transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] data-[closed]:opacity-0 data-[enter]:duration-700 data-[enter]:data-[closed]:-translate-x-8 data-[closed]:absolute data-[leave]:duration-300 data-[leave]:data-[closed]:translate-x-12">
                                {
                                    links.map((x, index) => (
                                        <Link key={index} href={x.link} className="font-serif text-3xl tracking-tighter hover:text-accent mb-2"><Underline href={x.link} className="[&.active]:text-accent">{x.name}
                                            </Underline></Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}