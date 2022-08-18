import { Navigate } from "react-router-dom"

const ProtectRoute = ({ children, user }) => {
    if(user){
        return <Navigate to="/" />;
    }
    return children
}

export default ProtectRoute