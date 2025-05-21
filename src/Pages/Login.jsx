import React, { use, useState } from 'react';
import { AuthContext } from '../Contexts/AuthContext';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from '../components/Spinner/Spinner';
import { toast } from 'react-toastify';

const Login = () => {

    const { signInUser, googleSingin } = use(AuthContext)
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleLogin = e => {
        setIsLoading(true);
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);

        signInUser(email, password)
      .then(result => {
        toast.success("Login successfully", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });

        console.log(result.user);
        navigate('/');
      })
      .catch(error => {
        console.error("Login error:", error.message);
        toast.error("Login failed. Please check your credentials.", {
          position: "top-right",
          autoClose: 4000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
    }

    const handleGoogleLogin = () => {
        setIsLoading(true);
        googleSingin()
            .then(result => {
                console.log(result.user);
                setIsLoading(false);
                toast.success("Login successfully", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                  });
                navigate("/");
                

            })
            .catch(error => {
                console.log(error);
                setIsLoading(false);
                toast.error("Login failed.", {
                    position: "top-right",
                    autoClose: 4000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    theme: "light",
                  });

            })

    }

    return !isLoading ? (
        <div className="min-h-screen flex items-center justify-center bg-base-100 px-4">
            <div className="card w-full max-w-sm shadow-2xl border-2 border-cyan-500">
                <div className="card-body">
                    <h1 className="text-3xl text-center font-bold">Login now!</h1>
                    <form onSubmit={handleLogin} className="fieldset">
                        <label className="label">Email</label>
                        <input type="email" name="email" className="input" placeholder="Email" />

                        <label className="label">Password</label>
                        <input type="password" name="password" className="input" placeholder="Password" />

                        <div>
                            <Link
                                className="link link-hover"
                                to={`/forget-password?email=${encodeURIComponent(document.querySelector('input[name="email"]')?.value || '')}`}
                            >
                                Forgot password?
                            </Link>
                        </div>

                        <button className="btn btn-neutral mt-4 bg-cyan-500 hover:bg-base-300">Login</button>

                        <p>
                            New to this site?
                            <Link to="/register" className="link link-hover font-bold text-blue-400"> Register</Link>
                        </p>

                        <button onClick={handleGoogleLogin} className="btn bg-white text-black border-cyan-500">
                            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <g>
                                    <path d="m0 0H512V512H0" fill="#fff" />
                                    <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341" />
                                    <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57" />
                                    <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73" />
                                    <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55" />
                                </g>
                            </svg>
                            Login with Google
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
    :
    <Spinner />;
};

export default Login;