import DelButton from "./Button"


export default function TodoAppInfo({todoNum, delAll}) {

    return (
        <div className="flex justify-between items-center m-2">
            <div>
                <span className="uppercase"> {todoNum ? todoNum : "0"} Todos</span>
            </div>
            <div>
                <DelButton onClick={delAll} className={"btn btn-ghost p-1"}>Clear All</DelButton>
            </div>
        </div>
    )
} 