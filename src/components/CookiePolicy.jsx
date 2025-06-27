import React from 'react';

const CookiePolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12 text-gray-800 dark:text-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-green-600">🍪 Cookie Policy</h1>
      <p className="mb-4">
        This Cookie Policy explains how Gardening Hub uses cookies and similar technologies to improve your experience on our platform.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">1. What Are Cookies?</h2>
      <p className="mb-4">
        Cookies are small text files stored on your device when you visit a website. They help the site remember your preferences and actions over time.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">2. How We Use Cookies</h2>
      <p className="mb-4">
        We use cookies to:
      </p>
      <ul className="list-disc list-inside mb-4 space-y-2">
        <li>Remember your login and user preferences</li>
        <li>Understand how you interact with our content</li>
        <li>Enhance performance and improve features</li>
        <li>Provide personalized experiences</li>
      </ul>

      <h2 className="text-xl font-semibold mt-6 mb-2">3. Third-Party Cookies</h2>
      <p className="mb-4">
        We may use third-party services like Google Analytics or Firebase that also store cookies to collect anonymous usage data and improve our service.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">4. Managing Cookies</h2>
      <p className="mb-4">
        Most web browsers allow you to control or disable cookies through settings. Disabling cookies may impact your experience on Gardening Hub.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2">5. Changes to This Policy</h2>
      <p className="mb-4">
        We may update our Cookie Policy from time to time. Changes will be posted on this page with an updated date.
      </p>

      <p className="mt-8 text-sm text-gray-500 dark:text-gray-400">
        Last updated: June 2025
      </p>
    </div>
  );
};

export default CookiePolicy;
