import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import s from './ContactForm.module.css';


import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations"



const ContactFormSchema = Yup.object().shape({
    name: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required"),
    number: Yup.string().min(3, "Too short!").max(50, "Too long!").required("Required")
});

const initialValues = {

    name: "",
    number: "",
};


const ContactForm = () => {

    const dispatch = useDispatch();

    const nameFieldId = useId();
    const numberFieldId = useId();


    const handleSubmit = (values, action) => {
        dispatch(addContact({
            name: values.name,
            number: values.number,
        }));
        action.resetForm();
    };



    return (
        <Formik initialValues={initialValues} onSubmit={handleSubmit}
            validationSchema={ContactFormSchema}>
            <Form className={s.form}>
                <div className={s.name_container}>
                    <label className={s.name} htmlFor={nameFieldId}>Name</label>
                    <Field className={s.input} type="text" name="name" id={nameFieldId} />
                    <ErrorMessage className={s.error} name="name" component="span" />
                </div>

                <div className={s.name_container}>
                    <label className={s.name} htmlFor={numberFieldId}>Number</label>
                    <Field className={s.input} type="text" name="number" id={numberFieldId} />
                    <ErrorMessage className={s.error} name="number" component="span" />
                </div>

                <button className={s.btn} type="submit">Add contact</button>
            </Form >
        </Formik>

    )

}

export default ContactForm