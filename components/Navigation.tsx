"use client"

import { useEffect, useState } from "react"
import Logo from "./Logo"
import { Button } from "./ui/button"
import { SHARE_ENV } from "worker_threads"
import { useRouter } from 'next/navigation';


export default function Navigation() {
    const router = useRouter();
    const handleClick = () => {
        router.push('/dashboard')
    }
    const [showMenu, setShowmenu] = useState(false)
    return (
        <div>
            <nav className={`fixed w-full z-10 top-0 start-0 backdrop-blur-md shadow-sm`}

            >
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="/home" className="flex items-center space-x-3 rtl:space-x-reverse">
                        {/* <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" /> */}
                        <span className="self-center text-2xl font-semibold whitespace-nowrap">
                            <Logo />
                        </span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <Button
                            className="font-medium rounded-full text-sm px-4 py-2 text-center shadow-xl border"
                            onClick={handleClick}
                        >
                            Signin
                        </Button>
                        <Button
                            variant={'outline'}
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none "
                            onClick={() => setShowmenu(!showMenu)}

                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </Button>
                    </div>
                    <div
                        className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${showMenu ? '' : 'hidden'} text-white`}

                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                            <Button
                                variant={'secondary'}
                                onClick={() => {
                                    setShowmenu(!showMenu)
                                    router.push('/home')
                                }}
                            >
                                Home
                            </Button>
                            <Button
                                variant={'secondary'}
                                onClick={() => {
                                    setShowmenu(!showMenu)
                                    router.push('/home')
                                }}
                            // onClick={handleClick}
                            >
                                dashboard
                            </Button>
                            <Button
                                variant={'secondary'}

                                onClick={() => {
                                    setShowmenu(!showMenu)
                                    router.push('/home')
                                }}
                            >
                                Contact
                            </Button>
                            <Button
                                variant={'secondary'}
                                onClick={() => {
                                    setShowmenu(!showMenu)
                                    router.push('/home')
                                }}
                                className=''
                            >
                                About
                            </Button>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}


