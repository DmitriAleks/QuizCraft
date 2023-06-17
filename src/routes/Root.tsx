import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Blogs} from "./Blogs/Blogs";
import {Login} from "./Login/Login";
import {ErrorPage} from "./ErrorPage/ErrorPage";
import {Profile} from "./Profile/Profile";
import {observer} from "mobx-react-lite"
import React, {useEffect} from "react";
import {useStores} from "../store/root-store-context";
import {useNavigate} from "react-router";




export const Root = observer(() => {
const {auth} = useStores()


    const navigate = useNavigate()
    useEffect(()=>{
        console.log(auth.isAuth)
        if(auth.isAuth)
        navigate("/blogs")
    }, [auth.isAuth])
    return (
        <div>
                <Routes>
                    <Route path="/" element={<Login/>}/>
                    <Route path="blogs" element={<Blogs/>}/>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="*" element={<ErrorPage/>}/>
                </Routes>

        </div>
    )
})