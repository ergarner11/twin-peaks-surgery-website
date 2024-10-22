import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ReactGA4 from "react-ga4";
import moment from "moment-timezone";

import http from "../services/httpService";

import Input from "./common/input";
import InputSelect from "./common/inputSelect";
import InputTextarea from "./common/inputTextarea";

import logo from "../assets/logo-twin-peaks-dental-surgery-dark.png";

function AppointmentRequest({
  appointmentType,
  headerText,
  analyticsEventName,
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "production") {
      ReactGA4.initialize(process.env.REACT_APP_GA4_PROPERTY_ID);
      ReactGA4.send("pageview");
    }
  }, []);

  const [availableDates, setAvailableDates] = useState([]);
  const [availableTimes, setAvailableTimes] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [petName, setPetName] = useState("");
  const [date, setDate] = useState("");
  const [content, setContent] = useState("");
  const [time, setTime] = useState("");

  const [errorMessage, setErrorMessage] = useState();

  const navigate = useNavigate();

  useEffect(() => {
    const getConsultAvailability = async () => {
      try {
        const response = await http.get("/getConsultAvailability");
        const consultAvailability = response.data;

        const availableDates = ["Select Date"];
        const availableTimes = [{ date: "Select Time", times: [] }];

        for (const block of consultAvailability) {
          const dateString = moment
            .tz(block.start, "America/Denver")
            .format("dddd MMMM Do");

          if (!availableDates.includes(dateString)) {
            availableDates.push(dateString);
          }

          if (!availableTimes.find((t) => t.date === dateString)) {
            availableTimes.push({ date: dateString, times: [] });
          }

          availableTimes
            .find((t) => t.date === dateString)
            .times.push(
              moment.tz(block.start, "America/Denver").format("hh:mm a")
            );
        }

        setAvailableDates(availableDates);
        setAvailableTimes(availableTimes);
      } catch (error) {
        setErrorMessage(error.response.data.message);
      }
    };
    getConsultAvailability();
  }, []);

  const handleSubmit = async () => {
    try {
      setErrorMessage("");

      await http.post(`/requestAppointment`, {
        firstName,
        lastName,
        phone,
        email,
        petName,
        content,
        appointmentType,
        date,
        time,
      });

      navigate("/");
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  };

  return (
    <div className="d-flex flex-column flex-grow-1 background-gray p-0 background-gray">
      <form className="p-3">
        {errorMessage && <p className="mb-3 sura error">{errorMessage}</p>}
        <img
          src={logo}
          className="align-self-center mb-4"
          height="150px"
          alt="Twin Peaks Veterinary Dental & Surgery logo"
        />
        <h1 className="mb-4">{headerText}</h1>

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
        <Input
          name="petName"
          value={petName}
          label="Pet Name"
          onChange={setPetName}
        />
        <InputTextarea
          name="content"
          value={content}
          label="How can we help you?"
          rows="4"
          onChange={setContent}
        />
        <InputSelect
          name="date"
          value={date}
          label="Date"
          optionConfig={availableDates}
          rawOptions={true}
          onChange={setDate}
        />
        {availableTimes
          .filter((t) => t.date === date)
          .map((t) =>
            t.times.map((s, i) => (
              <div key={i} className="radio-line align-items-start mb-2">
                <input
                  className="mt-1"
                  type="radio"
                  id={`time-${s}`}
                  name="apptTime"
                  checked={time === s}
                  value={s}
                  onChange={({ target }) => setTime(target.value)}
                />
                <label
                  className="fw-bolder news-cycle font-16"
                  htmlFor={`time-${s}`}
                >
                  {s}
                </label>
              </div>
            ))
          )}
        <button
          className="mt-4 btn-filled-primary align-self-center"
          onClick={(e) => {
            e.preventDefault();
            if (process.env.NODE_ENV === "production") {
              ReactGA4.event(analyticsEventName);
            }
            handleSubmit();
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AppointmentRequest;
