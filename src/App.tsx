import React, { useState } from 'react';
import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import RecentActivity from './components/recentActivity';
import Category from './components/category';
import Footer from './components/footer';
import SignupMini from './components/signUpMini';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
// import Restaurant from './components/restaurant';
import Login from './components/login';
import WriteaReview from './components/writeaReview';
import WriteaReviewSearch from './components/writeaReviewSearch';
import RestaurantReview from './components/restaurantReview';
import Profile from './components/profile';


const Home: React.FC = () => {
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
    <div>
        <Navbar onSignupClick={handleSignupOpen}
        onLoginClick={handleLoginOpen}
        isFixed={false}/>
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
       
        {isSignupOpen && <SignupMini onClose={handleSignupClose} onLoginOpen={handleLoginOpen}/>}
        {isLoginOpen && <Login onClose={handleLoginClose} onSignupOpen={handleSignupOpen}/>}
      </div>
    
  )
}

const App: React.FC = () => {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/WriteaReview" element={<WriteaReview />} />
          <Route path="/WriteaReviewSearch" element={<WriteaReviewSearch/>} />
          <Route path="/WriteaReview" element={<WriteaReview />} />
          <Route path="/RestaurantReview" element={<RestaurantReview/>} />
          <Route path="/RestaurantReview" element={<RestaurantReview/>} />


        </Routes>
    </Router>
  );
}

export default App;
