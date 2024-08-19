import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen text-black py-28">
      <div className="bg-ucalgaryRed fixed top-0 left-0 z-10 h-20 w-full"></div>
      <div className="px-16 max-lg:px-12 max-md:px-8">
        <h1 className="text-6xl font-bold text-center mb-10">Privacy Policy</h1>

        <div className="text-xl leading-relaxed space-y-8">
          <section>
            <h2 className="text-4xl font-semibold mb-4">Introduction</h2>
            <p>
              At Calgary First Year, we are committed to protecting your
              privacy. This Privacy Policy outlines the types of information we
              collect and how we use, store, and protect it.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-semibold mb-4">Location Data</h2>
            <p>
              We use your location data to provide real-time transit routes to
              the University of Calgary. This data is accessed through our
              integration with the Transit API but is not stored or retained by
              us.
            </p>
            <p>
              Your location data is used solely for the purpose of providing the
              requested route information and is not shared with any third
              parties.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-semibold mb-4">User Reviews</h2>
            <p>
              If you choose to submit a review on our Reviews page, the review
              content will be stored in our database to ensure it is displayed
              to other users. We do not collect any personally identifiable
              information associated with the review other than what you
              voluntarily provide in the review itself.
            </p>
            <p>
              Reviews are not shared with third parties, and they are stored
              securely within our system.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-semibold mb-4">Google Analytics</h2>
            <p>
              We use Google Analytics to track website traffic and user
              interactions. Google Analytics may collect data such as your IP
              address, device type, and browsing behavior. This data helps us
              improve our website and understand how users interact with our
              services.
            </p>
            <p>
              We do not store any data collected by Google Analytics, nor do we
              share this data with any third parties. Please refer to
              Google&apos;s Privacy Policy for more information on how they
              handle your data.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-semibold mb-4">
              Data Sharing and Security
            </h2>
            <p>
              We do not share any of the data collected through our services
              with third parties. All data is used solely for the purposes
              described above and is stored securely.
            </p>
            <p>
              We employ industry-standard security measures to protect your data
              and ensure that it is not accessed by unauthorized parties.
            </p>
          </section>

          <section>
            <h2 className="text-4xl font-semibold mb-4">
              Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time to reflect
              changes in our practices or for other operational, legal, or
              regulatory reasons. We encourage you to review this policy
              periodically to stay informed about how we are protecting your
              information.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
