import React from 'react';
import axios from 'axios';

const Practice =()=>{
    const userData = {}


   const login =()=>{
    var userId = document.getElementById("user_id").value;
    var password = document.getElementById("password").value;
    userData = {"id": userId, "password": password}
        axios.get(
        '/login',userData).then((response)=>{
            const { accessToken } = response.data;

            axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;

            console.log(accessToken)
            console.log(axios.defaults.headers.common.Authorization)
         }
        )
   } 

    return(<>
    <form>
        <input id="user_id" type='text'/><br/>
        <input  id="password" type='text'/>
        <button onClick={login}>로그인</button>

    </form>
    </>);
};

export default Practice;