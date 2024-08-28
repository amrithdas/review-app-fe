import React from 'react';
import { useAuth } from './authContext';
import SignupMini from '../components/signUpMini';
import Login from '../components/login';

const ModalManager: React.FC = () => {
    const { isSignupOpen, isLoginOpen, handleSignupOpen, handleSignupClose, handleLoginOpen, handleLoginClose } = useAuth();

  return (
    <>
      {isSignupOpen && <SignupMini onClose={handleSignupClose} onLoginOpen={handleLoginOpen}/>}
      {isLoginOpen && <Login onClose={handleLoginClose} onSignupOpen={handleSignupOpen}/>}
    </>
  );
};

export default ModalManager;
