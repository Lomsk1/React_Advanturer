import { Fragment } from "react";

import HomeTours from "components/Home_tour_box";
import Header from "../../components/Header";
import website from 'website.json'

function Home() {
  return (
    <Fragment>
      <Header homePage />

      <section className='home_section'>
        <div className='titleDiv'>
          <h1>Your Imagination Is Your Only Limit</h1>
        </div>
        <div className='littleTitle'>
          <p>
            We always try to make our customer Happy. We provide all kind of
            facilities. Your Satisfaction is our main priority
          </p>
        </div>
      </section>

      <section className="all_tour_section">
        {website.tours.map(tour => (
          <HomeTours 
          key={tour.title}
          url={tour.image}
          title={tour.title}
          category={tour.place}
          />
        ))}
      </section>
    </Fragment>
  );
}

export default Home;
