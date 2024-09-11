import { FileGrid } from "@/components/FileGrid"
import HomeSections from "@/components/HomeSections"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Home() {
    return (
        <div className="p-2">
            <div className="flex w-full max-w-sm items-center space-x-2">
                <Input type="title" placeholder="Enter title ..." />
                <Button type="submit">Search</Button>
            </div>
            <div className="grid grid-cols-2">
                <div className="mx-4 my-8 border p-4 rounded-xl hover:MainGrad hover:text-white">
                    {HomeSections("DSA", 6)}
                </div>
                <div className="mx-4 my-8 border p-4 rounded-xl hover:MainGrad hover:text-white">
                    {HomeSections("NextJS", 6)}
                </div>
                <div className="mx-4 my-8 border p-4 rounded-xl hover:MainGrad hover:text-white">
                    {HomeSections("ReactJS", 6)}
                </div>
                <div className="mx-4 my-8 border p-4 rounded-xl hover:MainGrad hover:text-white">
                    {HomeSections("AWS", 6)}
                </div>
                <div className="mx-4 my-8 border p-4 rounded-xl hover:MainGrad hover:text-white">
                    {HomeSections("DSA", 6)}
                </div>
                <div className="mx-4 my-8 border p-4 rounded-xl hover:MainGrad hover:text-white">
                    {HomeSections("Hono", 6)}
                </div>
                <div className="mx-4 my-8 border p-4 rounded-xl hover:MainGrad hover:text-white">
                    {HomeSections("Rust", 6)}
                </div>
            </div>
        </div>
    )
}


