import React from 'react';
import Footer from './footer';

const HelpSection: React.FC = () => {
    return (
        <>
            <nav className="bg-white shadow-md py-4">
                <div className="container mx-auto flex">
                    <h1 className="text-2xl font-bold pl-5"><a href="/">Piktio</a></h1>
                </div>
            </nav>
            <div className="p-6 max-w-4xl m-20 mx-auto bg-gray-100 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold mb-6 text-center">Help & Support</h1>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Frequently Asked Questions</h2>
                    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <h3 className="font-medium">How do I sign up for an account?</h3>
                        <p className="text-gray-700">
                            To sign up, click the "Sign Up" button on the top right of the homepage, fill out the required details, and verify your email.
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
                        <h3 className="font-medium">How can I update my profile information?</h3>
                        <p className="text-gray-700">
                            You can update your profile information by navigating to your account settings and selecting "Edit Profile."
                        </p>
                    </div>

                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h3 className="font-medium">What should I do if I forget my password?</h3>
                        <p className="text-gray-700">
                            If you've forgotten your password, click the "Forgot Password" link on the login page, and follow the instructions to reset it.
                        </p>
                    </div>
                </div>

                <div className="mb-6">
                    <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
                    <p className="text-gray-700 mb-4">
                        If you have any issues or need further assistance, feel free to contact our support team.
                    </p>
                    <p className="text-gray-700">
                        Email us at: <a href="mailto:support@piktio.com" className="text-blue-600 underline">support@piktio.com</a>
                    </p>
                </div>

                {/* <div>
                    <h2 className="text-xl font-semibold mb-2">Community Resources</h2>
                    <p className="text-gray-700">
                        Join our community forums to find answers, ask questions, or get help from other users.
                        You can access the forum <a href="#" className="text-blue-600 underline">here</a>.
                    </p>
                </div> */}
            </div>
            <Footer />
        </>
    );
};

export default HelpSection;
