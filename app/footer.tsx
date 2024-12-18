import Link from "next/link"

export default function Footer() {
    return (
        <div className="flex flex-col md:flex-row items-center md:justify-start md:pl-16 gap-4 py-16 font-serif text-xl tracking-tighter">
            <Link className="hover:text-accent" href="/">Triumvirs Academia</Link>
            <Link className="hover:text-accent" href="/terms-of-service">Terms of Service</Link>
            <Link className="hover:text-accent" href="/privacy-policy">Privacy Policy</Link>
            <Link className="hover:text-accent" href="/returns-policy">Returns Policy</Link>
            <Link className="hover:text-accent" href="/faq">FAQ</Link>
        </div>
    )
}