import React from "react";
const Footer: React.FC = () => {
    return (
     <>
     <footer className="bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:gap-36 gap-8">
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <p className="text-gray-600  mb-2"><a href='/'>About us</a></p>
            {/*href='/'  <p className="text-gray-600  mb-2">Careers</p> */}
            <p className="text-gray-600  mb-2"><a href='/'>Terms of service</a></p>
            <p className="text-gray-600  mb-2"><a href='/'>Privacy Policy</a></p>
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Discover</h3>
            <p className="text-gray-600  mb-2"><a href='/'>Event</a></p>
            <p className="text-gray-600  mb-2"><a href='/'>Help</a></p>
            <p className="text-gray-600  mb-2"><a href='/'>Support</a></p>
            {/* <p className="text-gray-600 mb-2">Blog</p> */}
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Bussiness</h3>
            <p className="text-gray-600  mb-2"><a href='/'>Advertise</a></p>
            <p className="text-gray-600  mb-2"><a href='/'>Success stories</a></p>
            <p className="text-gray-600  mb-2"><a href='/'>Bussiness Support</a></p>
            {/* <p className="text-gray-600  mb-2">Bussiness owner login</p> */}
            {/* <p className="text-gray-600  mb-2">Restaurant owner login</p> */}
          </div>
          <div className="text-left">
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600  mb-2">support@piktio.com</p>
            {/* <p className="text-gray-600  mb-2">+654389109</p> */}
          </div>
        </div>
      </div>
    </footer>
     </>
    );
  };
  
  export default Footer;