import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ReactGA4 from "react-ga4";
import Modal from "react-bootstrap/Modal";

import http from "../services/httpService";

import Input from "./common/input";
import InputTextarea from "./common/inputTextarea";
import Page from "./common/page";

import { ReactComponent as PhoneIcon } from "./../assets/phone.svg";

import "./../styles/components/home.scss";

function Home() {
  /*const [showSpayNeuterAppointmentModal, setShowSpayNeuterAppointmentModal] =
    useState(false);*/
  const [showContactUsModal, setShowContactUsModal] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
  }, []);

  const introContent = (
    <div className="content-container intro">
      <div className="content-block">
        <h1 className="header">About Us</h1>
        <p>
          We are a locally-owned veterinary clinic focused on providing dental
          and other surgical procedures for dogs and cats. Our competitive
          flat-rate pricing ensures that you know exactly what you will pay.
        </p>
      </div>
    </div>
  );

  const pricing = (
    <div id="pricing" className="content-container pricing">
      <div className="content-block">
        <h1 className="header">Pricing</h1>
        <p className="mt-3">
          We use flat-rate pricing for all of our procedures. What that means
          for you:
        </p>
        <ul className="ms-5">
          <li>No surprises - you pay exactly what we quote</li>
          <li>
            All presurgical bloodwork, services, and medications to go home are
            already included in the price
          </li>
        </ul>

        <h2 className="mt-5 mb-3">Dental Services</h2>
        <table>
          <tbody>
            <tr>
              <td style={{ width: "400px" }}>Dental Cleaning</td>
              <td>$400</td>
            </tr>
            <tr>
              <td style={{ width: "400px" }}>
                Dental Cleaning + Additional Services <br />
                (extractions, oral surgery, etc.)
              </td>
              <td>Free Quote</td>
            </tr>
          </tbody>
        </table>
        <Link to="/dental-eval-request">
          <button
            className="btn-filled-primary font-18 mt-5 mb-4"
            style={{ width: "250px" }}
          >
            Schedule Free Evaluation
          </button>
        </Link>

        <h2 className="mt-5 mb-3">Lumps, Bumps, and Masses - Oh My!</h2>
        <p className="mt-3 font-18">
          Does your dog or cat have a lump, bump, or mass? Let's get it looked
          at! While these kinds of things are sometimes cosmetic, they can also
          become very serious threats to your pet's health if they are not
          managed appropriately.
        </p>
        <Link to="/surgical-consult-request">
          <button
            className="btn-filled-primary font-18 mt-5 mb-4"
            style={{ width: "250px" }}
          >
            Schedule Free Consult
          </button>
        </Link>

        <h2 className="mt-4 mb-2">Other Surgical Procedures</h2>
        <table>
          <tbody>
            <tr>
              <td style={{ width: "400px" }}>Spay</td>
              <td>$480</td>
            </tr>
            <tr>
              <td style={{ width: "400px" }}>Neuter</td>
              <td>$480</td>
            </tr>
            <tr>
              <td>Cystotomy (bladder stones)</td>
              <td>$1,200</td>
            </tr>
            <tr>
              <td>Abdominal Explore/Foreign Body Removal</td>
              <td>$1,900</td>
            </tr>
            <tr>
              <td>Limb Amputation</td>
              <td>$1,000</td>
            </tr>
            <tr>
              <td>Tail Amputation</td>
              <td>$900</td>
            </tr>
            <tr>
              <td>Eye Enucleation</td>
              <td>$1,000</td>
            </tr>
            <tr>
              <td>Gastropexy</td>
              <td>$800</td>
            </tr>
            <tr>
              <td>Gastropexy + Spay/Neuter</td>
              <td>$1,000</td>
            </tr>
            <tr>
              <td>Other</td>
              <td>Free Quote</td>
            </tr>
          </tbody>
        </table>

        <p className="mt-4 mb-2 font-20 bold">Call now to schedule</p>
        <a href="tel: 970-836-1208">
          <div className="phone d-flex">
            <PhoneIcon />
            <p>970-836-1208</p>
          </div>
        </a>

        {/*<button
          className="btn-filled-primary font-18 my-4"
          style={{ width: "250px" }}
          onClick={() => {
            setShowConsultAppointmentModal(true);
            if (process.env.NODE_ENV === "production") {
              ReactGA4.event("schedule_consult_clicked");
            }
          }}
        >
          Schedule Free Consult
        </button>*/}

        {/*<h2 className="mt-4 mb-2">Spay & Neuter Surgery</h2>
        <ul className="ms-5">
          <li>$480</li>
        </ul>
        <button
          className="btn-filled-primary font-18 my-4"
          style={{ width: "250px" }}
          onClick={() => setShowSpayNeuterAppointmentModal(true)}
        >
          Schedule Spay/Neuter
        </button>*/}

        <h1 className="header mt-5">Payment Plans</h1>
        <p className="mt-3">
          Want to pay over time? All of our procedures are eligible for Payment
          Plans!
        </p>
      </div>
    </div>
  );

  const googleMap = (
    <div style={{ lineHeight: "0" }}>
      <iframe
        title="Twin Peaks Veterinary Dental & Surgery Map"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12157.429948912322!2d-104.716708!3d40.3787689!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x876ea10068c1d6fd%3A0x4477530c9e58e3e7!2sTwin%20Peaks%20Vet%20Center!5e0!3m2!1sen!2sus!4v1718227304417!5m2!1sen!2sus"
        width="100%"
        height="600px"
        allowFullScreen=""
        loading="lazy"
      />
    </div>
  );

  return (
    <Page
      selectedTab="home"
      className="home"
      title="Twin Peaks Veterinary Dental & Surgery | Evans, CO"
      description="We are a locally-owned, innovative veterinary clinic focused on dental and other surgical procedures for dogs and cats"
    >
      {introContent}
      {pricing}
      {googleMap}
      {/*showSpayNeuterAppointmentModal && (
        <RequestAppointmentModal
          appointmentType="Spay/Neuter"
          availableDates={[
            "Select Date",
            "Thursday August 22nd",
            "Tuesday August 27th",
            "Friday August 30th",
          ]}
          availableTimes={[
            { date: "Select Date", times: [] },
            { date: "Monday August 22nd", times: ["7:30 am"] },
            { date: "Tuesday August 27th", times: ["7:30 am"] },
            { date: "Friday August 30th", times: ["7:30 am"] },
          ]}
          handleClose={() => setShowSpayNeuterAppointmentModal(false)}
        />
      )*/}
      {showContactUsModal && (
        <ContactUsModal handleClose={() => setShowContactUsModal(false)} />
      )}
    </Page>
  );
}

