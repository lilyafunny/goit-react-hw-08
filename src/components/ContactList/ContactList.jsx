import Contact from '../Contact/Contact'
import s from './ContactList.module.css'

import { selectFilteredContacts } from '../../redux/contactsSlice'

import { useSelector } from 'react-redux'

const ContactList = () => {

    const visible = useSelector(selectFilteredContacts);


    return (
        <>
            <ul>
                {visible.map((contact) => (
                    <li className={s.list} key={contact.id}>
                        <Contact data={contact} />
                    </li>
                ))}
            </ul>
        </>
    )

}

export default ContactList