import {useEffect} from "react";
import axios from "axios";


export const Profile = () => {

    useEffect(()=>{
        axios.get('/auth/me', {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('myToken')}`,
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            console.log(res.data)
        })
    },[])

    return (
        <div>
        <div>
            <label>Имя</label>
            <input type="text"/>
        </div>
            <div>
                <label>Фамилия</label>
                <input type="text"/>
            </div>
            <div>
                <label>Email</label>
                <input type="text"/>
            </div>
            <div>
                <label>Дата создания</label>
                <input type="text"/>
            </div>
        </div>
    )
}