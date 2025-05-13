import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../src/redux/auth/selectors";
import Navigation from './Navigation'
import AuthNav from './AuthNav'
import UserMenu from './UserMenu'

const AppBar = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    return <div>
        <header className="flex">
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}

        </header>


    </div>
}

export default AppBar;