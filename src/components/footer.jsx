import React from "react";

import "../styles/components/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="legal">
          <p>Copyright © 2024 Twin Peaks Veterinary Clinic</p>
          <div className="documents">
            <a
              href="https://app.termly.io/document/privacy-policy/774c8f02-ba40-4d34-985c-72f884509f6e"
              target="_blank"
              rel="noreferrer"
            >
              Privacy Policy
            </a>
            <span>|</span>
            <a
              href="https://app.termly.io/document/terms-of-use-for-website/95e1bcd1-b1af-4d01-b6b5-4320929fd69e"
              target="_blank"
              rel="noreferrer"
            >
              Terms of Use
            </a>
            <span>|</span>
            <a
              href="https://app.termly.io/document/disclaimer/e0eb5565-f841-4248-b6bb-066b783d81eb"
              target="_blank"
              rel="noreferrer"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
