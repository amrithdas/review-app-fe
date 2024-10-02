import React from 'react';
import Footer from './footer';

const Events: React.FC = () => {
//   const eventDate = new Date();
//   eventDate.setDate(eventDate.getDate() + ((7 - eventDate.getDay()) % 7) + 1); // Set to next Sunday
  
//   const formatDate = (date: Date) => {
//     return date.toLocaleDateString('en-US', {
//       weekday: 'long',
//       month: 'long',
//       day: 'numeric',
//       year: 'numeric'
//     });
//   };

  return (
    <>
    <nav className="bg-white shadow-md py-4">
    <div className="container mx-auto flex">
        <h1 className="text-2xl font-bold pl-5"><a href="/">Piktio</a></h1>
    </div>
</nav>
    <div className="p-6 max-w-4xl m-40 mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4 text-center">Weekly Event Coming Soon!</h1>
      <p className="text-xl mb-4 text-center">
        Join us for our exciting weekly event! Mark your calendars and get ready for a special experience.
      </p>
      <div className="text-center bg-blue-100 p-4 rounded-lg">
        <h2 className="text-2xl font-semibold mb-2">Next Event:</h2>
        <p className="text-lg text-blue-600">To be Announced</p> {/*{formatDate(eventDate)}*/}
      </div>
      <p className="mt-4 text-center">
        Stay tuned for more details on this event. We can't wait to see you there!
      </p>
    </div>
    <Footer/>
    </>
  );
};

export default Events;
