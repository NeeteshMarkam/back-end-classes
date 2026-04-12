import { login,register,getMe,logout } from "../services/auth.api";

import { useContext } from "react";

import { AuthContext } from "../auth.context";
import { useEffect } from "react";


export const useAuth = ()=>{
    const context = useContext(AuthContext)
 if (!context) {
        throw new Error("useAuth must be used inside AuthProvider")
    }
    const {user, setUser ,loading ,setLoading} = context

    async function handleRegister({username,email,password}) {
       try {
            setLoading(true)
            const data = await register({ username, email, password })
            setUser(data.user)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    async function handleLogin({username,email,password}) {
        
        try {
            setLoading(true)
            const data = await login({ username, email, password })
            setUser(data.user)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    async function handleGetMe() {
        
         try {
            setLoading(true)
            const data = await getMe()
            setUser(data.user)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    async function handleLogOut(params) {
        
         try {
            setLoading(true)
            await logout()
            setUser(null)   // ⭐ important
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(()=>{
        handleGetMe()
    },[])
      return {
        user,
        handleLogin,
        handleRegister,
        handleLogOut,
        handleGetMe,
        loading
    }

}