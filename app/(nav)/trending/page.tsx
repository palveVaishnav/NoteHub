import { ArrowDownCircleIcon, File, MessageCircle, ThumbsUp } from "lucide-react";

export default function Trending() {
    return (
        <div className="w-full">
            <div className="grid grid-cols-2 place-content-center m-10  gap-4">
                {RankList('Trending Files')}
                {RankList('Trending Hubs')}
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