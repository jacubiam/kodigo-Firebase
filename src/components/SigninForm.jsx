import { emailValidation, maxPassword, minPassword } from "../utils/validators";
import { useForm } from "react-hook-form";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const SigninForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const auth = getAuth(app);
    const navigate = useNavigate();
    const [error, setError] = useState();

    const createUser = async(data) => {
        try {
            await createUserWithEmailAndPassword(auth, data.email, data.password);
            navigate('/login');
        } catch (error) {
            setError(error.message.replace('Firebase: ',''));
        }
    };


    return (
        <div className="card" style={{ width: '18rem' }}>
            <div className="card-body">
                <h5 className="card-title text-center">New User</h5>
                <form onSubmit={handleSubmit(createUser)}>

                    <div className="mb-3">
                        <input
                            type="text"
                            name="email"
                            {...register('email', { required: "Email is requerid" , pattern: emailValidation})}
                            className="form-control"
                            placeholder="User"
                        />
                        {
                            errors.email && <span className="text-danger">{errors.email.message}</span>
                        }
                    </div>

                    <div className="mb-3">
                        <input
                            type="password"
                            name="password"
                            {...register('password', { required: "Email is requerid", minLength: minPassword, maxLength: maxPassword })}
                            className="form-control"
                            placeholder="Password"
                        />
                        {
                            errors.password && <span className="text-danger">{errors.password.message}</span>
                        }
                    </div>
                    <div className="d-grid gap-2">
                        <button className="btn btn-primary" type="submit">Add Account</button>
                    </div>
                </form>
                {
                    error && <span className="text-danger">{error}</span>
                }
            </div>
        </div>
    );
};

export default SigninForm;