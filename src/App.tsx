import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import RecentActivity from './components/recentActivity';
import Category from './components/category';
import Footer from './components/footer';
import SignupPopup from './components/signUpPopUp';
import SignInPopup from './components/signInPopUp';

function App() {
  return (
    <div>
      <Navbar />
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
      <SignupPopup/>
    </div>
  );
}

export default App;
