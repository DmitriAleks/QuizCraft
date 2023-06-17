//@ts-ignore
import style from './Profile.module.scss'
import {TestManagement} from "./components/TestManagement/TestManagement";
import {UserCard} from "./components/UserCard/UserCard";
import {Modal} from "../../components/Modal/Modal";
import {useState} from "react";
import {TestEditor} from "./components/TestEditor/TestEditor";


export const Profile = () => {
    const [isShowModal, setIsShowModal] = useState(false)
    const showModal = () => setIsShowModal(!isShowModal)

    return (
        <div className={style.block}>
            <div>
                <UserCard/>
            </div>
            <div className={style.content}>
                <div className={style.header}>HEADER</div>
                <TestManagement showModal={() => {
                    showModal()
                }}/>
            </div>
            <Modal title='Создание теста'
                   isShowModal={isShowModal}
                   onOk={() => {
                   }}
                   onCancel={() => {
                       setIsShowModal(false)
                   }}
                   children={<TestEditor/>}
            />
        </div>
    )
}