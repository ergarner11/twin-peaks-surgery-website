import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import { Link } from "react-router-dom";
import "../styles/react-popper-tooltip.css";

import Banner from "./banner";

import { Mobile, NotMobile } from "./common/responsive";

import { ReactComponent as LessIcon } from "../assets/less.svg";
import { ReactComponent as MoreIcon } from "../assets/more.svg";

import { ReactComponent as BarsIcon } from "../assets/bars.svg";
import { ReactComponent as TimesIcon } from "../assets/times.svg";

import "../styles/components/nav.scss";

function Navbar({ selectedTab, selectedCategory, selectedLevel2 }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandCategory, setExpandCategory] = useState(selectedTab);

  const nav2Links = (
    <div className="nav-tabs">
      <ul>
        <li
          className={
            "nav-tab" +
            (selectedTab === "home" && !selectedCategory ? " selected" : "")
          }
        >
          <Link to="/">
            <span className="tab-content">Home</span>
          </Link>
        </li>
        <Tab
          tabText="Services"
          selectedTab={selectedTab}
          selectedTabMatch="services"
          selectedLevel2={selectedLevel2}
          expandCategory={expandCategory}
          handleClick={() =>
            setExpandCategory(expandCategory ? "" : "services")
          }
          submenuConfig={[
            {
              level2Match: "dog-dental-care",
              pageLink: "/services/dog-dental-care",
              linkText: "Dog Dental Care",
            },
            {
              level2Match: "dog-foreign-body-surgery",
              pageLink: "/services/dog-foreign-body-surgery",
              linkText: "Dog Foreign Body Surgery",
            },
            {
              level2Match: "cat-dental-care",
              pageLink: "/services/cat-dental-care",
              linkText: "Cat Dental Care",
            },
            {
              level2Match: "cat-foreign-body-surgery",
              pageLink: "/services/cat-foreign-body-surgery",
              linkText: "Cat Foreign Body Surgery",
            },
          ]}
        />
      </ul>
    </div>
  );

  return (
    <React.Fragment>
      <Mobile>
        <nav className="background-dark-blue">
          <div className="d-flex p-3 align-items-center justify-content-between">
            <div className="white" onClick={() => setIsExpanded(!isExpanded)}>
              {isExpanded && <TimesIcon />}
              {!isExpanded && <BarsIcon />}
            </div>
          </div>
          <Collapse in={isExpanded}>{nav2Links}</Collapse>
        </nav>
      </Mobile>
      <NotMobile>
        <nav className="nav-2 container-fluid d-flex flex-row justify-content-center">
          <div className="nav-content flex-row-aligned justify-content-center flex-grow-1">
            {nav2Links}
          </div>
        </nav>
      </NotMobile>
      <Banner />
    </React.Fragment>
  );
}

function Tab({
  tabText,
  tabLink,
  selectedTab,
  selectedTabMatch,
  selectedLevel2,
  expandCategory,
  handleClick,
  submenuConfig,
}) {
  return (
    <React.Fragment>
      <Mobile>
        <li
          className={
            "nav-tab no-hover-underline" +
            (selectedTab === selectedTabMatch && !selectedLevel2
              ? " selected"
              : "")
          }
          onClick={handleClick}
        >
          <span className="tab-content">
            {expandCategory !== selectedTabMatch && <MoreIcon />}
            {expandCategory === selectedTabMatch && <LessIcon />}
            {tabText}
          </span>
        </li>
        {expandCategory === selectedTabMatch && (
          <Submenu
            selectedLevel2={selectedLevel2}
            submenuConfig={submenuConfig}
          />
        )}
      </Mobile>
      <NotMobile>
        <li
          className={
            "nav-tab no-hover-underline" +
            (selectedTab === selectedTabMatch ? " selected" : "")
          }
        >
          {tabLink && (
            <Link to={`/${tabLink}`}>
              <span className="tab-content">{tabText}</span>
            </Link>
          )}
          {!tabLink && <span className="tab-content">{tabText}</span>}
          <Submenu
            selectedLevel2={selectedLevel2}
            submenuConfig={submenuConfig}
          />
        </li>
      </NotMobile>
    </React.Fragment>
  );
}

function Submenu({ selectedLevel2, submenuConfig }) {
  return (
    <div className="nav-tabs">
      <ul className="submenu">
        {submenuConfig.map((t, i) => (
          <SubmenuLink key={i} selectedLevel2={selectedLevel2} config={t} />
        ))}
      </ul>
    </div>
  );
}

function SubmenuLink({ selectedLevel2, config }) {
  return (
    <li
      className={
        "nav-tab level-2" +
        (selectedLevel2 === config.level2Match ? " selected" : "")
      }
    >
      <Link to={config.pageLink}>
        <span className="tab-content">{config.linkText}</span>
      </Link>
    </li>
  );
}

export default Navbar;