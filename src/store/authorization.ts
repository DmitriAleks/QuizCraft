import {makeAutoObservable} from "mobx";
import axios from "axios";

export interface AuthorizationStore {
    isAuth: boolean;
    count: number
}


class Authorization {
    isAuth: boolean = false;

    constructor() {
        makeAutoObservable(this)
    }

    baseAuth(login: string, password: string) {
        axios.post('/auth/login', {
            "loginOrEmail": login,
            "password": password
        })
            .then((response) => {
                localStorage.setItem('myToken', response.data.accessToken)
                this.isAuth = true
            }).catch(err => {
            console.log(err)
        })
    }

    logout() {

    }
}

export default new Authorization()
