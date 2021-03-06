import { useContext } from "react"
import { AuthContext } from "../context/AuthProvider"

// use auth function 
const useAuth = () => {
    return useContext(AuthContext);
}

export default useAuth;