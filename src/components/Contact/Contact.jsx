import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import s from './Contact.module.css'


import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ data: { id, name, number } }) => {

    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteContact(id))
    };

    return (
        <div className={s.card}>
            <div>
                <p><FaUser className={s.text} size="18px" />{name}</p>
                <p><FaPhone className={s.text} size="20px" />{number}</p>
            </div>
            <button className={s.btn} onClick={handleDelete}>Delete</button>

        </div>
    );


}

export default Contact
