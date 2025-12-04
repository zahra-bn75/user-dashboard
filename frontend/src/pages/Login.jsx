import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { MdLock } from "react-icons/md";
import "../style/Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onsubmit =()=>{
    if(email === "admin@example.com" && password === '1234Password5678'){
      window.location.href="/Dashboard"
      setEmail('')
      setPassword('')
    }else{
      alert("wrong credentials")
    }
  }
  return (
    <div className="login">
      <header className="login__header">
        <h1 className="login__title">Welcome Friend</h1>
        <p className="login__subtitle">
          Enter your credentials to access your account
        </p>
      </header>
      <main className="login__main">
        <form className="login__form">
          <div className="login__input-group">
            <MdEmail className="login__icon" />
            <input
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="login__input"
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="login__input-group">
            <MdLock className="login__icon" />
            <input
              value={password}
              onChange={(e)=>{setPassword(e.target.value)}}
              className="login__input"
              type="password"
              placeholder="Password"
            />
          </div>

          <button type="submit" onSubmit={()=>{onsubmit}} className="login__btn">
            Login
          </button>
        </form>
      </main>
    </div>
  );
}

export default Login;
