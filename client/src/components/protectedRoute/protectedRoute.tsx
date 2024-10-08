import { Navigate } from "react-router-dom"
import { User } from "firebase/auth"

const ProtectedRoute = ({ children, user }: { children: React.ReactNode; user: User | null }) => {
  return user ? children : <Navigate to='' />
}

export default ProtectedRoute
