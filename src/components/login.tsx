import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import user from "../assets/pic/user.png"
import { useNavigate } from "react-router-dom";



const Login: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const navigate = useNavigate();
    const handleClose = () => {
        onClose();
        navigate('/');
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
                    <p className='text-sm mb-5 text-slate-400'>Connect with great local bussiness</p>
                    <p className='text-sm text-slate-400 text-center text-xs'>By Proceeding you agree to <span className='text-cyan-500'>Terms of Service</span> and acknowledge<span className='text-cyan-500'> Privacy Policy</span></p>
                </div>
                <div className="space-y-4">
                    <button className="flex items-center justify-left   w-full py-2 px-4 border border-gray-300 rounded hover:bg-gray-100">
                        <div className='flex  w-full items-center justify-center gap-3'>
                            <div className=''><FcGoogle style={{ fontSize: 22 }} /></div>
                            <p className=''>Continue with Google</p>
                        </div>
                    </button>
                    <button className="flex items-center   justify-left w-full py-2 px-4  border border-gray-300 rounded hover:bg-gray-100">
                        <div className='flex  w-full items-center justify-center gap-3'>
                            <div className=''>  <FaApple style={{ fontSize: 24 }} /></div>
                            <p className=''>  Continue with Apple</p>
                        </div>
                    </button>
                    <div className="flex items-center my-4">
                        <hr className="flex-grow border-t border-gray-400" />
                        <span className="mx-4 ">or</span>
                        <hr className="flex-grow border-t border-gray-400" />
                    </div>

                    <div className="mb-4">
                      
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div className="mb-6">
                      
                      <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                </div>
                <a href='/' className='text-sm mt-4 text-center font-medium flex items-center   justify-center text-cyan-500'>Login via email link </a>
                <a href='/' className='text-sm mt-6 text-center font-medium flex items-center   justify-center'>New to piktio? <span className='ml-2 text-cyan-500	'>Sign up</span></a>

            </div>
        </div>
    );
};

export default Login;
