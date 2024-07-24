import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import user from "../assets/pic/user.png"
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import CSRFToken from "./CSRFToken";

interface LoginProps {
    onClose: () => void;
    onSignupOpen: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose, onSignupOpen }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const handleClose = () => {
        onClose();
        navigate(location.pathname);
    };

    const handleSignupClick = () => {
        onClose();
        onSignupOpen();
    };

    const handleLogin = async (event: React.FormEvent) => {
        event.preventDefault(); // Prevent the default form submission behavior

        try {

            const headers = {
                'Content-Type': 'application/json',
                'X-CSRFToken': Cookies.get('csrftoken')
            };

            const response = await axios.post('http://127.0.0.1:8000/accounts/login/', {
                email,
                password
            }, {
                headers: headers,
                withCredentials: true
            });

            if (response.status === 200) {
                window.location.reload();
            }

        } catch (error) {
            if (axios.isAxiosError(error)) {
                if (error.response) {
                    setError(error.response.data.error);
                } else {
                    setError('An unexpected error occurred');
                }
            } else {
                setError('An unexpected error occurred');
            }
            console.error('An error occurred:', error);
        }
    };
    

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50">
            <div className="relative bg-white p-8 rounded-lg shadow-lg w-96">
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
                >
                    &times;
                </button>
                <div className='flex items-center justify-center flex-col mb-4'>
                    <div className='w-20'><img src={user} alt="user_img" /></div>
                    <h2 className="text-2xl mb-1 text-center font-medium">Sign In</h2>
                    <p className='text-sm mb-5 text-slate-400'>Connect with great local businesses</p>
                    <p className='text-sm text-slate-400 text-center text-xs'>By proceeding you agree to <span className='text-cyan-500'>Terms of Service</span> and acknowledge <span className='text-cyan-500'>Privacy Policy</span></p>
                </div>
                <div className="space-y-4 mb-6">
                    <button className="flex items-center justify-left w-full py-2 px-4 border border-gray-300 rounded hover:bg-gray-100">
                        <div className='flex w-full items-center justify-center gap-3'>
                            <div className=''><FcGoogle style={{ fontSize: 22 }} /></div>
                            <p className=''>Continue with Google</p>
                        </div>
                    </button>
                    <button className="flex items-center justify-left w-full py-2 px-4 border border-gray-300 rounded hover:bg-gray-100">
                        <div className='flex w-full items-center justify-center gap-3'>
                            <div className=''><FaApple style={{ fontSize: 24 }} /></div>
                            <p className=''>Continue with Apple</p>
                        </div>
                    </button>
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-t border-gray-400" />
                        <span className="mx-4">or</span>
                        <hr className="flex-grow border-t border-gray-400" />
                    </div>

                    <form onSubmit={handleLogin}>
                        <CSRFToken/>
                        <div className="mb-4">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                id="email"
                                type="email"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                id="password"
                                type="password"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        {error && <p className="text-red-500 text-xs italic">{error}</p>}
                        <div className="flex items-center justify-center">
                            <button
                                className="flex w-full justify-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
                <a href='/' className='text-sm mt-4 text-center font-medium flex items-center justify-center text-cyan-500'>Login via email link</a>
                <p className='text-sm mt-6 text-center font-medium flex items-center justify-center'>New to piktio? <span className='ml-2 text-cyan-500'><button onClick={handleSignupClick}>Sign up</button></span></p>
            </div>
        </div>
    );
};

export default Login;
