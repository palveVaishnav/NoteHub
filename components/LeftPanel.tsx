'use client'
import Logo from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { BellDot, Bookmark, Home, LogOut, MessageSquareMore, Plus, SearchCheckIcon, SquarePlus, TrendingUp, UserRound } from "lucide-react";
import { useRouter } from "next/navigation";
const PanelButtons = [
    {
        name: "Home",
        link: '/home',
        icon: <Home />
    },
    {
        name: "Add File",
        link: '/upload',
        icon: <SquarePlus />
    },
    {
        name: "Trending",
        link: '/trending',
        icon: <TrendingUp />
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
    },
    {
        name: "Profile",
        link: '/profile',
        icon: <UserRound />
    },
]


export default function LeftPanel() {
    const router = useRouter();
    return (
        <>
            <div className="flex items-center w-full">
                <Logo />{'NoteHub'}
            </div>
            <div className="flex flex-col gap-2 p-8 justify-start w-full">
                {PanelButtons.map((item) => (
                    <Button
                        variant={'ghost'}
                        key={item.name}
                        className="flex items-center  py-8 rounded-3xl w-full justify-start gap-2"
                        onClick={() => router.push(item.link)}
                    >
                        {item.icon}
                        {item.name}
                    </Button>
                ))}
            </div>

            <div className="flex flex-col gap-4 p-8 justify-start max-w-full">
                <Button
                    variant={'ghost'}
                    className="flex items-center  py-8 rounded-3xl w-full justify-start gap-2 "
                >
                    <MessageSquareMore />
                    {'Help & Support'}
                </Button>
                <Button
                    variant={'ghost'}
                    className="flex items-center  py-8 rounded-3xl w-full justify-start gap-2 "
                >
                    <LogOut />
                    {'Log out'}
                </Button>
            </div>
        </>
    )
}