export function FileGrid() {
    return (
        <div className="grid grid-cols-4 gap-4">
            {divArray}
        </div>
    )
}

const divArray = Array.from({ length: 200 }, (_, idx) => (
    <div
        key={idx}
        className="border min-h-52 rounded-3xl p-4 shadow-md hover:shadow-xl cursor-pointer MainGrad">
        Hello
    </div>
))
