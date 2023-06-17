//@ts-ignore
import style from './Button.module.scss'

type ButtonPropsType = {
    name: string
    onClick: () => void
}


export const Button = (props: ButtonPropsType) => {
    const {name, onClick} = props
    return <div className={style.container}>  <button  onClick={onClick}>{name}</button>    </div>
}