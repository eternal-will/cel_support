import { useState } from "react";

import AppWrap from "../../wrapper/AppWrap";
import { login } from "../../API";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function loginUser(e) {
    e.preventDefault();

    const data = login(email, password);

    if (data.token) {
      localStorage.setItem("token", data.token);
      window.location.href = "/dashboard";
    } else {
      alert("Please check your email and password");
    }
  }

  return (
    <div className="App">
      <h1>Login</h1>
      <form onSubmit={loginUser}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <button type="submit">Login</button>
      </form>
      <a href="/register">Register</a>
    </div>
  );
}

export default AppWrap(Login, "login");
