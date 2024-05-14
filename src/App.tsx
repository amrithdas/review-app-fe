import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Carousel from './components/carousel';
import RecentActivity from './components/recentActivity';

function App() {
  return (
    <div>
      <Navbar />
      <Carousel />
      <div className="container mx-auto p-4">
        <RecentActivity />
      </div>
    </div>
  );
}

export default App;
