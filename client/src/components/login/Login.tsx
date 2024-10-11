import { useState } from "react";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { getDatabase, ref, set, get } from "firebase/database";

const LoginForm = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSignIn) {
      signIn();
    } else {
      signUp();
    }
  };

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signUp = async () => {
    try {
      // Check if username is already taken
      const db = getDatabase();
      const usernameRef = ref(db, `usernames/${username}`);
      const snapshot = await get(usernameRef);

      if (snapshot.exists()) {
        alert("Username is already taken. Please choose another.");
        return;
      }

      // If username is not taken, proceed with sign up
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save username to database
      await set(ref(db, `users/${user.uid}`), {
        username: username,
        email: email
      });

      // Save username to usernames list for future checks
      await set(usernameRef, user.uid);

      console.log("User created successfully:", user);
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  const handleSignOut = () => {
    signOut(auth).then(() => alert('Signed Out'));
  };

  return (
    <>
      <h2>{isSignIn ? "Sign in" : "Sign up"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        {!isSignIn && (
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        )}
        <button type="submit">{isSignIn ? "Sign In" : "Sign Up"}</button>
      </form>
      <button onClick={() => setIsSignIn(!isSignIn)}>
        Switch to {isSignIn ? "Sign up" : "Sign in"}
      </button>
      <button onClick={handleSignOut}>Sign Out</button>
    </>
  );
};

export default LoginForm;
