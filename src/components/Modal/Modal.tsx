//@ts-ignore
import style from './Modal.module.scss'
import {useState} from "react";


type ModalPropsType = {
    isShowModal: boolean
    onOk: () => void
    onCancel: () => void
    okText?: string
    cancelText?: string
    title: string
    children:any
}


export const Modal = (props: ModalPropsType) => {
    const {isShowModal, onOk, onCancel, okText = 'Ок', cancelText = 'Отмена', title, children} = props
    return (
        <div>
            {isShowModal &&
                <div className={style.modal_overlay}>
                    <div className={style.modal}>
                        <h3>{title}</h3>
                        <div className={style.modal_content}>
                            {children}
                        </div>

                        <div>
                            <button onClick={onOk}>{okText}</button>
                            <button onClick={onCancel}>{cancelText}</button>
                        </div>
                    </div>

                </div>}
        </div>
    )
}