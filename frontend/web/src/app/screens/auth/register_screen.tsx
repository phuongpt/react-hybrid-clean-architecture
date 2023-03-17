import { signUpAction, UserAuth, validateUserAuth } from "core";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hook";
import { Formik } from "formik";
import { FormErrors } from "../general/form-errors";
import './styles.css';
import logo from '../../../logo.svg';



const RegisterScreen = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    return (
        <div >
            <section className="bg-gray-50 dark:bg-gray-900">
                <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                    <a href="#" className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                        <img className="App-logo" src={logo} alt="logo" />
                    </a>
                    <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                Sign up your account
                            </h1>
                            <Formik
                                initialValues={{ email: "", password: "", name: "" } as UserAuth}
                                validate={(values: UserAuth) => {
                                    const errors = {};

                                    const result = validateUserAuth(values);
                                    if (!result.success) {
                                        return result.error.formErrors.fieldErrors;
                                    }

                                    return errors;
                                }}
                                onSubmit={async (values: UserAuth, { setSubmitting }) => {
                                    try {
                                        setSubmitting(true);
                                        await dispatch(signUpAction(values));
                                        setSubmitting(false);
                                        navigate("/", { replace: true });
                                    } catch (error) {
                                        setSubmitting(false);
                                    }
                                }}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting,
                                }) => (
                                    <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                                        <div>
                                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.name}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                            <input
                                                type="password"
                                                name="password"
                                                placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                            />

                                        </div>

                                        <FormErrors erros={errors} />

                                        <button type="submit" disabled={isSubmitting} className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>

                                        <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                            Already have an account?  <Link to={"/login"} className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                                        </p>

                                    </form>
                                )}
                            </Formik>


                        </div>
                    </div>
                </div>
            </section>

        </div>


    )
}

export default RegisterScreen
