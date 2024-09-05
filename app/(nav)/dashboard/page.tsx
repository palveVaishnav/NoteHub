"use Client"

import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";

export default function Dashboard() {
    return (
        <div className="h-screen w-full">
            <div className="w-full h-full flex">
                <div className="w-1/5 h-full">
                    <div className="w-full md:grid gap-2 items-baseline p-2 Rborder h-full hidden">
                        <div
                            className="border self-start"
                        >
                            <Logo />
                        </div>
                        <div
                            className="border self-center"
                        >
                            <Button>One</Button>
                            <Button>One</Button>
                            <Button>One</Button>
                            <Button>One</Button>
                            <Button>One</Button>
                        </div>
                        <div
                            className="border self-end mb-12"
                        >
                            Help and logout
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-4/5 h-full Rborder">
                    <div className="w-full">
                        Two
                    </div>
                </div>
            </div>
        </div>
    )
}