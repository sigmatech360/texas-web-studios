import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import termsAndConditionBanner from "../../assets/images/termsAndConditionBanner.webp";
import ObfuscatedEmail from "../../components/ObfuscatedEmail";
import ReactHelmet from "../../components/ReactHelmet";
import PhoneLink from "../../components/PhoneLink";
const webUrl = import.meta.env.VITE_WEB_URL;
const TermsAndCondition = () => {
  return (
    <>
      <ReactHelmet
        // title=""
        // description=""
        // keywords=""
        url={`${webUrl}/terms-and-condition`}
        // url="https://texaswebstudios.com/terms-and-condition"
      />
      <DefaultLayout>
        <InnerBanner
          bgImage={termsAndConditionBanner}
          title="Terms & Conditions"
          description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Mi Eget Mauris Pharetra Et Ultrices."
          pageName="Terms & Conditions"
        />

        <section className="privacyPolicySec sec-padding">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="privacy-policy-content">
                  <p>
                    These Terms & Conditions govern your use of the Texas Web
                    Studios website and services. By accessing or using our
                    website, you agree to comply with and be bound by these
                    Terms. If you do not agree, you should not use our services.
                  </p>

                  <h2>Use of the Website</h2>
                  <p>
                    You agree to use our website only for lawful purposes and in
                    a manner that does not infringe the rights or restrict the
                    use of others. Unauthorized activities include but are not
                    limited to:
                  </p>
                  <ul>
                    {[
                      "Attempting unauthorized access to the website or our servers",
                      "Transmitting viruses or harmful code",
                      "Using our website in a manner that could damage, disable, or impair functionality",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h2>Services Provided</h2>
                  <p>Texas Web Studios offers services such as:</p>

                  <ul>
                    {[
                      "Web design and development",
                      "App design and development",
                      "UI/UX design",
                      "Branding and identity creation",
                      "Social media content creation",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h2>Intellectual Property</h2>
                  <p>
                    All content on this website, including text, logos,
                    graphics, designs, and code, is the property of Texas Web
                    Studios or licensed to us. You may not copy, modify,
                    reproduce, or distribute any part of our site without prior
                    written consent.
                  </p>

                  <h2>Client Responsibilities</h2>
                  <p>Clients are responsible for:</p>
                  <ul>
                    {[
                      "Providing accurate, complete, and legal content for use in their projects",
                      "Ensuring they have ownership or licensing rights to all submitted materials",
                      "Reviewing and approving project milestones promptly",
                    ].map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>

                  <h2>Payments and Refunds</h2>
                  <p>
                    All services are subject to the terms agreed upon in the
                    official proposal, invoice, or agreement. Payments must be
                    made in full according to the payment schedule. Refunds may
                    be granted at our sole discretion and only if services have
                    not yet been initiated.
                  </p>

                  <h2>Limitation of Liability</h2>
                  <p>
                    Texas Web Studios is not liable for indirect, incidental, or
                    consequential damages, including data loss, delays, or
                    disruptions, arising out of your use of our services or
                    website.
                  </p>

                  <h2>Third-Party Services</h2>
                  <p>
                    We may link to or integrate third-party tools and platforms.
                    Texas Web Studios is not responsible for the functionality,
                    content, or data practices of these third-party sites.
                  </p>

                  <h2>Data Ownership and Retention</h2>
                  <p>
                    Clients maintain full ownership of their data and digital
                    assets. Texas Web Studios does not retain personal client
                    information or assert ownership over deliverables after
                    project completion.
                  </p>

                  <h2>Modification of Terms</h2>
                  <p>
                    We reserve the right to modify these Terms at any time.
                    Continued use of the website signifies acceptance of any
                    revised Terms.
                  </p>

                  <h2>Governing Law</h2>
                  <p>
                    These Terms & Conditions are governed by the laws of the
                    State of Texas and the United States. Disputes shall be
                    resolved in courts located in Houston, Texas.
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
                        label={"+1 346-250-5428"}
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

export default TermsAndCondition;
