import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA4 from "react-ga4";

import Page from "../common/page";
import { Mobile, NotMobile } from "../common/responsive";

import "../../styles/components/services.scss";

function CatDentalCare() {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
  }, []);

  const content = (
    <div className="content">
      <h1 className="mb-4">Cat Dental Care</h1>
      <p className="font-18">
        Just like humans, cats need regular dental care to maintain overall
        health. Cats are experts at hiding pain, and dental issues can often go
        unnoticed until they're severe. A healthy mouth helps prevent
        discomfort, difficulty eating, and even more serious health problems,
        such as infections that spread to other parts of the body.
      </p>
      <section>
        <h2 className="my-3 blue">Dental Services</h2>
        <ul>
          <li>
            <span className="bold roboto">Dental Cleaning</span>
            <p className="my-2">
              Our skilled veterinary staff will remove tarter from each tooth
              and polish the enamel using specialized dental equipment. In
              addition to removing existing buildup, this also helps to prevent
              future buildup.
            </p>
          </li>
          <li>
            <span className="bold roboto">Dental X-Ray</span>
            <p className="my-2">
              All dental cleanings at Twin Peaks include full mounth dental
              X-rays to give our veterinarians a complete view of your cat's
              mouth. About half of each tooth is under the gumline, so this is
              an important part of properly addressing problems.
            </p>
          </li>
          <li>
            <span className="bold roboto">Oral Surgery</span>
            <p className="my-2">Tooth extractions</p>
            <p className="my-2">Gingivectomy</p>
            <p className="my-2">Oral tumor or mass removal</p>
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
        <h2 className="my-3 blue">Why Your Cat's Dental Health Matters</h2>
        <p>
          Dental diseases in cats are far more common than you might think.
          Without proper care, these problems can lead to significant discomfort
          and systemic issues that can shorten your cat's life. Ensuring your
          cat has clean teeth and healthy gums is key to their long-term
          well-being.
        </p>
      </section>
      <section>
        <h2 className="my-3 blue">Common Dental Issues in Cats</h2>
        <p>
          While cats face many of the same dental problems as other pets, they
          also suffer from some conditions unique to felines. Below are the most
          common dental issues that affect cats:
        </p>
        <ul>
          <li>
            <span className="bold roboto">Periodontal Disease</span>
            <p className="my-2">
              Periodontal disease is the most prevalent dental condition in
              cats, starting with the buildup of plaque and tartar on the teeth.
              Left untreated, it leads to inflammation of the gums (gingivitis)
              and progresses to damage the bones and ligaments that support the
              teeth.
            </p>
          </li>
          <li>
            <span className="bold roboto">Tooth Resorption</span>
            <p className="my-2">
              Tooth resorption is a painful condition where a cat's body starts
              to break down and absorb the tooth, often below the gum line. It's
              a unique issue in cats and can affect any tooth, though the molars
              are most commonly impacted.
            </p>
          </li>
          <li>
            <span className="bold roboto">
              Feline Odontoclastic Resorptive Lesions (FORLs)
            </span>
            <p className="my-2">
              FORLs are lesions that form on a cat's teeth as a result of the
              resorption process. These lesions can cause significant pain,
              especially when the lesions extend into the tooth's sensitive
              parts.
            </p>
          </li>
          <li>
            <span className="bold roboto">Oral Tumors</span>
            <p className="my-2">
              Although less common, cats can develop tumors in the mouth, which
              may be benign or cancerous. Early detection is critical for the
              successful treatment of oral tumors.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="my-3 blue">Preventing Dental Disease in Cats</h2>
        <p>
          The good news is that dental disease is largely preventable with a
          proactive approach. Here are the best ways to keep your cat's teeth
          clean and gums healthy.
        </p>
        <ul>
          <li>
            <span className="bold roboto">
              Regular Veterinary Dental Check-Ups
            </span>
            <p className="my-2">
              Routine dental exams by a veterinarian are the best way to catch
              potential issues before they become serious.
            </p>
          </li>
          <li>
            <span className="bold roboto">Daily Brushing</span>
            <p className="my-2">
              Brushing your cat's teeth at home is one of the most effective
              ways to prevent plaque and tartar buildup. Use a cat-specific
              toothbrush and toothpaste designed for pets—never use human
              toothpaste, as it contains ingredients toxic to cats. Start
              slowly, using treats and positive reinforcement to get your cat
              used to the sensation of brushing.
            </p>
          </li>
          <li>
            <span className="bold roboto">Dental Diets and Treats</span>
            <p className="my-2">
              Specially formulated dental diets and treats can help keep your
              cat's teeth cleaner by reducing tartar. These foods are designed
              to be abrasive enough to scrape the teeth as your cat chews,
              helping to prevent plaque buildup.
            </p>
          </li>
          <li>
            <span className="bold roboto">Dental Toys</span>
            <p className="my-2">
              Chewing on certain toys can help reduce tartar and keep teeth
              strong. Look for cat-specific dental toys that are designed to
              promote oral health.
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2 className="my-3 blue">What's Next?</h2>
        <p>Does your cat need a dental evaluation? We've got your back!</p>
        <Link to="/dental-eval-request">
          <button
            className="btn-filled-primary font-18 mt-5 mb-4"
            style={{ width: "250px" }}
          >
            Schedule Free Evaluation
          </button>
        </Link>
      </section>
    </div>
  );

  return (
    <Page
      selectedTab="services"
      selectedLevel2="cat-dental-care"
      title="Cat Dental Care"
      description="Learn how to care for your cat's teeth and prevent common dental issues like periodontal disease and tooth resorption. Discover symptoms to watch for, prevention tips, and treatment options to ensure your cat's long-term dental health. Schedule a veterinary dental evaluation today!"
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
export default CatDentalCare;
