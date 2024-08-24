import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AuthContextType {
  isSignupOpen: boolean;
  isLoginOpen: boolean;
  handleSignupOpen: () => void;
  handleSignupClose: () => void;
  handleLoginOpen: () => void;
  handleLoginClose: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  const handleSignupOpen = () => {
    setIsSignupOpen(true);
    setIsLoginOpen(false);
  };

  const handleSignupClose = () => {
    setIsSignupOpen(false);
  };

  const handleLoginOpen = () => {
    setIsLoginOpen(true);
    setIsSignupOpen(false);
  };

  const handleLoginClose = () => {
    setIsLoginOpen(false);
  };

  return (
    <AuthContext.Provider value={{ isSignupOpen, isLoginOpen, handleSignupOpen, handleSignupClose, handleLoginOpen, handleLoginClose }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
