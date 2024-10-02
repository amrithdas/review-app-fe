import React from 'react';
import Footer from './footer';

const AdvertiseSection: React.FC = () => {
    return (
        <>
            <nav className="bg-white shadow-md py-4">
                <div className="container mx-auto flex">
                    <h1 className="text-2xl font-bold pl-5"><a href="/">Piktio</a></h1>
                </div>
            </nav>
            <div className="p-6 m-20 max-w-4xl mx-auto bg-gray-100 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Advertise with Us</h1>

                <p className="text-gray-700 mb-4 text-center">
                    Reach a wider audience and grow your business by advertising with Piktio! Our platform offers various advertising opportunities tailored to your needs.
                </p>

                <p className="text-gray-700 mb-4 text-center">
                    If you are interested in promoting your business or services, please send an email to{' '}
                    <a href="mailto:support@piktio.com" className="text-blue-600 underline">support@piktio.com</a>.
                </p>

                <p className="text-gray-700 mb-4 text-center">
                    Our team will get back to you promptly to discuss potential advertising options and to provide callbacks.
                </p>

                <div className="text-center mt-8">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                    <a href="mailto:support@piktio.com">Email Us</a>
                    </button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default AdvertiseSection;
