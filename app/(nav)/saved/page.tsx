import { CollectionFile } from "@/components/FileGrid";
import HomeSections from "@/components/HomeSections";
import { RandomColor } from "@/components/RandomColor";



export default function Saved() {
    // console.log(RandomColor());
    return (
        <div className="grid grid-cols-3">
            {Array.from({ length: 8 }, (_, idx) => (
                <div key={idx} className="mx-4 my-8 border  p-4 rounded-xl grid gap-2 hover:bg-[--fourth]">
                    <div className="grid grid-cols-2 gap-2">
                        {CollectionFile()}
                        {CollectionFile()}
                        {CollectionFile()}
                        {CollectionFile()}
                    </div>
                    <span>{"Collection Name"}</span>
                </div>
            ))}
        </div>
    )
}