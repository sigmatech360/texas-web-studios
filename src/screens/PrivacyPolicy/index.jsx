import React from "react";
import DefaultLayout from "../../components/DefaultLayout";
import InnerBanner from "../../components/InnerBanner";

import privacyPolicyBanner from "../../assets/images/privacyPolicyBanner.webp";
import ObfuscatedEmail from "../../components/ObfuscatedEmail";

const PrivacyPolicy = () => {
  return (
    <DefaultLayout>
      <InnerBanner
        bgImage={privacyPolicyBanner}
        title="Privacy Policy"
        description="Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit, Sed Do Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Mi Eget Mauris Pharetra Et Ultrices."
        pageName="Privacy Policy"
      />

      <section className="privacyPolicySec sec-padding">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="privacy-policy-content">
                <p>
                  At Texas Web Studio, We Hold The Privacy Of Our Clients In The
                  Highest Regard On{" "}
                  <span className="redColor">Texas Web Studio</span>. We Treat
                  Their Information With The Same Care As Our Own. While We Do
                  Gather Information From Our Clients, Its Purpose Is Solely To
                  Enhance Our Customer Services. We Acknowledge Our
                  Responsibility To Maintain And Utilize Our Clients’
                  Information Appropriately. We Want To Assure You That We Never
                  Rent Or Sell The Information Provided By Our Clients Online.
                </p>
                <p>
                  This Policy Outlines How We Collect, Use, And Safeguard
                  Personal Information Obtained From Our Clients. It Also
                  Describes The Options Available To You Regarding The
                  Collection And Use Of Your Information.
                </p>
                <h3>Collection Of Personal Information</h3>
                <p>
                  We Collect Details Such As The Client’s Name, Email, Mailing
                  Address, And Phone Number. These Pieces Of Information Are
                  Provided By The Client During The Ordering Process Or When
                  Saving Their Information With Us. Additionally, Email
                  Addresses And Mailing Addresses Obtained Through Forms Like
                  Our Contact Us Form Might Be Used To Respond To Comments And
                  Queries.
                </p>
                <p>
                  We Also Maintain Records Of Past Items That Interest Our
                  Clients And Their Online Purchases.
                </p>

                <h3>Newsletter Opt-Out</h3>
                <p>
                  If You No Longer Wish To Receive Our Newsletters And
                  Promotional Communications, You Can Opt Out By Following The
                  Instructions Provided In Each Communication. Alternatively,
                  You Can Contact Us Via Email At{" "}
                  <ObfuscatedEmail className="terms-condition-email" /> Or Call
                  Us At{" "}
                  <a
                    href="tel:+18325484589"
                    className="text-decoration-none redColor"
                  >
                    +1 832 548 4589
                  </a>
                  .
                </p>

                <h3>Social Media And Widgets</h3>
                <p>
                  Our Website Includes Social Media Features And Widgets, Such
                  As The Facebook Like Button. These Features May Collect Your
                  IP Address And Page Visits For Proper Functionality.
                  Interactions With These Features Are Subject To The Privacy
                  Policies Of The Respective Companies.
                </p>

                <h3>Third-Party Sharing</h3>
                <p>
                  We Do Not Share Personal Information With Third Parties Unless
                  Described In This Policy. We Never Sell Personal Information
                  To Third Parties. We Use Trusted Companies For Services Like
                  Credit Card Processing And Live Customer Support Chat.
                </p>

                <h3>Security Of Personal Information</h3>
                <p>
                  We Prioritize The Security Of Client Information. We Use
                  Secure Sockets Layer (SSL) Software For Encryption During
                  Transmission. While We Strive For Industry-Standard Security
                  Measures, No Method Of Online Data Transmission Is Entirely
                  Foolproof.
                </p>

                <h3>Access To Registered Accounts</h3>
                <p>
                  Clients Can Access Their Registered Accounts By Signing In On
                  Our Homepage. This Provides Access To Previous Lists And
                  Submitted Information. Users Can Update Their Information
                  Through The “My Account” Section.
                </p>

                <h3>Changing & Deleting Accounts</h3>
                <p>
                  Clients Can Request Account Cancellation Or Personal
                  Information Deletion By Emailing Us. This Will Stop Further
                  Email Communication Related To Online Orders.
                </p>

                <h3>Cookies And Clear Gifs</h3>
                <p>
                  Cookies, Alphanumeric Identifiers, Are Used To Enhance User
                  Experience. Clear Gifs Help Manage Site Content Effectively.
                  We Maintain IP Address Logs For Site Diagnostics And Broad
                  Demographic Data, Without Tying It To Personally Identifiable
                  Information.
                </p>

                <h3>Testimonials</h3>
                <p>
                  With Consent, We May Post Testimonials Along With Names.
                  Removal Requests Are Honored.
                </p>

                <h3>Links To Other Websites</h3>
                <p>
                  Linked Websites Have Different Privacy Practices. Personal
                  Information Submitted To Those Sites Is Governed By Their
                  Privacy Statements.
                </p>

                <h3>Changes To Privacy Policy</h3>
                <p>
                  We May Modify This Policy And Will Communicate Changes Through
                  Various Means. Review This Policy Periodically For Updates.
                </p>
                <h4>Questions</h4>
                <p>
                  For privacy policy inquiries, contact us at{" "}
                  <a
                    href="tel:+18325484589"
                    className="redColor text-decoration-none"
                  >
                    +1 832 548 4589
                  </a>{" "}
                  or{" "}
                  <ObfuscatedEmail className="terms-condition-email" />
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
};

export default PrivacyPolicy;
