import {createContext, useContext, useState} from 'react'

const AuthContext = createContext()

const AuthProvider = ({children})=>{
    const [value,setValue]=useState({
        token:'',
        username:"",
        email:"",
        role:""
    })
    return(
        <AuthContext.Provider value={{value,setValue}}>
            {children}
        </AuthContext.Provider>
    )
}
const useAuth = ()=>useContext(AuthContext)

export {AuthProvider,useAuth};