function ContactUsModal({ handleClose }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [content, setContent] = useState("");

  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState();

  const handleSubmit = async () => {
    try {
      setErrorMessage("");

      await http.post(`/contactUs`, {
        firstName,
        lastName,
        phone,
        email,
        content,
      });

      setRequestSubmitted(true);
    } catch (error) {
      setErrorMessage(error.response.data.message);
      setRequestSubmitted(false);
    }
  };

  return (
    <Modal
      className="modal-auto-width"
      show={true}
      onHide={handleClose}
      centered
    >
      <form>
        {errorMessage && <p className="mb-3 sura error">{errorMessage}</p>}

        {requestSubmitted && (
          <React.Fragment>
            <p className="input-width">
              Your request has been submitted. We will be in touch shortly!
            </p>
            <button
              className="mt-4 btn-filled-primary align-self-center"
              onClick={(e) => {
                e.preventDefault();
                handleClose();
              }}
            >
              Close
            </button>
          </React.Fragment>
        )}

        {!requestSubmitted && (
          <React.Fragment>
            <Input
              name="firstName"
              value={firstName}
              label="First Name"
              onChange={setFirstName}
            />
            <Input
              name="lastName"
              value={lastName}
              label="Last Name"
              onChange={setLastName}
            />
            <Input
              name="phone"
              value={phone}
              label="Phone Number"
              onChange={setPhone}
            />
            <Input
              name="email"
              type="email"
              value={email}
              label="Email"
              onChange={setEmail}
            />
            <InputTextarea
              name="content"
              value={content}
              label="How can we help you?"
              rows="4"
              onChange={setContent}
            />
            <button
              className="mt-4 btn-filled-primary align-self-center"
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Submit
            </button>
          </React.Fragment>
        )}
      </form>
    </Modal>
  );
}

export default Home;
