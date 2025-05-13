import s from '../../App.module.css'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { fetchContacts } from "../../redux/contacts/operations"
import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox"
import ContactList from "../../components/ContactList/ContactList"
import { selectError, selectIsLoading } from '../../redux/contacts/selectors'
import { useSelector } from 'react-redux'



const Contacts = () => {
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchContacts());
    }, [dispatch]);

    return <div className={s.contanier}>
        <h1 className={s.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && !error && <b>Loading...</b>}
        <ContactList />
    </div>
}

export default Contacts;