import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SuccessMessage from './alertPopup';
import baseURL from '../config';
import ErrorMessage from './errorPopup';

interface SignupPopupProps {
  onClose: () => void;
  onLoginOpen: () => void;
}

const SignupPopup: React.FC<SignupPopupProps> = ({ onClose, onLoginOpen }) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [pincode, setPincode] = useState('');
  const [birthday, setBirthday] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const navigate = useNavigate();

  const handleClose = () => {
    onClose();
    navigate('/');
  };

  const handleLoginClick = () => {
    onClose();
    onLoginOpen();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Validation
    if (mobile.length !== 10) {
      setError('Mobile number is not Valid.');
      return;
    }
  
    if (pincode.length !== 6) {
      setError('Pincode is not valid.');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail\.com|outlook\.com|yahoo\.in|yahoo\.com|zoho\.com|proton\.me|protonmail\.com|icloud\.com)$/;
    if (!emailPattern.test(email)) {
      setError('Email is not valid or supported');
      return;
    }

    const data = {
      name: fullName,
      email,
      mobile_number: mobile,
      password1: password,
      password2: password,
      pincode: pincode,
      birthday,
    };
  
    try {
      const response = await axios.post(`${baseURL}accounts/signup/`, data, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.status === 201) {
        setSuccess(true);
        setTimeout(onClose, 3000);
        setTimeout(handleLoginClick, 4000);
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          const errors = error.response.data.errors;
          if (errors) {
            const formattedErrors = Object.values(errors)
              .flat()
              .join(' ');
            setError(formattedErrors || 'Failed to sign up');
          } else {
            setError('Failed to sign up');
          }
        } else {
          setError('An error occurred during sign up');
        }
      } else {
        setError('An error occurred during sign up');
      }
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
        <div className="flex items-center justify-center flex-col mb-4">
          <h2 className="text-2xl mb-1 text-center font-medium">Sign Up</h2>
          <p className="text-sm text-slate-400 text-center text-xs">
            By proceeding you agree to <span className="text-cyan-500">Terms of Service</span> and acknowledge <span className="text-cyan-500">Privacy Policy</span>
          </p>
        </div>
        <div className="relative flex-auto">
          <form onSubmit={handleSubmit} className="rounded pt-6 pb-8 w-full">
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="text"
                type="text"
                placeholder="Full Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="Mobile"
                type="text"
                placeholder="Mobile Number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
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
              />
            </div>
            <div className="mb-6">
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="pincode"
                type="text"
                placeholder="Pincode"
                value={pincode}
                onChange={(e) => setPincode(e.target.value)}
              />
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="birthday">
                <p className="font-bold">Birthday <span className="text-gray-500 font-normal text-sm">optional</span></p>
              </label>
              <input
                type="date"
                id="birthday"
                name="birthday"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                value={birthday}
                onChange={(e) => setBirthday(e.target.value)}
              />
            </div>
            <div className="flex items-center justify-center">
              <button
                className="flex w-full justify-center bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Sign Up
              </button>
            </div>
          </form>
        </div>
        <p className="text-sm mt-4 text-center font-medium flex items-center justify-center">
          Already signed up? 
          <span className="ml-2 text-cyan-500">
            <button onClick={handleLoginClick}>Sign-In</button>
          </span>
        </p>
      </div>
      {success && <SuccessMessage message="Successfully signed up! You can sign in now." onClose={() => setSuccess(false)} />}
      {error && <ErrorMessage message={error} onClose={() => setError('')} />}
    </div>
  );
};

export default SignupPopup;
