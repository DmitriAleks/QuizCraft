//@ts-ignore
import style from './UserCard.module.scss'


export const UserCard = () => {

    return (
        <div className={style.block}>
            <div className={style.photo_container}>
                <div className={style.photo}>PHOTO</div>
                <div className={style.settings_block}>
                    <button>
                        Настройки
                    </button>

                </div>
            </div>
            <div className={style.field}>
                <label>Имя</label>
                <input type="text"/>
            </div>
            <div className={style.field}>
                <label>Фамилия</label>
                <input type="text"/>
            </div>
            <div className={style.field}>
                <label>Email</label>
                <input type="text"/>
            </div>
            <div className={style.field}>
                <label>Дата создания</label>
                <input type="text"/>
            </div>
        </div>
    )

}