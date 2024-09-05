'use client'
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { AvatarIcon } from "@radix-ui/react-icons";
import { BellDot, Bookmark, Icon, SearchCheckIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const PanelButtons = [
    {
        name: "Profile",
        link: '/profile',
        icon: <AvatarIcon />
    },
    {
        name: "Explore",
        link: '/explore',
        icon: <SearchCheckIcon />
    },
    {
        name: "Saved",
        link: '/saved',
        icon: <Bookmark />
    },
    {
        name: "Notification",
        link: '/notification',
        icon: <BellDot />
    }
]


export default function Dashboard() {
    const router = useRouter();
    return (
        <div className="grid grid-rows-12 grid-flow-col h-screen">
            <div className="bg-[#12131a] text-[#fff] row-span-12 col-span-2 flex flex-col justify-between w-full">
                <div className="flex items-center">
                    <Logo />{'NoteHub'}
                </div>
                <div className="flex flex-col gap-2 p-4">
                    {PanelButtons.map((item) => (
                        <Button
                            variant={'ghost'}
                            key={item.name}
                            className="flex items-center p-2 rounded-xl border"
                            onClick={() => router.push(item.link)}
                        >
                            {item.icon}
                            {item.name}
                        </Button>
                    ))}
                </div>
                <div>Help</div>
            </div>
            <div className="bg-yellow-500 row-span-1 col-span-9">
                upper
            </div>
            <div className=" row-span-11 col-span-9 grid grid-flow-col">
                <div className="bg-red-500">
                    {'Files'}
                </div>
                <div className="bg-gray-700">
                    {'File Details'}
                </div>
            </div>
        </div >
    )
}



