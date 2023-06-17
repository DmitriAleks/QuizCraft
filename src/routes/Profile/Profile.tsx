//@ts-ignore
import style from './Profile.module.scss'
import {TestManagement} from "./components/TestManagement/TestManagement";
import {UserCard} from "./components/UserCard/UserCard";


export const Profile = () => {



    return (
        <div className={style.block}>
            <div>
                <UserCard/>
            </div>
            <div className={style.content}>
                <div className={style.header}>HEADER</div>
                <TestManagement/>
            </div>
        </div>
    )
}