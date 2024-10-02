import React from 'react';
import Footer from './footer';

const AboutUs: React.FC = () => {
    return (
        <>
            <nav className="bg-white shadow-md py-4">
                <div className="container mx-auto flex">
                    <h1 className="text-2xl font-bold pl-5"><a href="/">Piktio</a></h1>
                </div>
            </nav>
            <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto my-10">
                <h1 className="text-3xl font-bold mb-6 text-center">About Us</h1>
                <p className="text-lg leading-relaxed mb-4">
                    Welcome to <strong>Piktio</strong>, your go-to platform for discovering and sharing experiences! Whether you're exploring new dining spots, seeking hidden gems, or looking for the best local businesses, Piktio is here to connect you with trusted reviews and recommendations from people who’ve been there.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Starting with the food scene, we've built a community-driven space where users can find everything from the best dishes at nearby restaurants to the latest trending cafes. But we’re not stopping there! Soon, Piktio will expand to encompass a wide variety of businesses—from hair salons and gyms to repair shops and beyond. Whatever you're searching for, Piktio aims to make the process smoother and more informed.
                </p>
                <p className="text-lg leading-relaxed mb-4">
                    Our mission is to empower individuals with honest reviews, ratings, and recommendations. Whether you want to leave feedback on your latest visit or explore new businesses around you, Piktio provides the tools to help you make better decisions.
                </p>
                <p className="text-lg leading-relaxed">
                    Join our growing community, and together, let’s make every experience a memorable one. At Piktio, your voice matters, and your experiences help shape the journey of others!
                </p>
            </div>
            <Footer />
        </>
    );
};

export default AboutUs;
