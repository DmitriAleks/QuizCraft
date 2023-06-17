//@ts-ignore
import style from './TestItem.module.scss'

type TestTileType = {
    id: string
    title: string
    onClick: ()=> void
}

export const TestItem = (props: TestTileType) => {
    const {id, title, onClick} = props
    return (
        <div className={style.block} onClick={()=>{onClick()}}>
            {title}
        </div>
    )


}