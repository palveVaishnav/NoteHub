import { RandomColor } from "./RandomColor";
import { Skeleton } from "./ui/skeleton"

export function FileGrid() {
    return (
        <div className="grid grid-cols-4 gap-4">
            {divArray}
        </div>
    )
}

export function nGrid(n: number) {
    const thegrid = Array.from({ length: n }, (_, idx) => {
        const bg = RandomColor() + "47";
        return (
            <div
                key={idx}
                className="border min-h-52 rounded-3xl p-4 shadow-sm hover:shadow-xl cursor-pointer"
                style={{ backgroundColor: bg }}
            >
            </div>
        )
    });
    return thegrid;
}


const divArray = Array.from({ length: 200 }, (_, idx) => {
    const bg = RandomColor() + "47";
    return (
        <Skeleton
            key={idx}
            className="border min-h-52 rounded-3xl p-4 shadow-sm hover:shadow-xl cursor-pointer"
            style={{ backgroundColor: bg }}
        >
        </Skeleton>
    )
})
