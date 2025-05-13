import { useDispatch, useSelector } from "react-redux";
import { selectIsLoggedIn, selectUser } from "../redux/auth/selectors";
import { logout } from "../redux/auth/operations";

const UserMenu = () => {

    const user = useSelector(selectUser);
    const isLoggedIn = useSelector(selectIsLoggedIn);

    const dispatch = useDispatch();
    if (!isLoggedIn) return null;
    return <div className="flex gap-10 ml-auto">
        <h2>{user.name}</h2>
        <button className="btn btn-neutral " onClick={() => dispatch(logout())}>Logout</button>
    </div>

};

export default UserMenu;