import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

import "../../styles/components/services.scss";

function DogMassRemoval() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-4">Does Your Dog have a Lump, Bump, Mass, or Tumor?</h1>
      <p className="font-18">
        Discovering any unusual lump, bump, or mass on your dog can be scary.
        Whether it's a small, seemingly harmless bump under the skin or
        something more serious, it's crucial to get it evaluated by a
        veterinarian as soon as possible.
      </p>
      <p className="font-18">
        If you've found something concerning, we're here to help! We offer a
        free consultation to help you understand next steps and recommendations.
      </p>
      <Link to="/surgical-consult-request">
        <button
          className="btn-filled-primary font-18 mt-5 mb-4"
          style={{ width: "250px" }}
        >
          Schedule Free Consultation
        </button>
      </Link>
      <section>
        <h2 className="my-3 blue">Why Do Dogs Get Lumps and Bumps?</h2>
        <p>
          As dogs age, they are more likely to develop lumps and bumps. While
          some of these masses may be benign, others may be more serious.
          Unfortunately, malignant tumors can develop in dogs, just like in
          humans. That's why early detection and prompt treatment are critical.
          The best way to ensure your dog's well-being is by having any new lump
          or mass examined by a veterinarian.
        </p>
        <p>Some common reasons dogs develop lumps or bumps include:</p>
        <ul>
          <li>
            <span className="bold roboto">Benign growths</span>
            <p className="my-2">
              These are non-cancerous and often don't require treatment unless
              they cause discomfort. Lipomas (fatty tumors) are a common
              example.
            </p>
          </li>
          <li>
            <span className="bold roboto">Infections or abscesses</span>
            <p className="my-2">
              Sometimes, a dog's body reacts to an injury or infection by
              forming a lump that may be filled with pus
            </p>
          </li>
          <li>
            <span className="bold roboto">Cancerous tumors</span>
            <p className="my-2">
              While not all lumps on dogs are cancerous, it's important to rule
              out malignancy with proper diagnostic tests.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="my-3 blue">
          When Should I Be Concerned About a Lump on My Dog?
        </h2>
        <p>
          While many lumps and bumps are benign, there are signs that pet owners
          should be aware of. If you notice any of the following, it's important
          to get the mass evaluated as soon as possible:
        </p>
        <ul>
          <li>Rapid growth</li>
          <li>Changes in shape, color, or texture</li>
          <li>Pain or discomfort</li>
          <li>Bleeding or discharge</li>
        </ul>
      </section>
      <section>
        <h2 className="my-3 blue">Treatment Options</h2>
        <p>
          If a mass is found to be benign and not causing any harm, we may
          recommend monitoring it for changes. However, if the mass is cancerous
          or growing quickly, surgery is often the best course of action.
        </p>
        <p>
          Our team is highly skilled in mass removal for dogs, ensuring the
          procedure is done safely and effectively.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">Book Your Appointment Today</h2>
        <p>
          If you've noticed a lump, bump, or mass on your dog, don't wait. Early
          evaluation and treatment can make all the difference.
        </p>
        <Link to="/surgical-consult-request">
          <button
            className="btn-filled-primary font-18 mt-5 mb-4"
            style={{ width: "250px" }}
          >
            Schedule Free Consultation
          </button>
        </Link>
      </section>
    </div>
  );

  return (
    <Page
      selectedTab="services"
      selectedLevel2="dog-mass-removal"
      title="Mass Removal - Dogs"
      description="Does your dog have a lump, bump, or mass? Call today to schedule a free consultation."
    >
      <div className="service-page">
        <Mobile>{content}</Mobile>
        <NotMobile>
          <div className="container">{content}</div>
        </NotMobile>
      </div>
    </Page>
  );
}
export default DogMassRemoval;
