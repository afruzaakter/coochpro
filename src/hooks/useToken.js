import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect(() =>{

        console.log("use token", user)

    const email = user?.user?.email;
    const users = {email: email};
    console.log("Users email", users)
    if(email){
        fetch(`http://localhost:5000/user/${email}`, {
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body:JSON.stringify(users)
        })
        .then(res => res.json())
        .then(data => {
            console.log('data inside useToken', data);
        })
    }
 
    }, [user]);
    return[token];
}

export default useToken;