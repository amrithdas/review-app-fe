import React from "react";
import Footer from "./footer";

const PrivacyPolicy: React.FC = () => {
    return (
        <>
            <nav className="bg-white shadow-md py-4">
                <div className="container mx-auto flex">
                    <h1 className="text-2xl font-bold pl-5"><a href="/">Piktio</a></h1>
                </div>
            </nav>
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
                <p className="text-sm text-gray-500 mb-2">Last Updated: 02-OCT-2024</p>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">1. Introduction</h2>
                    <p className="mb-4">
                        At Piktio, we are committed to protecting your privacy. This Privacy
                        Policy outlines the types of information we collect, how we use it,
                        and how we safeguard your personal information when you use our
                        services.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">2. Information We Collect</h2>
                    <p className="mb-4">
                        We collect the following types of information:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li><strong>Personal Information:</strong> Your name, email address, and other contact details when you register an account or contact us.</li>
                        <li><strong>Usage Data:</strong> Information about how you interact with our services, including IP addresses, browser type, and usage patterns.</li>
                        <li><strong>Cookies:</strong> Small text files placed on your device to help us enhance your experience and provide personalized content.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">3. How We Use Your Information</h2>
                    <p className="mb-4">
                        We use the information we collect to:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Provide, operate, and improve our services.</li>
                        <li>Personalize your experience by offering tailored content and recommendations.</li>
                        <li>Communicate with you, including sending promotional emails and updates.</li>
                        <li>Analyze trends and user behavior to improve our platform.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">4. Sharing Your Information</h2>
                    <p className="mb-4">
                        We do not sell or rent your personal information to third parties. However, we may share your information with:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Service providers who assist us in delivering our services (e.g., payment processors, hosting services).</li>
                        <li>Authorities, if required by law or to protect our legal rights.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">5. Data Security</h2>
                    <p className="mb-4">
                        We take data security seriously and implement reasonable measures to protect your personal information. However, no data transmission over the Internet or method of storage is 100% secure, and we cannot guarantee the absolute security of your information.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">6. Your Choices</h2>
                    <p className="mb-4">
                        You can choose to:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Opt out of receiving promotional communications from us by following the unsubscribe instructions in our emails.</li>
                        <li>Disable cookies through your browser settings, though this may affect the functionality of our services.</li>
                        <li>Request access, correction, or deletion of your personal information by contacting us.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">7. Third-Party Links</h2>
                    <p className="mb-4">
                        Our services may contain links to third-party websites or services that are not owned or controlled by Piktio. We are not responsible for the privacy practices or content of those third-party sites.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">8. Children's Privacy</h2>
                    <p className="mb-4">
                        Our services are not intended for children under the age of 13. We do not knowingly collect personal information from children. If we learn that we have collected information from a child under 13, we will take steps to delete that information.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">9. Changes to This Policy</h2>
                    <p className="mb-4">
                        We may update this Privacy Policy from time to time. If we make significant changes, we will notify you by email or through our services. Your continued use of our services after the changes take effect constitutes your acceptance of the updated policy.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">10. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions or concerns about this Privacy Policy, please contact us at support@piktio.com.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
};

export default PrivacyPolicy;
