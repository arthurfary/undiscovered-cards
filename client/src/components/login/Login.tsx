import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../firebase"

const LoginForm = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
      console.log(user)
    }).catch((error) => {
      console.log(error)
    })
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
