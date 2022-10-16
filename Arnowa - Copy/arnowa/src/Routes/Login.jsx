import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const[timeStamp,settimeStamp] = useState(Date.now())
 
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
  
    fetch("http://localhost:8000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => res.json())
      .then((res) => {
        
          navigate("/home");
        
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login-page">
      <form onSubmit={handleSubmit} className="form" data-testid="login-form">
        <div>
          <label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              data-testid="email-input"
              type="email"
              placeholder="email"
            />
          </label>
        </div>
        <div>
          <label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              data-testid="password-input"
              type="password"
              placeholder="password"
            />
          </label>
        </div>
        <div>
          <button  data-testid="form-submit" type="submit">
            SUBMIT
          </button>
        </div>
      </form>
      <div>
        <Link className="message" to="/">
          Go Back
        </Link>
      </div>
    </div>
  );
}
export default Login;
