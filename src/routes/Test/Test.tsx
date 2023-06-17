import {useEffect} from "react";
import axios from "axios";

export const Test = () => {
    const config = {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('myToken')}`,
            'Content-Type': 'application/json',
        }
    }
    // useEffect(()=>{
    //   axios.get('/blogs', config)
    //       .then(function (response) {
    //         // handle success
    //         console.log(response);
    //       }).catch(err=> {
    //       console.log(err)
    //   })
    // },[])
    return (
        <div>

            123123

        </div>
    )
}