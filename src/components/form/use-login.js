import React, { useState } from "react";
import { login as doLogin } from "../utils";


const initialValues = {
    username: '',
    password: '',
    error: null,
    loggedIn: false,
    submitting: false
}
export default function useLogin(){
    const [values, setValues] = useState(initialValues)
    const { username, password } = values

    function setUsername(v) {
        setValues((prev) => ({
            ...prev,
            username: v,
        }))
    }
    function setPassword(v) {
        setValues((prev) => ({
            ...prev,
            password: v,
        }))
    }
    async function login(){
        try{
            setValues((prev) => ({
                ...prev,
                submitting: true,
            }))
            await doLogin({ username, password })
            setValues((prev) => ({
                ...prev,
                loggedIn: true,
            }))
        } catch (error) {
            setValues(prev => ({
                ...prev, error,
            }))
        }
        setValues((prev) => ({
            ...prev,
            submitting: false,
        }))
    }
    function logout(){
        setValues((prev) => ({
            ...initialValues
        }))
    }

    return {
        values,
        setUsername,
        setPassword,
        login,
        logout
    }
    

}