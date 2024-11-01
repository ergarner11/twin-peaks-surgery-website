import React from "react";

import logo from "../assets/logo-twin-peaks-dental-surgery-dark.png";

import { Desktop, Tablet, Mobile, NotMobile } from "./common/responsive";

import { ReactComponent as ClockIcon } from "../assets/clock.svg";
import { ReactComponent as MapIcon } from "../assets/map-marker-alt.svg";
import { ReactComponent as PhoneIcon } from "../assets/phone.svg";

import "../styles/components/home.scss";

function Banner() {
  const phone = (
    <a href="tel: 970-836-1208">
      <div className="phone">
        <PhoneIcon />
        <p>970-836-1208</p>
      </div>
    </a>
  );

  const address = (
    <div
      className="address"
      onClick={() => window.open("https://maps.app.goo.gl/AfYri5c4xF97NAdZ7")}
    >
      <MapIcon />
      <div>
        <p>3629 23rd Avenue</p>
        <p>Evans, CO 80620</p>
      </div>
    </div>
  );

  const hours = (
    <div className="hours d-flex">
      <ClockIcon className="me-3 mt-3" />
      <div>
        <p>Monday - Friday: 8am - 5pm</p>
        <p>Saturday: Closed</p>
        <p>Sunday: Closed</p>
        <br />
        <p>Thanksgiving: Closed</p>
      </div>
    </div>
  );

  return (
    <React.Fragment>
      <Mobile>
        <div className="banner d-flex flex-column align-items-start background-white p-4">
          <img
            src={logo}
            className="align-self-center mb-4"
            height="150px"
            alt="Twin Peaks Veterinary Dental & Surgery logo"
          />
          <div className="mb-4">{hours}</div>
          <div className="mb-4">{phone}</div>
          <div className="mb-4">{address}</div>
        </div>
      </Mobile>
      <NotMobile>
        <div className="banner d-flex justify-content-center background-white">
          <div
            className="d-flex justify-content-between flex-grow-1 p-4"
            style={{ maxWidth: "1024px" }}
          >
            <img
              src={logo}
              height="150px"
              alt="Twin Peaks Veterinary Dental & Surgery logo"
            />
            <Tablet>
              <div className="d-flex flex-column justify-content-between">
                {hours}
                <div className="my-3">{phone}</div>
                {address}
              </div>
            </Tablet>
            <Desktop>
              <div className="d-flex flex-column justify-content-around">
                {hours}
              </div>
              <div className="d-flex flex-column justify-content-center">
                {phone}
                <div className="mt-3">{address}</div>
              </div>
            </Desktop>
          </div>
        </div>
      </NotMobile>
    </React.Fragment>
  );
}

export default Banner;
