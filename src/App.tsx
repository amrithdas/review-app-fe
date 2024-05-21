import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import RecentActivity from './components/recentActivity';
import Category from './components/category';
import Footer from './components/footer';
import SignupMini from './components/signUpMini';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

const Home: React.FC = () => {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  const handleSignupOpen = () => {
    setIsSignupOpen(true);
  };

  const handleSignupClose = () => {
    setIsSignupOpen(false);
  };
  
  return (
    <div>
        <Navbar onSignupClick={handleSignupOpen} />
        <Carousel />
        <div className="container mx-auto px-4">
          <RecentActivity />
        </div>
        <div className="container mx-auto">
          <Category />
        </div>
        <div className=" mx-auto b-0 mt-16">
          <Footer />
        </div>
        {isSignupOpen && <SignupMini onClose={handleSignupClose} />}
      </div>
  )
}

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
    </Router>
  );
}

export default App;
