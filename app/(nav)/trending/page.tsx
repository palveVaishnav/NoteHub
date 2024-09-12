"use Client"
import { CollectionFile, NFiles } from "@/components/FileGrid";
import { ArrowDownCircleIcon, File, MessageCircle, ThumbsUp } from "lucide-react";

const sections = [
    {
        name: "DSA",
        // Files
    },
    {
        name: "Rust",
        // Files
    },
    {
        name: "ReactJS",
        // Files
    },
    {
        name: "AWS",
        // Files
    },
    {
        name: "DSA",
        // Files
    },
    {
        name: "Hono",
        // Files
    },
    {
        name: "Next",
        // Files
    },
]

export default function Trending() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 place-content-center m-10  gap-4">
                <div className="p-2 border rounded-xl">
                    <span className="text-xl font-extrabold">{"Trending Files"}</span>
                    <div className="grid grid-cols-2 gap-4 p-2">
                        {NFiles(10)}
                    </div>
                </div>
                <div className="p-2 border rounded-xl">
                    <span className="text-xl font-extrabold">{"Trending Collections"}</span>
                    <div className="grid grid-cols-2 gap-4 p-2">
                        {Array.from({ length: 10 }, (_, idx) => (
                            <TrendingCollection key={idx} />

                        ))}
                    </div>
                </div>
            </div>
            <div className="p-20">
                <div className="grid w-full border rounded-xl">
                    <div className="flex">
                        {sections.map((section) => (
                            <button key={section.name} className="border py-2 px-4">
                                {section.name}
                            </button>
                        ))}
                    </div>
                    <div className="grid grid-cols-4 gap-4 p-2 mt-4">
                        {NFiles(10)}
                    </div>
                </div>
            </div>
        </div>
    )
}





function RankList(title: string) {
    return (
        <div className="mx-20">
            <span className="text-xl font-extrabold">{title}</span>
            {Array.from({ length: 10 }, (_, idx) => (
                <div
                    key={idx}
                    className="flex items-center m-2 gap-2"
                >
                    {idx + 1 + ". "}
                    <div className="flex flex-1 items-start justify-between rounded-md testBg py-8 px-5">
                        <div className="flex items-center">
                            <File />
                            {"File Name"}
                        </div>
                        <div className="flex items-center gap-2">
                            <ThumbsUp />
                            <MessageCircle />
                            <ArrowDownCircleIcon />
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

function TrendingCollection() {
    return (
        <div className="grid border bg-[#33333367] rounded-xl p-2 shadow-sm hover:shadow-md cursor-pointer">
            <div className="h-52 grid grid-cols-2 gap-2">
                {CollectionFile()}
                {CollectionFile()}
                {CollectionFile()}
                {CollectionFile()}
            </div>
            <div className="font-mono grid">
                <div className="font-mono">
                    {'Collection Name'}
                </div>
                <div className="text-sm font-thin">
                    {'UserName'}
                </div>
            </div>
        </div>
    )
}