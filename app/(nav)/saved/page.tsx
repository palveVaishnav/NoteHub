import HomeSections from "@/components/HomeSections";
import { RandomColor } from "@/components/RandomColor";



export default function Saved() {
    // console.log(RandomColor());
    return (
        <div className="grid gap-2">
            <span
                className="text-xl"
            >Your Hubs</span>
            <div className="w-full grid grid-cols-4 gap-2">
                {Array.from({ length: 5 }, (_, idx) => {
                    const bg = RandomColor() + "17";
                    return (
                        <div
                            key={idx}
                            className="min-h-12 rounded-md grid place-content-center hover:shadow-md cursor-pointer p-2"
                            style={{ backgroundColor: bg }}
                        >
                            {'Collection Name'}
                            <br />
                            {'12 Files'}
                        </div>
                    )
                })}
            </div>

            <div className="grid grid-cols-2">
                <div className="mx-4 my-8 border p-4 rounded-xl hover:SecondGrad hover:text-white">
                    {HomeSections("Collection-1", 2)}
                </div>
                <div className="mx-4 my-8 border p-4 rounded-xl hover:SecondGrad hover:text-white">
                    {HomeSections("Collection-2", 4)}
                </div>
                <div className="mx-4 my-8 border p-4 rounded-xl hover:SecondGrad hover:text-white">
                    {HomeSections("Collection-3", 3)}
                </div>
                <div className="mx-4 my-8 border p-4 rounded-xl hover:SecondGrad hover:text-white">
                    {HomeSections("Collection-4", 6)}
                </div>
                <div className="mx-4 my-8 border p-4 rounded-xl hover:SecondGrad hover:text-white">
                    {HomeSections("Collection-5", 1)}
                </div>
            </div>
        </div>
    )
}