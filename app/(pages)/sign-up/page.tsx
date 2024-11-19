import SignUpForm from "./form"


export default function SignUp() {
    return (
        <div className="py-32">
            {/* <div className="mb-8">
                <div className="flex justify-center items-center h-64 py-48 bg-white">
                    <div className="relative">
                        <h1 className="text-[9rem] font-bold tracking-tighter">Sign Up</h1>
                        <span className="absolute -right-20 bottom-[3.5rem] h-[0.0625rem] bg-black w-[50rem]"></span>
                        <span className="absolute -right-1 bottom-[1rem] h-[10.5rem] bg-black w-[0.0625rem]"></span>
                        <div className="absolute -left-8 -top-5 h-64 w-64 rounded-full bg-gradient-to-r from-[#737373] to-[#D9D9D9] mix-blend-difference"></div>
                        <span className="absolute -top-[5.25rem] left-24 h-16 bg-black w-[0.0625rem]"></span>
                    </div>
                    <div className="w-[10vw]"></div>
                </div>
            </div> */}
            <SignUpForm  />
        </div>
    )
}