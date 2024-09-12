import { ArrowBigDownDash, FileText, Heart } from "lucide-react";
import { RandomColor } from "./RandomColor";
export function NFiles(n: number) {
    const thegrid = Array.from({ length: n }, (_, idx) => {
        const bg = RandomColor() + "47";
        return (
            <div
                key={idx}
                className="grid gap-1"
            >
                <div>
                    {File()}
                </div>
                <div>
                    {FileUser()}
                </div>

            </div>
        )
    });
    return thegrid;
}

const FileInfo = {
    title: "NameOfFile",
    type: <FileText />,
    user: "userName",
    upload: "3 days ago",
    downloads: 234,
    likes: 21,
    tags: ["dsa", "java", "array"],
}

export const File = () => {
    const bg = RandomColor() + "47";
    return (
        <div
            className="border min-h-52 rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer
                        grid grid-rows-5 grid-cols-4 grid-flow-row group
                        relative
            "
            style={{ backgroundColor: bg }}
        >
            <div className="col-span-3">
                {FileInfo.title}
            </div>
            <div className="col-span-1">
                <article className="absolute top-1 right-1">
                    {FileInfo.type}
                </article>
            </div>
            <div className="row-span-3 col-span-4 flex justify-center items-center gap-4
                            invisible group-hover:visible
                ">
                <div className="flex items-center">
                    <ArrowBigDownDash />
                    {'44'}
                </div>
                <div className="flex items-center">
                    <Heart />
                    {'32'}
                </div>
            </div>
            <div className="row-span-1 col-span-4 flex gap-1 max-h-fit
                            invisible group-hover:visible
            ">
                {FileInfo.tags.map((tag) => (
                    <article
                        key={tag}
                        className="border flex items-center w-fit  px-1 rounded-md bg-gray-300 text-[--first] h-fit">
                        {tag}
                    </article>
                ))}
            </div>
        </div>
    )
}

export const FileUser = () => {
    return (
        <div className="flex justify-stretch gap-2 px-4">
            <div className="flex items-center">
                <img
                    src="https://avatar.iran.liara.run/public/"
                    className="w-8 h-8"
                />
            </div>
            <div className="flex-1 grid">
                <span
                    className="font-semibold"
                >{FileInfo.user}</span>
                <span
                    className="text-sm font-light"
                >{FileInfo.upload}</span>
            </div>
        </div>
    )
}

export const CollectionFile = () => {
    const bg = RandomColor() + "47";
    return (
        <div
            className="h-20 rounded-xl p-4 shadow-sm hover:shadow-md cursor-pointer"
            style={{ backgroundColor: bg }}
        >
            {FileInfo.title}
        </div>
    )
}