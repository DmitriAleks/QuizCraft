//@ts-ignore
import style from './Input.module.scss'


type InputPropsType = {
    key: string
    label: string
    value: string
    onChange: (val: string) => void
    onBlur?: (e: any) => void
}

export const Input = (props: InputPropsType) => {
    const {key, label, value, onChange, onBlur} = props
    return (
        <div key={key}>
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