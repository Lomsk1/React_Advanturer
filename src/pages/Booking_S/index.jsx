import Header from "components/Header";
import "styles/main.scss";
import { useFormik } from "formik";
import emailjs from "@emailjs/browser";

function BookingS() {

    const formik = useFormik({
        initialValues: {
          date: "",
          from: "",
          people: "",
        },
        onSubmit: values => {
          emailjs
            .send("service_y406w6x", "Space_booking", values, "aHefCKRxgW_roS3Li")
            .then(
              result => {
                alert("SUCCESS!", result.status, result.text);
              },
              error => {
                alert("FAILED...", error);
              }
            );
        },
      });

  return (
    <>
      <Header />
      <section className='booking_space_section'>
        <div className='information'>
          <div className='three title'>
            <span>DESTINATION</span>
            <h2>Mars</h2>
            <p>$2199</p>
          </div>
          <div className='three infos'>
            <p>TRAVEL TIME</p>
            <span>9 HOURS</span>
            <p>BASE</p>
            <span>Huygens crater</span>
            <p>AVAILABLE EXPERIENCES</p>
            <span>23</span>
          </div>
          <div className='three elon'>
            <p>
              Depending on the refund conditions, you can cancel your ticket.
              Mobile tickets can also be cancelled via the SPACED app or
              website. To find out exactly how this works, please ask Elon Musk.
            </p>
            <span>MORE INFORMATION</span>
          </div>
        </div>
        <div className='choose'>
          <form
          id='contact-form' 
          onSubmit={formik.handleSubmit}
          >
            <div className='third'>
                <label htmlFor="date">DATE</label>
                <select 
                name="date" 
                id="date"
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                    <option value="1">25 March</option>
                    <option value="2">29 March</option>
                    <option value="3">20 April</option>
                </select>
            </div>
            <div className='third'>
            <label htmlFor="from">FROM</label>
                <select 
                name="from" 
                id="from"
                value={formik.values.from}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                >
                    <option value="california">California</option>
                    <option value="tbilisi">Tbilisi</option>
                    <option value="paris">Paris</option>
                </select>
            </div>
            <div className='third'>
                <label htmlFor="people">Passengers</label>
                <input 
                type="number" 
                placeholder="1 Adult" 
                name="people"
                value={formik.values.people}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                />
            </div>
            <button type={"submit"}>BOOK NOW</button>
          </form>
        </div>
      </section>
    </>
  );
}

export default BookingS;
