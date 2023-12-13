import React from 'react'
import Hero from "./Hero";
import Navbar from "./Navbar";
import Footer from "./Footer";

const PolicyCustomer = () => {
  return (
    <>
    <Navbar />
    <Hero />
    {/* privacy-policy-customer */}
    <div className="container mx-auto my-8 mt-[10rem] px-4 font-poppins">
      <h1 className="text-2xl font-bold mb-4">Privacy Policy Tajammul Customer</h1>
      <p>Effective Date: 12th December 2023</p>
      <p className="my-4">
        Thank you for using Tajammul, a dual mobile application designed to cater to both customers and businesses.
        This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you use our mobile application.
        By accessing or using Tajammul, you agree to the terms of this Privacy Policy.
      </p>

      <h2 className="text-xl font-bold mb-2">1. Information We Collect</h2>
      <h3 className="text-lg font-bold mb-2">1.1 Customer App</h3>
      <p className="my-2">
        When you use the Tajammul Customer App, we may collect the following types of information:
      </p>
      <ul className="list-disc list-inside my-2">
        <li>Personal Information: This includes your name, contact details, and other information you provide during the registration process.</li>
        <li>Transactional Information: Details related to your transactions, such as purchases and order history.</li>
        <li>Location Data: With your consent, we may collect information about your device's location to enhance your experience, such as providing localized services.</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">2. How We Use Your Information</h2>
      <p className="my-2">
        We use the collected information for the following purposes:
      </p>
      <ul className="list-disc list-inside my-2">
        <li>To facilitate and improve the services provided by Tajammul.</li>
        <li>To process transactions and provide customer support.</li>
        <li>To personalize your experience and offer relevant products/services.</li>
        <li>Communicate with you about updates, promotions, and other relevant information.</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">3. Information Sharing</h2>
      <p className="my-2">
        We do not sell, trade, or otherwise transfer your information to outside parties unless we provide you with advance notice and obtain your consent.
        However, we may share information with trusted third parties who assist us in operating our mobile application, conducting our business, or servicing you.
      </p>

      <h2 className="text-xl font-bold mb-2">4. Data Security</h2>
      <p className="my-2">
        We implement a variety of security measures to maintain the safety of your personal information.
        However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2 className="text-xl font-bold mb-2">5. Your Choices</h2>
      <p className="my-2">
        You can review and update your account information through the Tajammul mobile applications.
        You may also choose not to provide certain information, but this may limit your ability to use certain features of the app.
      </p>

      <h2 className="text-xl font-bold mb-2">6. Changes to this Privacy Policy</h2>
      <p className="my-2">
        We reserve the right to update or modify this Privacy Policy at any time.
        Changes will be effective immediately upon posting the updated Privacy Policy on the Tajammul mobile applications.
      </p>

      <h2 className="text-xl font-bold mb-2">7. Contact Information</h2>
      <p className="my-2">
        If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
        <a className="text-blue-500" href="mailto:contact@tajammulapp.com">contact@tajammulapp.com</a>.
      </p>

      <p className="my-4">
        By using Tajammul, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
      </p>
    </div>
    <Footer />
  </>
  )
}

export default PolicyCustomer