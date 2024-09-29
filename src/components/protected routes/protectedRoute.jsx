import { onAuthStateChanged } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import NavLogin from '../IsUserLogin Navbar/Nav';
import Nav from '../navbar/Nav';
import { auth } from '../../config/firebase/firebasemethods';
const ProtectedRoutes = ({ Comp}) => {
    const [isUser, setIsUser] = useState(false);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setIsUser(true)
                return(
                  <NavLogin/>
                )
            }else{
              return(

                <Nav/>
              )
            }
        })
    }, [])
    return (
        setIsUser ? Comp: <h1>Loading...</h1>
    )
}

export default ProtectedRoutes