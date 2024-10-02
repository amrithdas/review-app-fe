import React from 'react';
import Footer from './footer';

const BusinessSupport: React.FC = () => {
  return (
    <>
                <nav className="bg-white shadow-md py-4">
                <div className="container mx-auto flex">
                    <h1 className="text-2xl font-bold pl-5"><a href="/">Piktio</a></h1>
                </div>
            </nav>
    <div className="p-6 m-20 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center">Business Support</h1>

      <p className="text-gray-700 mb-4 text-center">
        Are you a business owner? We’re here to help! If you would like to add your business to our platform or need to make any changes to your existing listing, we want to hear from you.
      </p>

      <p className="text-gray-700 mb-4 text-center">
        Please send us an email detailing your request to{' '}
        <a href="mailto:support@piktio.com" className="text-blue-600 underline">support@piktio.com</a>.
      </p>

      <p className="text-gray-700 mb-4 text-center">
        Our support team will review your request and get back to you as soon as possible.
      </p>

      <div className="text-center mt-8">
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
        <a href="mailto:support@piktio.com">Contact Us</a>
        </button>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default BusinessSupport;
