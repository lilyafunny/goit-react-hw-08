import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
    const dispatch = useDispatch();

    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = (values, options) => {
        dispatch(login(values));
    };


    return <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:w-full">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
                        <Form>
                            <fieldset className="fieldset">
                                <label className="label">Email</label>
                                <Field name='email' type="email" className="input" placeholder="Email" />
                                <label className="label">Password</label>
                                <Field name='password' type="password" className="input" placeholder="Password" />
                                <div>
                                    <Link to='/register' className="link link-hover">
                                        First time here? Sign up!
                                    </Link>
                                </div>
                                <button type="submit" className="btn btn-neutral mt-4">Login</button>
                                <div>
                                    <Link to='/' className="link link-hover">
                                        Back to home
                                    </Link>
                                </div>
                            </fieldset>
                        </Form>
                    </Formik>
                </div>
            </div>
        </div>
    </div>
}

export default LoginForm;