// import { FaApple } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import user from "../assets/pic/user.png"
import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import SignupPopup from "./signUpPopUp";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import baseURL from "../config";
import ErrorMessage from "./errorPopup";

interface SignupMiniProps {
    onClose: () => void;
    onLoginOpen: () => void;
}

const SignupMini: React.FC<SignupMiniProps> = ({ onClose, onLoginOpen }) => {
    const [showEmailPopup, setShowEmailPopup] = useState(false);
    const location = useLocation();
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleClose = () => {
        onClose();
        navigate(location.pathname);
    };

    const handleEmailClick = () => {
        setShowEmailPopup(true);
    };

    const handleLoginClick = () => {
        onClose();
        onLoginOpen();
    };

    const handleGoogleSuccess = async (credentialResponse: any) => {
        try {
            const response = await axios.post(`${baseURL}accounts/google-login/`, {
                id_token: credentialResponse.credential
            }, { withCredentials: true });

            if (response.status === 200) {
                window.location.reload();
            }
        } catch (error) {
            setError('Google login failed. Please try again.');
            console.error('Google login error:', error);
        }
    };

    if (showEmailPopup) {
        return <SignupPopup onClose={onClose} onLoginOpen={handleLoginClick} />;
    }

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
                    <p className='text-sm mb-5 text-slate-400'>Connect with great local bussiness</p>
                    <p className='text-sm text-slate-400 text-center text-xs'>By Proceeding you agree to <span className='text-cyan-500'>Terms of Service</span> and acknowledge<span className='text-cyan-500'> Privacy Policy</span></p>
                </div>
                <div className="space-y-4">
                    <GoogleLogin
                        onSuccess={handleGoogleSuccess}
                        onError={() => {
                            console.error('Login Failed');
                        }}

                    />
                    {error && <ErrorMessage message={error} onClose={() => setError('')} />}
                    {/* <button className="flex items-center   justify-left w-full py-2 px-4  border border-gray-300 rounded hover:bg-gray-100">
                        <div className='flex  w-full items-center justify-center gap-3'>
                            <div className=''>  <FaApple style={{ fontSize: 24 }} /></div>
                            <p className=''>  Continue with Apple</p>
                        </div>
                    </button> */}
                    <button
                        className="flex items-center justify-left w-full py-2 px-4  border border-gray-300 rounded hover:bg-gray-100"
                        onClick={handleEmailClick}
                    >
                        <div className='flex  w-full items-center justify-center gap-3'>
                            <div className=''>  <MdOutlineEmail style={{ fontSize: 22 }} /></div>
                            <p className=''> Continue with Email</p>
                        </div>
                    </button>

                </div>
                <p className='text-sm mt-4 text-center font-medium flex items-center   justify-center'>Already on piktio? <span className='ml-2 text-cyan-500	'><button onClick={handleLoginClick}>Log in</button></span></p>

            </div>
        </div>
    );
};

export default SignupMini;
