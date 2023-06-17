import React from "react";

import {observer} from "mobx-react-lite";

import {useStores} from "../../store/root-store-context";




export const Login = observer(() => {

    const {auth} = useStores()

    const auth1 = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const login = formData.get('login');
        const password = formData.get('password')
        // @ts-ignore
        auth.baseAuth(login, password)
    }


    return (
        <div>
            <h4>Тестовый пользователь</h4>
            <span>AlehLop12  12345612</span>
            <form onSubmit={(e) => {
                auth1(e)
            }}>
                <input type="text" name='login' value={"AlehLop12"}/>
                <input type="text" name='password' value={"12345612"}/>
                <button onClick={() => {
                }}>
                    Войти
                </button>
            </form>
        </div>
    )
})