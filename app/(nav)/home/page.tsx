import { NFiles } from "@/components/FileGrid"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DownloadIcon, File, FolderHeart, UserPlus2Icon } from "lucide-react"

const topStats = [
    {
        name: 'Files',
        number: 323211,
        icons: <File />,
    },
    {
        name: 'Collections',
        number: 6436,
        icons: <FolderHeart />,
    },
    {
        name: 'Downloads',
        number: 9902,
        icons: <DownloadIcon />,
    },
    {
        name: 'Users',
        number: 3465842,
        icons: <UserPlus2Icon />,
    },
]

export default function Home() {
    return (
        <div className="p-2 px-8">

            <div className="grid grid-flow-col justify-stretch items-center p-4 px-10 gap-4 ">
                {topStats.map((stat) => (
                    <a key={stat.name} className="grid place-content-center items-center border py-4 px-8 rounded-xl hover:bg-[#12131a] hover:text-[--fourth] shadow-sm cursor-pointer">
                        <div className="flex flex-col items-center gap-2">
                            <span>{stat.icons}</span>
                            <span>{stat.number}</span>
                            <span>{stat.name}</span>
                        </div>
                    </a>
                ))}
            </div>

            <div className="flex w-full items-center space-x-2 mt-8 px-8">
                <Input type="title" placeholder="Enter title ..." className="flex-1" />
                <Button type="submit">Search</Button>
            </div>

            <div className="grid grid-cols-4 gap-2 mt-5 p-4">
                {NFiles(30)}
            </div>
        </div>
    )
}


