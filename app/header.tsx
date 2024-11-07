import Image from "next/image"
import Link from "next/link"

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
            <div className="flex justify-between items-center">
                <div className="pl-8">
                    <Link href={"/"}>
                        <div className="relative lg:w-32 lg:h-32">
                            <Image
                                src="/triumvirs_academia_logo_clear.png"
                                fill={true}
                                alt="Triumvirs Academia Logo"
                            />
                        </div>
                    </Link>
                </div>
                <div className="flex border-b border-black h-fit pl-20 pr-32">
                    {
                        links.map((x, index) => (
                            <HeaderLink key={index} link={x.link} name={x.name} current={x.current} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

function HeaderLink({link, name, current}: {link: string, name: string, current: boolean}) {
    return (
        <Link href={link} className={`${current ? "blue" : "text-3xl"}`}>
            <div className="text-3xl font-medium tracking-[-0.06em] leading-[22px] ml-12">
                {name}
            </div>
        </Link>
    )
}