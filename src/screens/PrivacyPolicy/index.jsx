import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import privacyPolicyBanner from "../../assets/images/privacyPolicyBanner.webp";
import ObfuscatedEmail from "../../components/ObfuscatedEmail";
import ReactHelmet from "../../components/ReactHelmet";
import PhoneLink from "../../components/PhoneLink";

const webUrl = import.meta.env.VITE_WEB_URL;

const PrivacyPolicy = () => {
  return (
    <>
      <ReactHelmet
        // title=""
        // description=""
        // keywords=""
        url={`${webUrl}/privacy-policy`}
        // url="https://texaswebstudios.com/privacy-policy"
      />
      <DefaultLayout>
        <InnerBanner
          bgImage={privacyPolicyBanner}
          title="Privacy Policy"
          description="We respect your privacy. Your information is collected responsibly and is only used to improve your experience. Your data stays safe with us and is handled thoughtfully."
          pageName="Privacy Policy"
        />

        <section className="privacyPolicySec sec-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="privacy-policy-content">
                  <p>
                    <span className="redColor">Texas Web Studio</span>{" "}
                    ("Company," "we," "us," or "our") values your privacy and is
                    dedicated to protecting the personal information you share
                    with us. This Privacy Policy explains how we collect, use,
                    store, and share your information when you engage with our
                    website and services. It also outlines your rights under
                    applicable privacy laws, including those enforced in the
                    State of Texas and the United States.
                  </p>
                  <h3>Information We Collect</h3>
                  <p>
                    We collect both personally identifiable information (PII)
                    and non-personal information through various interactions
                    with our website and services.
                  </p>
                  <h3>Personally Identifiable Information</h3>
                  <p>We may collect the following personal information:</p>
                  {/* <ObfuscatedEmail className="terms-condition-email" /> */}
                  <ul>
                    {[
                      "Full name",
                      "Email address",
                      "Phone number",
                      "Company or organization name",
                      "Billing and payment details",
                      "Project-related data, including files or content you voluntarily submit",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h3>Non-Personal Information</h3>
                  <ul>
                    {[
                      "IP address",
                      "Browser type and version",
                      "Device and operating system information",
                      "Referral URLs",
                      "Pages visited, duration, and user interaction metrics",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h3>Cookies and Tracking Technologies</h3>
                  <p>
                    We utilize cookies, tags, and similar technologies to
                    enhance website performance, personalize user experiences,
                    and analyze usage behavior. Users can manage cookie
                    preferences through their browser settings.
                  </p>

                  <h2>How We Use Your Information</h2>
                  <p>We use the information we collect for purposes such as:</p>
                  <ul>
                    {[
                      "Delivering and managing our digital services, including website and app development",
                      "Processing orders and communicating billing information",
                      "Providing customer support and responding to inquiries",
                      "Customizing and improving user experiences",
                      "Sending service updates, marketing messages, and promotional offers (with opt-out options)",
                      "Conducting analytics to refine our products and services",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h2>Information Sharing and Disclosure</h2>
                  <p>
                    We do not sell your personal information. However, we may
                    disclose your information:
                  </p>
                  <ul>
                    {[
                      "To trusted third-party service providers bound by confidentiality agreements",
                      "When required by law or legal processes",
                      "To protect our rights, assets, or user safety",
                      "In the event of a business merger, acquisition, or asset transfer",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h2>Data Security</h2>
                  <p>
                    We implement commercially reasonable administrative,
                    technical, and physical safeguards to protect your
                    information from unauthorized access, loss, misuse, or
                    disclosure. However, no system is entirely immune to
                    breaches, and we cannot guarantee absolute data security.
                  </p>

                  <h2>Your Rights and Choices</h2>
                  <p>You have the right to:</p>
                  <ul>
                    {[
                      "Access and correct your personal information",
                      "Request deletion of your data, subject to legal obligations",
                      "Withdraw consent or opt out of marketing communications at any time",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <p>
                    to exercise any of these rights, contact us at{" "}
                    <ObfuscatedEmail className="terms-condition-email" />
                  </p>

                  <h2>Children's Privacy</h2>
                  <p>
                    Our services are not directed toward children under the age
                    of 13. We do not knowingly collect personal data from
                    minors. If we learn that a child has provided us with
                    personal data, we will delete such information immediately.
                  </p>

                  <h2>Retention of Information</h2>
                  <p>
                    We retain project-related data for the duration of the
                    project. Once completed, we do not store personal
                    information. You maintain full ownership of your data at all
                    times, and Texas Web Studios asserts no rights over client
                    content post-project delivery.
                  </p>

                  <h2>Changes to This Privacy Policy</h2>
                  <p>
                    We may revise this Privacy Policy periodically. Changes will
                    be posted on this page with an updated effective date.
                  </p>

                  <div className="privacyPolicyLastDiv">
                    <h2>Contact Information</h2>
                    <p className="fw-bold">Texas Web Studios</p>
                    <p>
                      <span className="fw-bold">Email:</span>{" "}
                      <ObfuscatedEmail className="terms-condition-email" />
                    </p>
                    <p>
                      <span className="fw-bold">Phone:</span>{" "}
                      <PhoneLink
                        phoneNumber="+13462505428"
                        label={"+1 (346) 250-5428"}
                      />
                    </p>
                    <p>
                      <span className="fw-bold">Website:</span>{" "}
                      <a href="https://texaswebstudios.com/">
                        https://texaswebstudios.com
                      </a>
                    </p>
                    <p>
                      <span className="fw-bold">Address: </span>
                      <span className="redColor">
                        1000 Main St, Houston, TX 77002, United States
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </DefaultLayout>
    </>
  );
};

export default PrivacyPolicy;
