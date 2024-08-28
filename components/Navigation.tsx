"use client"
import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Navigation() {
    const [showMenu, setShowMenu] = useState(false)
    return (
        <div className="flex justify-around p-6 md:mx-28">

            <div className={`flex justify-around Yborder w-3/5  
                            flex-row-reverse md:flex-row
                            ${showMenu ? 'items-start' : 'items-center'}
                            `}

            >
                <div className="grid">
                    <Logo />
                </div>
                <div>
                    <div
                        className={`border p-2 shadow-sm rounded-md md:hidden`}
                        onClick={() => setShowMenu(!showMenu)}
                    >
                        <HamburgerMenuIcon />
                    </div>
                    <div
                        className={`gap-2 font-extralight 
                                md:flex 
                                ${showMenu ? 'grid top-20' : 'hidden'}
                                `}
                    >
                        <Button variant={'ghost'}>
                            Home
                        </Button>
                        <Button variant={'ghost'}>
                            Trending
                        </Button>
                        <Button variant={'ghost'}>
                            Contact Us
                        </Button>
                        <Button variant={'ghost'}>
                            About
                        </Button>
                    </div>
                </div>
            </div>
            <div className="w-2/5 flex md:justify-end">
                <Button
                    className="shadow-xl rounded-full"
                >
                    SignUp
                </Button>
            </div>
        </div>
    )
}


