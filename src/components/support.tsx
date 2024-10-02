import React from 'react';
import Footer from './footer';

const SupportSection: React.FC = () => {
    return (
        <>
            <nav className="bg-white shadow-md py-4">
                <div className="container mx-auto flex">
                    <h1 className="text-2xl font-bold pl-5"><a href="/">Piktio</a></h1>
                </div>
            </nav>
            <div className="p-6 max-w-4xl m-20 mx-auto bg-gray-100 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Support</h1>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-4">How Can We Help You?</h2>
                    <p className="text-gray-700 mb-4">
                        We are here to help you with any issue you may have. Check out our resources below or contact our support team directly.
                    </p>

                    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <h3 className="font-medium">1. Browse the FAQs</h3>
                        <p className="text-gray-700">
                            Visit our <a href="/help" className="text-blue-600 underline">FAQ Section</a> to find quick answers to common issues.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <h3 className="font-medium">2. Contact Customer Support</h3>
                        <p className="text-gray-700">
                            If you can’t find the solution in the FAQs, feel free to contact our support team. We’re here to assist you with any issue.
                        </p>
                        <p className="text-gray-700">
                            Email us at: <a href="mailto:support@piktio.com" className="text-blue-600 underline">support@piktio.com</a>
                        </p>
                    </div>

                    {/* <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <h3 className="font-medium">3. Live Chat Support</h3>
                        <p className="text-gray-700">
                            For immediate assistance, use our live chat feature available 24/7. Just click on the chat icon at the bottom-right corner of the page.
                        </p>
                    </div> */}

                    {/* <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-medium">4. Community Forum</h3>
                        <p className="text-gray-700">
                            Get help from other users or share your experiences in our community forum. Join the conversation <a href="#" className="text-blue-600 underline">here</a>.
                        </p>
                    </div> */}
                </div>

                {/* <div className="text-center mt-8">
                    <button className="bg-blue-500 text-white py-2 px-4 rounded-lg">
                        Contact Support
                    </button>
                </div> */}
            </div>
            <Footer />
        </>

    );
};

export default SupportSection;
