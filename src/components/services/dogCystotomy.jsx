import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

import "../../styles/components/services.scss";

function DogCystotomy() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-4">
        Understanding Cystotomy for Dogs: Causes, Symptoms, and Care
      </h1>
      <p className="font-18">
        Cystotomy, or bladder surgery for dogs, is sometimes necessary when a
        dog develops a condition that affects their bladder health, like bladder
        stones, tumors, or persistent urinary infections.
      </p>
      <p className="font-18">
        If your dog needs surgery, we're happy to provide a free consult to help
        you with the next steps.
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
        <h2 className="my-3 blue">What Causes Bladder Issues in Dogs?</h2>
        <p>
          Many dogs develop bladder issues due to genetic factors, dietary
          influences, infections, or other underlying health conditions. Common
          causes that might lead to a cystotomy include:
        </p>
        <ul>
          <li>
            <span className="bold roboto">Bladder Stones</span>
            <p className="my-2">
              Certain breeds are more prone to bladder stones in dogs. Breeds
              like Dalmatians, Bulldogs, and Miniature Schnauzers often have a
              higher risk of bladder stone formation due to unique metabolic
              characteristics. Bladder stones in dogs are mineral formations
              that can vary in size and may obstruct urine flow or irritate the
              bladder wall.
            </p>
          </li>
          <li>
            <span className="bold roboto">Bladder Tumors</span>
            <p className="my-2">
              While less common, bladder tumors in dogs can sometimes form in or
              around the bladder. Older dogs or those with a history of certain
              infections may be at a higher risk. These tumors can interfere
              with normal urination and cause discomfort, requiring a cystotomy
              to remove the growth and relieve symptoms.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="my-3 blue">
          Recognizing Symptoms of Bladder Issues in Dogs
        </h2>
        <p>
          Pet owners can play a big role in spotting early signs of bladder
          problems that might eventually require intervention, such as a
          cystotomy. Some signs to watch for in dogs include:
        </p>
        <ul>
          <li>
            Straining, painful urination, or frequent attempts to urinate with
            little output
          </li>
          <li>Hematuria, or blood in the urine</li>
          <li>
            Increased frequency of urination, particularly if it's out of the
            ordinary
          </li>
          <li>
            Behavioral changes. Dogs in pain may seem more irritable, restless,
            or lethargic
          </li>
          <li>
            Incontinence or leaking urine. This may happen if the bladder is
            irritated or obstructed
          </li>
        </ul>
        <p>
          If your dog shows any of these symptoms, scheduling an appointment
          with a vet to assess bladder health is essential. In some cases,
          dietary adjustments or medication can help resolve mild issues without
          the need for surgery. However, if these symptoms are severe or don't
          respond to other treatments, cystotomy may be the next step.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">
          How Cystotomy Can Help Improve Your Dog's Quality of Life
        </h2>
        <p>
          For dogs suffering from bladder issues, cystotomy can bring
          significant relief and improve their quality of life. When bladder
          stones or tumors are removed, your dog may experience less pain, a
          return to normal urination, and an overall improvement in energy and
          well-being. A cystotomy can be life-changing for dogs that have
          struggled with long-term symptoms, helping them get back to a more
          active, happy lifestyle.
        </p>
      </section>
    </div>
  );

  return (
    <Page
      selectedTab="services"
      selectedLevel2="dog-cystotomy"
      title="Cystotomy - Dogs"
      description="Does your dog need bladder surgery? Call today to schedule a free consultation."
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
export default DogCystotomy;
