
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { ref, get } from 'firebase/database';
import { User } from 'firebase/auth';
import { auth, database } from '../../firebase'; // Adjust this import based on your file structure


const UserPage = ({ user }: { user: User | null }) => {
  const [username, setUsername] = useState('');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, fetch their username
        const userRef = ref(database, `users/${user.uid}`);
        get(userRef).then((snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setUsername(userData.username);
          } else {
            console.log("No user data found!");
          }
        }).catch((error) => {
          console.error("Error fetching user data:", error);
        });
      } else {
        // User is signed out
        setUsername('');
      }
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);
  return (
    <h1>Hello {username}</h1>
  )
}

export default UserPage
