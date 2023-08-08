import "../Css/ButtonClear.css"
export const ButtonClear = (props: any) => (
    <div className="btn-clear"
        onClick={() => props.click(props.children)}>
        {props.children}
    </div>
)