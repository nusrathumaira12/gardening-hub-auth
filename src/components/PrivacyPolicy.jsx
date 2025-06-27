import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-green-600">🔐 Privacy Policy</h1>
      <p className="mb-4">
        At Gardening Hub, your privacy is important to us. This policy explains how we collect, use, and protect your information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Information We Collect</h2>
      <p className="mb-4">
        We collect your name, email, profile picture (if provided), and any garden-related content you share.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Your Data</h2>
      <p className="mb-4">
        Your data helps us improve the platform, personalize your experience, and communicate important updates.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Data Protection</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect your data. However, no platform is 100% secure.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Third-party Services</h2>
      <p className="mb-4">
        We may use services like Firebase for authentication and storage. These providers may collect limited data.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Your Rights</h2>
      <p className="mb-4">
        You may request to view, update, or delete your personal data at any time by contacting our support.
      </p>

      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        Last updated: June 2025
      </p>
    </div>
  );
};

export default PrivacyPolicy;
