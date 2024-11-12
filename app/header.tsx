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
    new NewLink("Contact", "/contact"),
]

export default function Header() {

    return (
        <>
            <div className="flex justify-between items-center border-b border-black z-0">
                <div className="pl-32">
                    <Link href={"/"}>
                        <div className="flex items-center">
                            <div className="relative lg:w-32 lg:h-32">
                                <Image
                                    src="/triumvirs_academia_logo_clear.png"
                                    fill={true}
                                    alt="Triumvirs Academia Logo"
                                    />
                            </div>
                            <div className="font-serif ml-4 pt-1 text-4xl tracking-tighter">
                                Triumvirs Academia
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="flex pl-8 pr-32">
                    {
                        links.map((x, index) => (
                            <div key={index} className="font-serif text-3xl tracking-[-0.06em] ml-12">
                                <Link href={x.link} className="relative group w-32 h-32 border border-transparent hover:border-transparent overflow-hidden">
                                    {x.name}
                                    <Underline href={x.link} className="absolute bottom-0 left-0 w-full h-[1px] bg-black transform translate-y-[47px] transition-transform duration-700 ease-in-out group-hover:translate-y-[10px] group-hover:bg-accent z-20 [&.active]:translate-y-[10px] [&.active]:bg-accent" />
                                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transform translate-y-[47px] z-10"></span>
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}