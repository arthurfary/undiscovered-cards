import { User } from "firebase/auth";

const UserPage = ({ user }: { user: User | null }) => {
  console.log(user)
  return (
    <h1>Hello {user?.email}!</h1>
  )
}

export default UserPage
