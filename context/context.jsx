import React, { createContext, useContext } from "react"
import { useState } from "react"

const emailContext = createContext()
const setEmailContext = createContext()

export const useEmailContext = () =>{
    return useContext(emailContext)
}
export const useSetEmailContext = () =>{
    return useContext(setEmailContext)
}
export const EmailProvider = (props)=>{
    const [emailPass, setEmailPass] = useState([]);

    return(
        <setEmailContext.Provider value={setEmailPass}>
            <emailContext.Provider value={emailPass}>
                {props.children}
            </emailContext.Provider>
        </setEmailContext.Provider>
    )
}