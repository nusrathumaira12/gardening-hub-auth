import React from 'react';

const TermsOfService = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-green-600">📜 Terms of Service</h1>
      <p className="mb-4">
        Welcome to Gardening Hub! By using our platform, you agree to the following terms and conditions.
        Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. Use of the Platform</h2>
      <p className="mb-4">
        You must be at least 13 years old to use Gardening Hub. You are responsible for any content you post,
        including garden tips, comments, and profile information.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. Respectful Behavior</h2>
      <p className="mb-4">
        We expect all users to engage respectfully. Harassment, hate speech, or harmful content will not be tolerated.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Intellectual Property</h2>
      <p className="mb-4">
        You retain ownership of your content but grant us a license to use it for promoting and displaying on Gardening Hub.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Account Suspension</h2>
      <p className="mb-4">
        We reserve the right to suspend or delete accounts that violate our terms or community standards.
      </p>

      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        Last updated: June 2025
      </p>
    </div>
  );
};

export default TermsOfService;
