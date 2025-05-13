import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "./src/redux/auth/selectors";
import { Navigate } from "react-router-dom";

const RestrictedRoute = ({ component, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    if (isLoggedIn) {
        return <Navigate to={redirectTo}></Navigate>
    }
    return component;
};

export default RestrictedRoute;