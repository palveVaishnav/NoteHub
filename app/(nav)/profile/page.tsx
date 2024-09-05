"use Client"

export default function Profile() {
    return (
        <div className="grid grid-rows-12 grid-flow-col gap-2 p-4 h-screen">
            <div className="bg-green-500 row-span-12 col-span-3">
                panel
            </div>
            <div className="bg-yellow-500 row-span-1 col-span-9">
                upper
            </div>
            <div className="bg-red-500 row-span-11 col-span-9">
                Files
            </div>
        </div>
    )
}



