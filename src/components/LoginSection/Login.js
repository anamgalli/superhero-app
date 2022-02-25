import React, { useContext } from "react";
import { TeamContext } from "../Context/TeamContext";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ErrorComponent from "./ErrorComponent";
import UserLogged from "./UserLogged";
import "./Login.css";

const Login = () => {

    const { isLogin, setIsLogin } = useContext(TeamContext);

    const initialValues = {
        email:'',
        password: ''
    }

    const onSubmit = (values, { resetForm }) => {
        if (values.email === "heroapp@gmail.com" && values.password === "react") {
            setIsLogin(true);
            localStorage.setItem("login", true);
        } else {
            alert('Datos ingresados incorrectos');
        }
        resetForm();
    } 
    
    const validate = values => {
        let errors = {};
        if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
        }
        if (!values.password) {
            errors.password = 'Required';
        }
        return errors;
    }

    return(
        <main className="col-sm-12 col-md-8 col-lg-9 main-login">
            {
                isLogin 
                ? 
                <UserLogged /> 
                :
                <Formik
                    initialValues = {initialValues}
                    validate = {validate}
                    onSubmit = {onSubmit}
                >
                    <Form className="p-4 login-form">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <Field 
                                type="email" 
                                name="email" 
                                className="form-control" 
                                id="email" 
                                placeholder="heroapp@gmail.com"
                            />
                            <ErrorMessage name="email" component={ErrorComponent} />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="form-label">Password</label>
                            <Field 
                                type="password" 
                                name="password" 
                                className="form-control" 
                                id="password" 
                                placeholder="react" 
                            />
                            <ErrorMessage name="password" component={ErrorComponent} />
                        </div>
                        <div>
                            <button type="submit" className="btn btn-login">enviar</button>
                        </div>
                    </Form>
                </Formik>
            }
        </main>
    )
}

export default Login;