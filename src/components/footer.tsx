import React from "react";

const Footer: React.FC = () => {
    return (
     <>
     <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-start">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 lg:gap-36 text-left">
          <div>
            <h3 className="text-lg font-semibold mb-4 cursor-default">About</h3>
            <p className="text-gray-600 mb-2"><a href='/about-us'>About us</a></p>
            <p className="text-gray-600 mb-2"><a href='/terms-of-service'>Terms of service</a></p>
            <p className="text-gray-600 mb-2"><a href='/privacy'>Privacy Policy</a></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 cursor-default">Discover</h3>
            <p className="text-gray-600 mb-2"><a href='/events'>Event</a></p>
            <p className="text-gray-600 mb-2"><a href='/help'>Help</a></p>
            <p className="text-gray-600 mb-2"><a href='/support'>Support</a></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 cursor-default">Business</h3>
            <p className="text-gray-600 mb-2"><a href='/advertise'>Advertise</a></p>
            <p className="text-gray-600 mb-2"><a href='/business-support'>Business Support</a></p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 cursor-default">Contact</h3>
            <p className="text-gray-600 mb-2"><a href="mailto:support@piktio.com">support@piktio.com</a></p>
          </div>
        </div>
      </div>
    </footer>
     </>
    );
  };
  
  export default Footer;
