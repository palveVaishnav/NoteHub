import { MixIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import { DownloadCloud, Share2Icon, ThumbsDownIcon, ThumbsUpIcon, UploadCloud } from "lucide-react";

export default function FeatureIntro() {
    return (
        <div className="grid p-4 mt-5">
            <div className="flex items-center gap-2 text-2xl md:text-3xl">
                <MixIcon />
                <p className="font-bold">Explore Features</p>
            </div>
            <div className="text-xl font-mono">
                This are the Basic features that notehub allows out of the box,
            </div>
            {/* <div className="grid justify-start p-4 grid-cols-2 gap-2">
                <div className="grid gap-2 ">
                    <Button className="flex items-center border p-2 gap-1 rounded-xl w-full md:py-10" >
                        <UploadCloud />
                        <p>Upload</p>
                    </Button>
                    <Button className="flex items-center border p-2 gap-1 rounded-xl w-full md:py-10" >
                        <DownloadCloud />
                        <p>Download</p>
                    </Button>
                    <Button className="flex items-center border p-2 gap-1 rounded-xl w-full md:py-10" >
                        <Share2Icon />
                        <p>Share</p>
                    </Button>
                    <Button className="flex items-center border p-2 gap-1 rounded-xl w-full md:py-10" >
                        <ThumbsUpIcon />
                        <p>Like</p>
                    </Button>
                    <Button className="flex items-center border p-2 gap-1 rounded-xl w-full md:py-10" >
                        <ThumbsDownIcon />
                        <p>Dislike</p>
                    </Button>
                </div>
                <div className="grid md:place-content-center">
                    <img src="./folder.gif" className="p-4" />
                </div> */}
            {/* </div> */}


        </div >
    )
}