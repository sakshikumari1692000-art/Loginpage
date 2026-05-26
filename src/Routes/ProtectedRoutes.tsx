import { Navigate } from "react-router-dom";

interface ProtectedRoutesProps {
    isLoggedIn: boolean;
    children: React.ReactNode;
}
const ProtectedRoutes = (props :  ProtectedRoutesProps) =>{
if(props.isLoggedIn === false){
    return <><Navigate to= "/" /></>
}
return props.children;

}

export default ProtectedRoutes;