import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

import "../../styles/components/services.scss";

function CatForeignBody() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-4">
        Foreign Body Surgery in Cats (Abdominal Exploration)
      </h1>
      <section>
        <h2 className="my-3 blue">Pricing</h2>
        <p>$1,900 (Flat-rate)</p>
        <p>
          If your cat needs surgery, please call us immediately at 970-836-1208.
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
        <h2 className="my-3 blue">Understanding Foreign Body Surgery</h2>
        <p>
          Foreign body surgery (or abdominal exploration), is a critical
          procedure performed when a cat has ingested an object that is causing
          intestinal blockage or other complications. Cats are naturally curious
          creatures, often exploring their environment with their mouths, which
          can lead to the accidental ingestion of items such as toys, strings,
          fabric, or even food packaging.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">Signs Your Cat May Need Surgery</h2>
        <p>
          If your cat exhibits any of the following symptoms, it may be an
          indication of a foreign body obstruction:
        </p>
        <ul>
          <li>
            <span className="bold roboto">Vomiting</span>
            <p className="my-2">
              Frequent vomiting can signal that your cat is trying to expel
              something that it has ingested.
            </p>
          </li>
          <li>
            <span className="bold roboto">Loss of Appetite</span>
            <p className="my-2">
              A sudden disinterest in food can be a sign of gastrointestinal
              distress.
            </p>
          </li>
          <li>
            <span className="bold roboto">Abdominal Pain</span>
            <p className="my-2">
              Cats may exhibit signs of pain when you touch their abdomen or may
              adopt a hunched posture.
            </p>
          </li>
          <li>
            <span className="bold roboto">Lethargy</span>
            <p className="my-2">
              Decreased activity levels can indicate discomfort or illness.
            </p>
          </li>
          <li>
            <span className="bold roboto">Diarrhea or Constipation</span>
            <p className="my-2">
              Changes in bowel movements are common with obstructions.
            </p>
          </li>
        </ul>
        <p>
          If you notice any of these signs, it's crucial to seek veterinary care
          promptly.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">
          The Serious Nature of Foreign Body Obstruction
        </h2>
        <p>
          Foreign body obstruction in cats is a critical condition that requires
          immediate attention. When a cat ingests an object that cannot pass
          through the gastrointestinal tract, it can lead to severe
          complications, including:
        </p>
        <ul>
          <li>
            <span className="bold roboto">Intestinal Blockage</span>
            <p className="my-2">
              An obstruction can prevent food and fluids from moving through the
              intestines, leading to pain, vomiting, and dehydration.
            </p>
          </li>
          <li>
            <span className="bold roboto">Tissue Damage</span>
            <p className="my-2">
              Prolonged obstruction can cause pressure on the intestinal walls,
              resulting in tissue necrosis (death of tissue). This can lead to
              perforation, where a hole forms in the intestine, allowing
              intestinal contents to spill into the abdominal cavity, which can
              be life-threatening.
            </p>
          </li>
          <li>
            <span className="bold roboto">Systemic Infection</span>
            <p className="my-2">
              If an obstruction causes perforation, bacteria can enter the
              abdominal cavity, leading to peritonitis—a severe and often fatal
              infection.
            </p>
          </li>
          <li>
            <span className="bold roboto">
              Dehydration and Electrolyte Imbalance
            </span>
            <p className="my-2">
              Vomiting and loss of appetite can quickly lead to dehydration and
              an imbalance of electrolytes, complicating your cat's health
              further.
            </p>
          </li>
        </ul>
        <p>
          Delaying treatment for a suspected foreign body obstruction can
          significantly increase the risks to your cat's health. Symptoms may
          worsen rapidly, and what may start as a manageable situation can
          escalate into a critical emergency.
        </p>
        <p>
          If you suspect your cat has ingested a foreign object or is exhibiting
          symptoms of obstruction, it is vital to seek veterinary care without
          delay. Early intervention can make all the difference in your cat's
          recovery and overall prognosis.
        </p>
      </section>
    </div>
  );

  return (
    <Page
      selectedTab="services"
      selectedLevel2="cat-foreign-body-surgery"
      title="Foreign Body Surgery - Cats"
      description="Learn about foreign body surgery (abdominal exploration) in cats. If you believe your cat has an obstruction, call us immediately."
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
export default CatForeignBody;
