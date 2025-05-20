
import React, { useEffect, useState } from 'react';
import { useLocation} from 'react-router-dom';

const ForgetPassword = () => {
    // const Navigate = useNavigate();
    const location = useLocation();
    const [email, setEmail] = useState('');

    useEffect(() => {
        const queryParams = new URLSearchParams(location.search);
        const emailFromLogin = queryParams.get('email');
        if (emailFromLogin) setEmail(emailFromLogin);
    }, [location]);

    const handleReset = (e) => {
        e.preventDefault();
        window.location.href = 'https://mail.google.com/';
    };

    return (
        <>
            <div className='min-h-screen flex items-center justify-center bg-base-100 px-4'>
                <div className="card w-full max-w-sm shadow-2xl border-2 border-cyan-500">
                    <div className="card-body">
                        <h2 className="text-2xl font-bold text-center">Reset Password</h2>
                        <form onSubmit={handleReset}>
                            <label className="label">Email</label>
                            <input
                                type="email"
                                className="input w-full"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn btn-primary w-full mt-4">Reset Password</button>
                        </form>
                    </div>
                </div>
            </div>
        </>


    );
};

export default ForgetPassword;
