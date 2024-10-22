import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CatDentalCare from "./components/services/catDentalCare";
import CatForeignBody from "./components/services/catForeignBody";
import DogDentalCare from "./components/services/dogDentalCare";
import DogForeignBody from "./components/services/dogForeignBody";

import Home from "./components/home";
import AppointmentRequest from "./components/appointmentRequest";

import "./styles/style.scss";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/surgical-consult-request"
          element={
            <AppointmentRequest
              appointmentType="Surgical Consult"
              headerText="Free Surgical Consult"
              analyticsEventName="surgical_consult_request_submitted_website"
            />
          }
        />
        <Route
          exact
          path="/services/cat-dental-care"
          element={<CatDentalCare />}
        />
        <Route
          exact
          path="/services/cat-foreign-body-surgery"
          element={<CatForeignBody />}
        />
        <Route
          exact
          path="/services/dog-dental-care"
          element={<DogDentalCare />}
        />
        <Route
          exact
          path="/services/dog-foreign-body-surgery"
          element={<DogForeignBody />}
        />
        <Route
          exact
          path="/dental-eval-request"
          element={
            <AppointmentRequest
              appointmentType="Dental Eval"
              headerText="Free Dental Evaluation"
              analyticsEventName="dental_eval_request_submitted_website"
            />
          }
        />
        <Route
          exact
          path="/dental-eval-request/gv"
          element={
            <AppointmentRequest
              appointmentType="Dental Eval"
              headerText="Free Dental Evaluation"
              analyticsEventName="dental_eval_request_submitted_genius_vets"
            />
          }
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
