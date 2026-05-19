import { useState } from "react";

const LoginPage = () =>{
    const[email, setEmail] = useState<string>("");
    const[password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    function handleSubmit(){
        console.log("Email:", email);
        if(email === ""){
            setError("Email is Required");
            return;
        }
        console.log("Password" , password);
        if(password === ""){
            setError("Password is Required");
            return;
        }
        setError(" ");
        alert("Login successful!" + email);
    }
    return(
        <div>
            <h1>Login Page</h1>
            <input 
              type="email"  
              value = {email}
              onChange = {(e) => setEmail(e.target.value)}
              placeholder="UserName" 
            />
            <input 
              type="password" 
              value={password}
              onChange= {(e)=>setPassword(e.target.value)}
              placeholder="Password" />
              {error && <p style={{color: "red"}}>{error}</p>}
            <button type="submit" onClick={handleSubmit}>Login</button>
        </div>
    );
}

export default LoginPage;