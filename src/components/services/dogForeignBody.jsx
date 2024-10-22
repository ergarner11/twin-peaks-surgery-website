import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

import "../../styles/components/services.scss";

function DogForeignBody() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-4">
        Foreign Body Surgery in Dogs (Abdominal Exploration)
      </h1>
      <section>
        <h2 className="my-3 blue">Pricing</h2>
        <p>$1,900 (Flat-rate)</p>
        <p>
          If your dog needs surgery, please call us immediately at 970-836-1208.
        </p>
        <Link to="/">
          <button
            className="btn-filled-primary font-18 mt-5 mb-4"
            style={{ width: "250px" }}
          >
            Learn More About Pricing
          </button>
        </Link>
      </section>
      <section>
        <h2 className="my-3 blue">What is Foreign Body Ingestion?</h2>
        <p>
          When a dog swallows something that they shouldn't—like a toy, sock,
          bone, or even pieces of furniture—it's referred to as foreign body
          ingestion. This can lead to a blockage, or obstruction, in the dog's
          digestive system. Sometimes, these items pass through naturally, but
          in many cases, they get stuck and cause serious health risks,
          requiring immediate veterinary attention.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">
          Common Signs Your Dog May Have Swallowed Something
        </h2>
        <p>
          You might not always see your dog swallow something they shouldn’t,
          but there are key signs that can indicate a problem:
        </p>
        <ul>
          <li>Repeated vomiting</li>
          <li>Loss of appetite or refusal to eat</li>
          <li>Lethargy</li>
          <li>Abdominal pain</li>
          <li>Diarrhea or constipation</li>
          <li>Drooling excessively</li>
        </ul>
        <p>
          If your dog shows these signs, especially after suspected ingestion of
          an object, it's crucial to seek veterinary help right away.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">When Does My Dog Need Surgery?</h2>
        <p>
          If your dog has a blockage due to a swallowed object and it cannot
          pass through their system naturally, surgery may be required. This
          procedure is known as foreign body surgery, or abdominal exploration
          surgery (also called an exploratory laparotomy), to locate and remove
          the foreign object.
        </p>
        <p>
          Delaying surgery can lead to severe complications, including tearing
          of the intestines (which can lead to life-threatening infections),
          dehydration, or death.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">How to Prevent Foreign Body Ingestion</h2>
        <p>
          Dogs are curious and tend to chew or swallow things they shouldn't,
          but you can take steps to reduce the chances of foreign body
          ingestion:
        </p>
        <ul>
          <li>
            <span className="bold roboto">
              Keep dangerous items out of reach
            </span>
            <p className="my-2">
              Household objects like small toys, socks, or bones can be tempting
              for dogs to chew on.
            </p>
          </li>
          <li>
            <span className="bold roboto">Supervise playtime</span>
            <p className="my-2">
              Make sure your dog isn't playing with items that could easily
              break or be swallowed.
            </p>
          </li>
          <li>
            <span className="bold roboto">Provide safe chew toys</span>
            <p className="my-2">Use durable, veterinarian-approved toys.</p>
          </li>
          <li>
            <span className="bold roboto">Train your dog</span>
            <p className="my-2">
              Teaching commands like "leave it" or "drop it" can help prevent
              accidental ingestion.
            </p>
          </li>
        </ul>
      </section>
    </div>
  );

  return (
    <Page
      selectedTab="services"
      selectedLevel2="dog-foreign-body-surgery"
      title="Foreign Body Surgery - Dogs"
      description="Learn about foreign body surgery (abdominal exploration) in dogs. If you believe your dog has an obstruction, call us immediately."
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
export default DogForeignBody;
