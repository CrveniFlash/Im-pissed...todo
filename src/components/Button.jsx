
export default function DelButton({children, onClick, className}) {

    return (
        <button className={className}  onClick={onClick}> {children} </button>
    )
}

