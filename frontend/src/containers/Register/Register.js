import { useState } from "react";
import { useNavigate } from "react-router-dom";

import AppWrap from "../../wrapper/AppWrap";
import { register } from "../../API";

function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [department, setDepartment] = useState("");
  const [mobile, setMobile] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    const data = await register(name, email, department, mobile, password);

    if (data.status === "ok") {
      alert("Registration successful");
      navigate("/login");
    } else {
      alert("Registration failed");
    }
  };

  return (
    <div className="App">
      <h1>Register</h1>
      <form onSubmit={registerUser}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Name"
        />
        <br />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
        />
        <br />
        <input
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          type="text"
          placeholder="Department"
        />
        <br />
        <input
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          type="tel"
          pattern="^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[789]\d{9}$"
          placeholder="Mobile"
        />
        <br />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
        />
        <br />
        <button type="submit">Submit</button>
      </form>
      <a href="/login">Login</a>
    </div>
  );
}

export default AppWrap(Register, "register");