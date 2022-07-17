import { useFormik } from "formik";
import { Fragment } from "react";
import emailjs from "@emailjs/browser";
import * as yup from "yup";

import "styles/main.scss";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Header from "components/Header";
import Footer from "components/Footer";

const contactValidationSchema = yup.object().shape({
  firstName: yup
    .string("First name must be a string.")
    .matches(/^[a-z$A-Z]*$/, "First name must contain only words.")
    .required("This value is required."),
  lastName: yup
    .string("Last name must be a string.")
    .matches(/^[a-z$A-Z]*$/, "Last name must contain only words.")
    .required("This value is required."),
  email: yup
    .string("Email must be a string.")
    .email("Email must be a string.")
    .required("This value is required."),
  number: yup
    .string("Phone must be a number")
    .required("This value is required."),
  regarding: yup
    .string("Regarding must be a string.")
    .required("This value is required."),
  someText: yup
    .string("Text must be a string")
    .required("This value is required."),
});

function BookingE() {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      regarding: "",
      someText: "",
    },
    validationSchema: contactValidationSchema,
    onSubmit: values => {
      console.log("submit", values);

      emailjs
        .send("service_cq6vjet", "contact_form", values, "aHefCKRxgW_roS3Li")
        .then(
          result => {
            console.log("SUCCESS!", result.status, result.text);
          },
          error => {
            console.log("FAILED...", error);
          }
        );
    },
  });
  const center = [41.70414140615305, 44.79363649481056];
  const markerIcon = L.icon({
    iconUrl:
      "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-red.png",
    iconSize: [25, 45],
    iconAnchor: [17, 45],
    popupAnchor: [0, -46],
  });

  return (
    <Fragment>
      <Header />
      <section className='section_booking-E'>
        <div className='left'>
          <div className='upper'>
            <h1>Booking</h1>
          </div>
          <div className='down'>
            <form id='contact-form' onSubmit={formik.handleSubmit}>
              <input
                placeholder={"First Name"}
                name={"firstName"}
                type={"text"}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors && formik.errors.firstName && (
                <p
                  style={{
                    color: "red",
                    textAlign: "center",
                    margin: '0'
                  }}
                >
                  {formik.errors.firstName}
                </p>
              )}
              <input
                placeholder={"Last Name"}
                name={"lastName"}
                type={"text"}
                value={formik.values.lastName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors && formik.errors.lastName && (
                <p
                  style={{
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  {formik.errors.lastName}
                </p>
              )}
              <input
                placeholder={"Email"}
                name={"email"}
                type={"email"}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors && formik.errors.email && (
                <p
                  style={{
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  {formik.errors.email}
                </p>
              )}
              <input
                placeholder={"Number"}
                name={"number"}
                type={"number"}
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors && formik.errors.number && (
                <p
                  style={{
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  {formik.errors.number}
                </p>
              )}
              <textarea
                placeholder='e.g. I am a vegetarian, I do not drink alcohol, etc.'
                name={"someText"}
                value={formik.values.someText}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.errors && formik.errors.someText && (
                <p
                  style={{
                    color: "red",
                    textAlign: "center",
                  }}
                >
                  {formik.errors.someText}
                </p>
              )}
              <button type={"submit"}>Submit</button>
            </form>
          </div>
        </div>
        <div className='right'>
            <MapContainer
              style={{
                height: "100%",
                width: "100%",
              }}
              center={center}
              zoom={3}
              scrollWheelZoom={true}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url={"http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}
              />
              <Marker icon={markerIcon} position={center}>
                <Popup>You are Here</Popup>
              </Marker>
            </MapContainer>
        </div>
      </section>
      <Footer />
    </Fragment>
  );
}

export default BookingE;
