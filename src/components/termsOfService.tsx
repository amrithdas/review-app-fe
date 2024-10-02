import React from "react";
import Footer from "./footer";

const TermsOfService: React.FC = () => {
    return (
        <>
            <nav className="bg-white shadow-md py-4">
                <div className="container mx-auto flex">
                    <h1 className="text-2xl font-bold pl-5"><a href="/">Piktio</a></h1>
                </div>
            </nav>
            <div className="p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-4">Terms of Service</h1>
                <p className="text-sm text-gray-500 mb-2">Last Updated: 02-OCT-2024</p>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">1. Acceptance of Terms</h2>
                    <p className="mb-4">
                        By accessing, browsing, or using the Services, you acknowledge that
                        you have read, understood, and agree to be bound by these Terms of
                        Service and any other guidelines or policies referenced herein,
                        including our Privacy Policy. If you do not agree with any of these
                        terms, you should not use our Services.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">2. Eligibility</h2>
                    <p className="mb-4">
                        You must be at least 18 years old to use our Services. By using our
                        Services, you represent and warrant that you are of legal age to form
                        a binding contract and meet all of the eligibility requirements.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">3. Account Registration</h2>
                    <p className="mb-4">
                        To access certain features of the Services, you may be required to
                        register for an account. You agree to provide accurate, current, and
                        complete information during the registration process and to keep this
                        information updated. You are responsible for safeguarding your account
                        credentials and for any activity that occurs under your account.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">4. Use of the Services</h2>
                    <p className="mb-4">
                        You agree to use the Services in accordance with all applicable laws
                        and regulations. You shall not:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Use the Services for any illegal or unauthorized purpose.</li>
                        <li>Engage in any activity that may disrupt the Services or servers.</li>
                        <li>
                            Use automated systems (e.g., bots or crawlers) to access the
                            Services without express permission.
                        </li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">5. User Content</h2>
                    <p className="mb-4">
                        You may submit content, including reviews, comments, or other
                        materials, to the Services. By submitting content, you grant Piktio a
                        worldwide, non-exclusive, royalty-free license to use, reproduce,
                        modify, and display the content in connection with our Services.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">6. Prohibited Conduct</h2>
                    <p className="mb-4">
                        While using the Services, you agree not to:
                    </p>
                    <ul className="list-disc list-inside mb-4">
                        <li>Post any false, misleading, defamatory, or harmful content.</li>
                        <li>Harass, intimidate, or abuse other users.</li>
                        <li>Engage in spamming or send unsolicited messages.</li>
                    </ul>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        7. Business Listings and Reviews
                    </h2>
                    <p className="mb-4">
                        Piktio allows users to post reviews and ratings of businesses. Reviews
                        must be honest, fair, and based on your personal experience. We
                        reserve the right to remove reviews that violate these terms or
                        applicable laws.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">8. Intellectual Property</h2>
                    <p className="mb-4">
                        All content and materials available through the Services, including
                        but not limited to text, graphics, logos, and software, are the
                        property of Piktio or its licensors and are protected by intellectual
                        property laws.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">9. Termination</h2>
                    <p className="mb-4">
                        Piktio reserves the right to terminate or suspend your account and
                        access to the Services at any time, without notice or liability, for
                        any reason, including if you violate these Terms of Service.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        10. Disclaimer of Warranties
                    </h2>
                    <p className="mb-4">
                        The Services are provided on an "as is" and "as available" basis.
                        Piktio makes no warranties, expressed or implied, regarding the
                        operation or availability of the Services.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">11. Limitation of Liability</h2>
                    <p className="mb-4">
                        To the fullest extent permitted by law, Piktio shall not be liable for
                        any direct, indirect, incidental, special, or consequential damages
                        arising out of your use of or inability to use the Services.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">
                        12. Changes to the Terms of Service
                    </h2>
                    <p className="mb-4">
                        We may modify these Terms of Service from time to time. Your continued
                        use of the Services after the changes become effective constitutes
                        your acceptance of the updated terms.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">13. Governing Law</h2>
                    <p className="mb-4">
                        These Terms of Service shall be governed by and construed in
                        accordance with the laws of India.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-2xl font-semibold mb-2">14. Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions or concerns regarding these Terms of
                        Service, please contact us at support@piktio.com.
                    </p>
                </section>
            </div>
            <Footer/>
        </>
    );
};

export default TermsOfService;
