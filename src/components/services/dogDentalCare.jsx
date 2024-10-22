import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

import "../../styles/components/services.scss";

function DogDentalCare() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-4">Dog Dental Care</h1>
      <p className="font-18">
        Dental care for dogs is often one of the most overlooked aspects of
        their well-being. Just like people, dogs need regular teeth cleaning and
        dental check-ups to prevent plaque buildup, tartar formation, and gum
        disease.
      </p>
      <section>
        <h2 className="my-3 blue">Dental Services</h2>
        <ul>
          <li>
            <span className="bold roboto">Dental Cleaning</span>
          </li>
          <li>
            <span className="bold roboto">Tooth Extraction</span>
            <p className="my-2">
              Removal of fractured, abcessed, or otherwise damaged teeth
            </p>
          </li>
          <li>
            <span className="bold roboto">Gingivectomy</span>
            <p className="my-2">Removal of diseased gum tissue</p>
          </li>
          <li>
            <span className="bold roboto">
              Removal of oral tumors or masses
            </span>
          </li>
        </ul>
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
        <h2 className="my-3 blue">The importance of regular teeth cleanings</h2>
        <p>
          Dental problems are more common in dogs than many owners realize.
          Without proper dental care, your dog may suffer from painful
          conditions such as periodontal disease, abscesses, and even tooth
          loss.
        </p>
        <p>Some benefits of professional dog teeth cleaning include:</p>
        <ul>
          <li>
            Removal of plaque and tartar, reducing the risk of dental disease
          </li>
          <li>
            Prevention of bad breath caused by bacteria buildup in the mouth
          </li>
          <li>
            Early detection of potential oral health issues, allowing for timely
            treatment
          </li>
          <li>Improved overall health and quality of life</li>
        </ul>
      </section>
      <section>
        <h2 className="my-3 blue">
          How often does my dog need a dental cleaning?
        </h2>
        <p>
          Your dog's exact needs will depend on several things, including age
          and breed. However, in general, dogs should have their teeth cleaned
          annually.
        </p>
        <p>
          Our veterinarians can provide a free dental evaluation to help you
          understand your dog's specific needs. They will also provide an exact
          quote for the services they are recommending.
        </p>
        <Link to="/dental-eval-request">
          <button
            className="btn-filled-primary font-18 mt-5 mb-4"
            style={{ width: "250px" }}
          >
            Schedule Free Evaluation
          </button>
        </Link>
      </section>
      <section>
        <h2 className="my-3 blue">What happens during a dental cleaning?</h2>
        <p>A dental cleaning will include the following:</p>
        <ul>
          <li>Full mouth dental X-rays</li>
          <li>Tartar removal using specialized dental instruments</li>
          <li>Polishing of the enamel</li>
          <li>
            Disinfection of the mouth with fluoride sealer or plaque repellent
            treatment
          </li>
        </ul>
      </section>
      <section>
        <h2 className="my-3 blue">
          What is dental X-ray and why is it important?
        </h2>
        <p>
          Did you know that more than half of your dog's tooth is under the gum
          line? That means that there is often much more going on than what can
          be seen with the naked eye. Many times these unseen issues are the
          source of pain for pets. Dental radiography, or dental X-ray, allows
          our veterinarians to see the full picture so that we can take care of
          each tooth.
        </p>
        <p>
          Dental X-ray is an important part of creating the best outcome for
          your dog, so it is included in every dental procedure we perform at no
          additional cost. Your flat-rate quote will always remain the same,
          even if dental X-ray reveals additional services that need to be
          performed.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">
          Will my dog need to be put under anesthesia?
        </h2>
        <p>
          At Twin Peaks, all dental cleanings and procedures are done under
          general anesthesia to ensure the best outcome. The quality of care
          your dog will receive is significantly higher than what could be
          provided while they are awake.
        </p>
        <p>
          The price we quote includes pre-surgical bloodwork to make sure your
          dog is a good candidate for anesthesia before we proceed.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">
          How do I know if my dog needs dental work?
        </h2>
        <p>
          We recommend having your dog's dental needs evaluated annually.
          However, if you notice any of these signs, it's best to have them seen
          right away:
        </p>
        <ul>
          <li>
            <span className="bold roboto">Bad Breath</span>
            <p className="my-2">
              This is often the first sign of dental disease. While occasional
              bad breath is normal, a consistent smell indicates a bacterial
              buildup
            </p>
          </li>
          <li>
            <span className="bold roboto">Tartar and Plaque Buildup</span>
            <p className="my-2">
              Yellow or brown stains on your dog’s teeth are visible signs of
              plaque and tartar accumulation. This buildup can lead to gum
              disease if left untreated.
            </p>
          </li>
          <li>
            <span className="bold roboto">Bleeding or Swollen Gums</span>
            <p className="my-2">
              If your dog's gums are red, swollen, or bleeding, this is a clear
              sign of gum disease. Without proper dental care, this can lead to
              painful infections and even tooth loss.
            </p>
          </li>
          <li>
            <span className="bold roboto">Difficulty Eating or Chewing</span>
            <p className="my-2">
              If your dog seems to be avoiding hard foods, or if they are
              chewing on one side of their mouth, they could be experiencing
              dental pain.
            </p>
          </li>
          <li>
            <span className="bold roboto">Excessive Drooling</span>
            <p className="my-2">
              While some drooling is normal for dogs, excessive drooling or
              signs of discomfort while eating could indicate a dental problem
            </p>
          </li>
        </ul>
      </section>
      <Link to="/dental-eval-request">
        <button
          className="btn-filled-primary font-18 mt-5 mb-4"
          style={{ width: "250px" }}
        >
          Schedule Free Evaluation
        </button>
      </Link>
    </div>
  );

  return (
    <Page
      selectedTab="services"
      selectedLevel2="dog-dental-care"
      title="Dog Dental Care"
      description="Does your dog need dental care? Call today to schedule your free dental evalutation."
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
export default DogDentalCare;
