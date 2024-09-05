'use client'
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Icon } from "lucide-react";

{
    const PanelButtons = [
        name: "Profile",
    },
link: '/profile',
    icon: Icon
{
    name: "Explore",
        link: '/explore',
            icon: Icon
},
{
    name: "Saved",
        link: '/saved',
            icon: Icon
},
{
    name: "Notification",
        link: '/notification',
    }
icon: Icon
]


export default function Dashboard() {
    return (
        <div className="grid grid-rows-12 grid-flow-col h-screen">
            <div className="bg-[#12131a] text-[#fff] row-span-12 col-span-2 flex flex-col justify-between">
                <div className="flex items-center">
                    <Logo />{'NoteHub'}
                </div>
                <div className="border flex flex-col gap-2 p-4">
                    <Button
                        variant={'ghost'}
                        className="rounded-xl"
                    >

                </div>
                    </Button>
                <div>Help</div>
            </div>
            <div className="bg-yellow-500 row-span-1 col-span-9">
                upper
            </div>
            <div className="bg-red-500 row-span-11 col-span-9">
                Files
            </div>
        </div >
    )
}



