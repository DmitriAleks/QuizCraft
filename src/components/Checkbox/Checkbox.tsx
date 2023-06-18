//@ts-ignore

type CheckboxPropsType = {
    checked:boolean
    onChange: (st: boolean)=>void
}

export const Checkbox = (props:CheckboxPropsType) => {
    const {checked, onChange} = props
    return (
        <div>
            <label>Повторять ответы?</label>
            <input type="checkbox"
                   checked={checked}
                   onChange={(e) => {
                       onChange(e.currentTarget.checked)
                   }}/>
        </div>
    )
}