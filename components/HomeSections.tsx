import { nGrid } from "./FileGrid";

export default function HomeSections(title: string, n: number) {
    return (
        <div>
            <span
                className="text-2xl font-semibold font-mono"
            >{title}</span>
            <div className="grid grid-cols-3 gap-2">
                {nGrid(n)}
            </div>
        </div>
    )
}