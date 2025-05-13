import { NavLink } from "react-router-dom";

const Navigation = () => {
    return <nav className="flex gap-10 mr-5">
        <NavLink to="/">Home </NavLink>
        <NavLink to="contacts">Contacts</NavLink>

    </nav>
};



export default Navigation;