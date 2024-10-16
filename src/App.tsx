import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import RecentActivity from './components/recentActivity';
import Category from './components/category';
import Footer from './components/footer';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import WriteaReview from './components/writeaReview';
import WriteaReviewSearch from './components/writeaReviewSearch';
import RestaurantReview from './components/restaurantReview';
import Restaurant from './components/restaurant';
import { AuthProvider, useAuth } from './modals/authContext';
import LoginModalManager from './modals/loginModalManager';
import Profile from './components/profile';
import AboutUs from './components/aboutUs';
import TermsOfService from './components/termsOfService';
import PrivacyPolicy from './components/privacyPolicy';
import Events from './components/events';
import HelpSection from './components/help';
import SupportSection from './components/support';
import AdvertiseSection from './components/advertise';
import BusinessSupport from './components/businessSupport';
import { useEffect, useState } from 'react';



const Home: React.FC = () => {
  const { handleSignupOpen, handleLoginOpen } = useAuth();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div>
      <Navbar
        onSignupClick={handleSignupOpen}
        onLoginClick={handleLoginOpen}
        isFixed={false}
      />

      {/* Hide carousel on mobile */}
      <div className="hidden md:block">
        <Carousel />
      </div>

      {/* Mobile-first order: Category first, then RecentActivity */}
      {!isMobile ? <> <div className="container mx-auto px-4 mt-4">
        <RecentActivity />
      </div>
        <div className="container mx-auto px-4">
          <Category />
        </div></> : <>   <div className="container mx-auto px-4">
          <Category />
        </div>
        <div className="container mx-auto px-4 mt-4">
          <RecentActivity />
        </div></>}


      <div className="mx-auto b-0 mt-16">
        <Footer />
      </div>
      <LoginModalManager />
    </div>
  )
}

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/writeareview" element={<WriteaReview />} />
          <Route path="/restaurants/review" element={<WriteaReviewSearch />} />
          <Route path="/restaurant/:name" element={<RestaurantReview />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/events" element={<Events />} />
          <Route path="/help" element={<HelpSection />} />
          <Route path="/support" element={<SupportSection />} />
          <Route path="/advertise" element={<AdvertiseSection />} />
          <Route path="/business-support" element={<BusinessSupport />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
