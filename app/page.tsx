import Header from "./header"

export default function Home() {
    return (
        <>
            <Header />
            <div>
                Welcome to Triumvirs Academia
                <div className="flex w-[1080px] justify-between">
                    <div className="text-[144px] font-bold tracking-tighter leading-[0px] left-32">Triumvirs</div>
                    <div></div>
                </div>
                <div className="flex w-[1080px] justify-between">
                    <div></div>
                    <div className="text-[144px] font-bold tracking-tighter right-32">Academia</div>
                </div>
            </div>
        </>
    )
}