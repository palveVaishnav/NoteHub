import { cn } from "@/lib/utils";
import { ArrowRightIcon, DownloadIcon, Share2Icon, ThumbsDownIcon, ThumbsUpIcon, UploadIcon } from "lucide-react";
import { ReactNode } from "react";
import { Button } from "./ui/button";

export default function CustomBento() {
    return (
        <div className="grid grid-cols-6 gap-4 py-10 ">
            {features.map((feature, idx) => (
                <FeatureCard key={idx} {...feature} />
            ))}
        </div>
    )
}

function FeatureCard({
    name,
    className,
    background,
    Icon,
    description,
    href,
    cta,
}: {
    name: string;
    className: string;
    background: ReactNode;
    Icon: any;
    description: string;
    href: string;
    cta: string;
}) {
    return (
        <div
            key={name}
            className={cn(
                "group relative flex flex-col justify-between overflow-hidden rounded-xl",
                // light styles
                "bg-[#] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
                // dark styles
                "transform-gpu  dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
                className,
            )}
        >
            {/* Background Image */}
            <div className="h-full w-full transition-all duration-300 ease-in-out group-hover:scale-105">
                {background}
            </div>
            <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
                <Icon className="h-12 w-12 origin-left transform-gpu  transition-all duration-300 ease-in-out group-hover:scale-75" />
                <h3 className="text-xl font-semibold ">
                    {name}
                </h3>
                <p className="max-w-lg text-neutral-700">{description}</p>
            </div>

            <div
                className={cn(
                    "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100",
                )}
            >
                <Button variant={'secondary'} asChild size="sm" className="pointer-events-auto text-green-500 hover:border-black">
                    <a href={href}>
                        {cta}
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </a>
                </Button>
            </div>
            <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
        </div>
    )
}



const features = [
    {
        name: "Share Your Best",
        description: "Share what you are good at. Help others become better!",
        href: "#",
        className: "col-span-6 md:col-span-3",
        cta: "Upload now",
        Icon: UploadIcon,
        background: (
            <div className="w-full h-full">
                <img src={'./11.png'} className="h-full w-full" />
            </div>
        )
    },
    {
        name: "Get Best From others!!",
        description: "Download and learn from the Best person you know !",
        href: "#",
        className: "col-span-6 md:col-span-3",
        cta: "Download Now",
        Icon: DownloadIcon,
        background: (
            <div className="w-full h-full">
                <img src={'./13.png'} className="h-full w-full" />
            </div>
        )
    },
    {
        name: "Show Gratitude",
        description: "Give a like to the notes you loved !!",
        href: "#",
        className: "col-span-6 md:col-span-2",
        cta: "View Likes",
        Icon: ThumbsUpIcon,
        background: (
            <div className="w-full h-full">
                <img src={'./6.png'} className="h-full w-full" />
            </div>
        )
    },
    {
        name: "Not Satisfed !!",
        description: "Share your dissappointment as well !!",
        href: "#",
        className: "col-span-6 md:col-span-2",
        cta: "Try it",
        Icon: ThumbsDownIcon,
        background: (
            <div className="w-full h-full">
                <img src={'./3.png'} className="h-full w-full" />
            </div>
        )
    },
    {
        name: "Share with your Friends/Socials",
        description: "Share your collection with your friends !!",
        href: "#",
        className: "col-span-6 md:col-span-2",
        cta: "Share now",
        Icon: Share2Icon,
        background: (
            <div className="w-full h-full">
                <img src={'./7.png'} className="h-full w-full" />
            </div>
        )
    },
]
