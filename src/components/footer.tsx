import React from "react";
const Footer: React.FC = () => {
    return (
     <>
     <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-36 gap-8">
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600  mb-2">About us</p>
            <p className="text-gray-600  mb-2">Careers</p>
            <p className="text-gray-600  mb-2">Terms of service</p>
            <p className="text-gray-600  mb-2">Privacy Policy</p>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Discover</h3>
            <p className="text-gray-600  mb-2">Event</p>
            <p className="text-gray-600 mb-2">Blog</p>
            <p className="text-gray-600 mb-2">Help</p>
            <p className="text-gray-600 mb-2">Support</p>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Bussiness</h3>
            <p className="text-gray-600  mb-2">Bussiness owner login</p>
            <p className="text-gray-600  mb-2">Advertise</p>
            <p className="text-gray-600  mb-2">Restaurant owner login</p>
            <p className="text-gray-600  mb-2">Success stories</p>
            <p className="text-gray-600  mb-2">Bussiness Support</p>

          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600  mb-2">xyz@gmail.com</p>
            <p className="text-gray-600  mb-2">+654389109</p>
          </div>
        </div>
      </div>
    </footer>
     </>
    );
  };
  
  export default Footer;