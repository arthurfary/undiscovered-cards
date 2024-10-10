import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";

import { auth } from "../../firebase"

const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSignIn)
      signIn()
    else
      signUp()
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
      console.log(user)
    }).catch((error) => {
      console.log(error)
    })
  }

  const signUp = () => {
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
      const user = userCredential.user
      console.log(user)
    }).catch((error) => {
      console.log(error)
    })
  }

  const handleSignOut = () => {
    signOut(auth).then(() => alert('Signed Out'))
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>{isSignIn ? "Sign in" : "Sign up"}</h1>
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
        <button type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
        <button onClick={() => { setIsSignIn(!isSignIn) }}>Switch to {isSignIn ? "Sign up" : "Sign in"}</button>
      </form>
      <button onClick={() => { handleSignOut() }}>Sign Out</button>
    </>
  );
};

export default LoginForm;
