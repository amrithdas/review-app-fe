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



const Home: React.FC = () => {
  const { handleSignupOpen, handleLoginOpen} = useAuth();
  
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
            <Route path="/restaurants/review" element={<WriteaReviewSearch/>} />
            <Route path="/restaurant/:name" element={<RestaurantReview />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
