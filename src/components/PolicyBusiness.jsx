import React from "react";
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PolicyBusiness = () => {
  return (
    <>
      <Navbar />
      <Hero />
      {/* privacy-policy-business */}
      <div className="mx-[2rem] relative top-[8rem]">
      <div>
      <h1 style={{ fontWeight: 'bold' }}>Privacy Policy Tajammul Business</h1>
      <p>Effective Date: 12th December 2023</p>
      <p>
        Thank you for using Tajammul, a dual mobile application designed to cater to both customers and businesses.
        This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our mobile application.
        By accessing or using Tajammul, you agree to the terms of this Privacy Policy.
      </p>

      <h2 style={{ fontWeight: 'bold' }}>1. Information We Collect</h2>
      <h3>1.1 Business App</h3>
      <p>
        When you use the Tajammul Business App, we may collect the following types of information:
      </p>
      <ul>
        <li>Business Information: Details provided during the business setup process, including business name, contact information, and products/services offered.</li>
        <li>Transactional Information: Details related to business transactions, orders, and customer interactions.</li>
        <li>Employee Information: If applicable, information about employees associated with the business account.</li>
      </ul>

      <h2 style={{ fontWeight: 'bold' }}>2. How We Use Your Information</h2>
      <p>
        We use the collected information for the following purposes:
      </p>
      <ul>
        <li>To facilitate and improve the services provided by Tajammul.</li>
        <li>To process transactions and provide customer support.</li>
        <li>To personalize your experience and offer relevant products/services.</li>
        <li>Communicate with you about updates, promotions, and other relevant information.</li>
      </ul>

      <h2 style={{ fontWeight: 'bold' }}>3. Information Sharing</h2>
      <p>
        We do not sell, trade, or otherwise transfer your information to outside parties unless we provide you with advance notice and obtain your consent.
        However, we may share information with trusted third parties who assist us in operating our mobile application, conducting our business, or servicing you.
      </p>

      <h2 style={{ fontWeight: 'bold' }}>4. Data Security</h2>
      <p>
        We implement a variety of security measures to maintain the safety of your personal information.
        However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2 style={{ fontWeight: 'bold' }}>5. Your Choices</h2>
      <p>
        You can review and update your account information through the Tajammul mobile applications.
        You may also choose not to provide certain information, but this may limit your ability to use certain features of the app.
      </p>

      <h2 style={{ fontWeight: 'bold' }}>6. Changes to this Privacy Policy</h2>
      <p>
        We reserve the right to update or modify this Privacy Policy at any time.
        Changes will be effective immediately upon posting the updated Privacy Policy on the Tajammul mobile applications.
      </p>

      <h2 style={{ fontWeight: 'bold' }}>7. Contact Information</h2>
      <p>
        If you have any questions or concerns about this Privacy Policy, please contact us at {' '}
        <a href="mailto:contact@tajammulapp.com">contact@tajammulapp.com</a>.
      </p>

      <p>
        By using Tajammul, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
      </p>
    </div>
      </div>
      <Footer />
    </>
  );
};

export default PolicyBusiness;
