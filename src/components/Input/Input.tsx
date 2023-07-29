//@ts-ignore
import style from './Input.module.scss'


type InputPropsType = {
    label: string
    value: string
    onChange: (val: string) => void
    onBlur?: (e: any) => void
}

export const Input = (props: InputPropsType) => {
    const { label, value, onChange, onBlur} = props
    return (
        <div >
            <label>{label}</label>
            <input type="text" value={value} onChange={(e) => {
                onChange(e.currentTarget.value)
            }}
                   onBlur={(e) => {
                       onBlur && onBlur(e.currentTarget.value)
                   }}
            />
        </div>
    )
}