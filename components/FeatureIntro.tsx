import { DoubleArrowRightIcon, MixIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { ArrowRightIcon, DownloadCloud, Share2Icon, ThumbsDownIcon, ThumbsUpIcon, UploadCloud } from "lucide-react";

export default function FeatureIntro() {
    return (
        <div className="m-2 grid p-2">
            <div className="p-4 flex items-center gap-2 text-2xl md:text-3xl">
                        <MixIcon />
                        <p className="font-bold">Explore Features</p>
                    </div>
            <div className="text-[3em] font-mono font-bold">
                This are the Basic features that notehub allows out of the box,
            </div>
            <div className="grid justify-start p-4 grid-cols-3 gap-2 md:gap-4 ">
                <Button variant={'ghost'} className="flex items-center border p-2 gap-1 rounded-xl w-full md:py-10" >
                    <UploadCloud />
                    <p>Upload</p>
                </Button>
                <Button variant={'ghost'} className="flex items-center border p-2 gap-1 rounded-xl w-full md:py-10" >
                    <DownloadCloud />
                    <p>Download</p>
                </Button>
                <Button variant={'ghost'} className="flex items-center border p-2 gap-1 rounded-xl w-full md:py-10" >
                    <Share2Icon />
                    <p>Share</p>
                </Button>
                <Button variant={'ghost'} className="flex items-center border p-2 gap-1 rounded-xl w-full md:py-10" >
                    <ThumbsUpIcon />
                    <p>Like</p>
                </Button>
                <Button variant={'ghost'} className="flex items-center border p-2 gap-1 rounded-xl w-full md:py-10" >
                    <ThumbsDownIcon />
                    <p>Dislike</p>
                </Button>
            </div>

        </div>
    )
}