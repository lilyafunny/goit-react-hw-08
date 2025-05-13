import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./src/redux/auth/selectors";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (!isLoggedIn) {
        return <Navigate to='/login'></Navigate>
    }
    return children;
};

export default PrivateRoute;