import { createContext, useContext, useEffect, useState } from 'react'

const Auth = createContext()

const initialState = { isAuth: false, user: {} }

const AuthContext = ({ children }) => {

    const [state, setState] = useState(initialState)

    const readProfile = () => {
        const user = { uid: "123", email: "shirazitv786@gmail.com", name: "SHIRAZ KHAN" }
        setState({ isAuth: true, user })
    }

    useEffect(() => { readProfile() }, [])

    const handleLogout = () => { useState(initialState) }
    return (
        <Auth.Provider value={{ ...state, handleLogout }}>
            {children}
        </Auth.Provider>
    )
}

export default AuthContext

export const useAuth = () => useContext(Auth)