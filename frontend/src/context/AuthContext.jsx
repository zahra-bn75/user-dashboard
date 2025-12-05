import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({children}){
    const [user, setUser] = useState(null)

    const login=(email, password)=>{
        if(email === "admin@example.com" && password === '1234Password5678'){
            const newUser = {email}
            setUser(newUser)
            localStorage.setItem("user", JSON.stringify(newUser))
            return true
        }else{
            return false
        }
    }

    const logout=()=>{
        setUser(null)
        localStorage.removeItem("user")
        return true
    }

    return(
        <AuthContext.Provider value={{user, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}