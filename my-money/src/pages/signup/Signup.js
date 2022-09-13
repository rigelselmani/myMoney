import { useState } from "react"

import styles from "./Signup.module.css"

export default function Signup(){
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")

    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name, email, password)
    }
    return(
        <form onSubmit={handleSubmit} className={styles["signup-form"]}>
           <h2>Signup</h2>
           <label>
             <span>email:</span>
             <input
                type="email"
                onChange={(e)=>setEmail(e.target.value)}
                value={email}
             />
           </label>
           <label>
            <span>Passwrod:</span>
            <input 
                type="password"
                onChange={(e)=>setPassword(e.target.value)}
                value={password}
            />
           </label>
           <label>
            <span>name:</span>
            <input
                type="name"
                onChange={(e)=>setName(e.target.value)}
                value={name}
            />
           </label>
        </form>
    )
}