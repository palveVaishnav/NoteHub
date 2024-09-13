// "use client"
export default function Navigation() {
    return (
        <div>
            <nav className={`fixed w-full z-10 top-0 start-0 backdrop-blur-sm`}

            >
                <div className="flex border-b border-gray-300 justify-between mx-28 p-2">
                    <div className="flex items-center">
                        <img src="./logo.png" className="w-10" />
                        <span
                            className="font-semibold text-xl"
                        >NoteHub</span>
                    </div>
                    <div className="flex items-center">
                        <a href="/home"
                            className="px-2 py-4"
                        >Home</a>
                        <a href="/dashboard"
                            className="px-2 py-4"
                        >Dashbaord</a>
                        <a href="/about"
                            className="px-2 py-4"
                        >About</a>
                        <a href="/contact"
                            className="px-2 py-4"
                        >Contact</a>
                    </div>
                    <div className="flex items-center">
                        <button className="border h-fit flex items-center p-1 px-4 rounded-2xl font-semibold shadow-lg shadow-slate-200">
                            Sign in
                        </button>
                    </div>
                </div>
            </nav>
        </div>
    )
}


