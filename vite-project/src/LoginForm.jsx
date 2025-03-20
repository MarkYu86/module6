import React, { useState } from "react";
function LoginForm() {
  // input state values always need to be strings - empty initially
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");
  const [incorrectAttempts, setIncorrectAttempts] = useState(0);
  const maxAttempts = 3;

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page reloading on form submit
    if (incorrectAttempts >= maxAttempts) {
      setSubmitResult("You tried too much times, come back later");
      return;
    }
    // add some password validation
    if (userPassword.length < 5) {
      setSubmitResult("Password must be at least 5 characters long");
      setIncorrectAttempts(incorrectAttempts + 1);
    } else if (userPassword === userEmail) {
      setSubmitResult("Password must not match email address");
      setIncorrectAttempts(incorrectAttempts + 1);
    } else {
      setSubmitResult("Successful login.");
      setIncorrectAttempts(0);
    }
  };

  return (
    <div className="LoginForm componentBox">
      <div className="formRow">
        <label>
          Email Address:
          {/* Controlled form element needs both value and onChange.
    onChange handler uses event param e to access target value.
    Whenever user types, new value is stored in state. */}
          <input
            type="email"
            value={userEmail}
            name="userEmail"
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
      </div>
      <div className="formRow">
        <label>
          Password:
          <input
            type="password"
            value={userPassword}
            name="password"
            onChange={(e) => setUserPassword(e.target.value)}
          />
          <div className="LoginForm componentBox">
            <form onSubmit={handleSubmit}>
              {/* same form code as previously, BUT now includes
<form> and <button> */}
              <button>Log In</button>
              <p>{submitResult}</p>
            </form>
          </div>
        </label>
      </div>
    </div>
  );
}
// try removing the onChange prop and typing in a field
export default LoginForm;
