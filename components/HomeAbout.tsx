import { ArrowRightCircle } from "lucide-react"
import { Button } from "./ui/button"
import { AvatarIcon, GitHubLogoIcon } from "@radix-ui/react-icons"

export default function Abouthome() {
    return (
        <div className="p-5 md:px-36">
            <div className="grid place-content-center Rborder rounded-3xl p-20 overflow-hidden MainGrad text-white">
                <div className="text-2xl md:text-[3em] font-mono font-semibold p-4 md:p-8">
                    {'Free And Open-Source Platform'}
                </div>
                <div className="flex gap-2 justify-center p-4 md:text-3xl items-center md:gap-4">
                    <span>
                        {'Use'}
                    </span>
                    <ArrowRightCircle />
                    <span>
                        {'Contribute'}
                    </span>
                    <ArrowRightCircle />
                    <span>
                        {'grow'}
                    </span>
                </div>
                <div className="p-4 grid grid-cols-2 gap-4 place-content-center">
                    <Button variant={'outline'} className="md:py-4 border-black hover:bg-primary text-black hover:text-white flex items-center gap-2">
                        <AvatarIcon />
                        Sign up
                    </Button>
                    <Button className="flex items-center gap-2">
                        <GitHubLogoIcon />
                        GitHub
                    </Button>
                </div>
                <div className="grid place-content-center py-10 ">
                    <Button variant={'secondary'} className="rounded-full p-8 bg-gradient-to-l from-yellow-200 to-orange-500 z-10">
                        Download App
                    </Button>
                    <Button variant={'secondary'} className="rounded-full p-8 bg-transparent border -translate-y-[4em] -translate-x-4 -z-5">
                        {''}
                    </Button>
                </div>
            </div>
        </div>
    )
}