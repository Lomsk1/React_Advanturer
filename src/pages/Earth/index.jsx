import { Fragment, useEffect, useState } from "react";
import "styles/main.scss";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import Carousel from "react-elastic-carousel";
import { useNavigate } from "react-router-dom";

import Tkt from "assets/icons/tkt";
import Hotel from "assets/icons/hotel";
import Cursor from "assets/icons/cursor";
import CalendarIcon from "assets/icons/calendar";
import Diagram from "assets/icons/daigram";
import HistoryIcon from "assets/icons/history";
import MapIcon from "assets/icons/map";
import TourBox from "components/TourBox/TourBox";

import website from "website.json";
import Tours from "components/Tours";
import SliderBox from "components/Slider";
import Footer from "components/Footer";
import Header from "components/Header";

function Earth() {
  const filter = [
    {
      id: "1",
      name: "Hot Deals",
    },
    {
      id: "3",
      name: "South Asia",
    },
    {
      id: "4",
      name: "Honeymoon",
    },
    {
      id: "5",
      name: "Europe",
    },
  ];

  const slides = [
    {
      id: 1,
      background:
        "https://preview.redd.it/3arwdddun2h21.jpg?auto=webp&s=0b470c5ea3e9d1dbc088a668db5ba92d91ed12ed",
      avatar: "https://cdn.mos.cms.futurecdn.net/p5quSf4dZXctG9WFepXFdR.jpg",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
      name: "-Jeo Stanlee",
    },
    {
      id: 2,
      background:
        "https://cdn.cheapism.com/images/011618_most_beautiful_views_in_the_world_sli.max-784x410_ZXOqfVp.jpg",
      avatar:
        "https://images.unsplash.com/photo-1493106819501-66d381c466f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9ydHJhaXQlMjBmYWNlc3xlbnwwfHwwfHw%3D&w=1000&q=80",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus aliquam elit. Suspendisse ornare elit mi, et laoreet tortor rutrum sed. Cras at arcu interdum, ultrices nunc non, lacinia sapien. Vestibulum sollicitudin augue in elit faucibus, vitae facilisis lacus molestie.",
      name: "-George Me",
    },
    {
      id: 3,
      background: "https://cdn.wallpapersafari.com/92/44/JoVfDA.jpg",
      avatar:
        "https://media.wired.com/photos/5926e068f3e2356fd800abbf/master/w_1600%2Cc_limit/Michael-Jackson-100x130cm-2009.jpg",
      text: "Fusce non nunc suscipit elit gravida venenatis. Sed condimentum augue quis ex tincidunt vulputate. Aenean tincidunt rhoncus elit vitae iaculis. Ut mattis porttitor risus ac tempor.",
      name: "-Michael M.",
    },
  ];

  const navigate = useNavigate()

  const breakPoint = [
    { width: 1, itemToShow: 1 },
    { width: 558, itemToShow: 2, itemsToScroll: 2 },
    { width: 768, itemToShow: 3 },
    { width: 1280, itemToShow: 4 },
  ];

  const [data, setData] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function (position) {
          const lat = position.coords.latitude;
          const long = position.coords.longitude;
        },
        function errors(err) {
          console.error(err);
        }
      );
    }
  }, []);

  const center = [41.70414140615305, 44.79363649481056];
  const thailand = [13.7996035431676, 100.48586444686774];
  const indonesia = [1.0202979009571154, 104.1391427474666];
  const newZealand = [-36.850691168977896, 174.76924842456253];

  const markerIcon = L.icon({
    iconUrl:
      "https://cdn.jsdelivr.net/gh/pointhi/leaflet-color-markers@master/img/marker-icon-red.png",
    iconSize: [25, 45],
    iconAnchor: [17, 45],
    popupAnchor: [0, -46],
  });

  if (website.eachTour.category === filter.name) {
  }

  const filterHandler = () => {
    setData(website.eachTour.filter(tour => tour.category === filter.name));
  };

  const bookHandler = () => {
    navigate('/booking_earth')
  }
  

  return (
    <Fragment>
      <Header />

      <section className='earth_section-1'>
        <div className='middle'>
          <h2>Your Imagination Is Your Only Limit</h2>
          <p>
            We always try to make our customer Happy. We provide all kind of
            facilities. <br /> Your Satisfaction is our main priority
          </p>
          <button onClick={bookHandler}>Book Here</button>
        </div>
      </section>

      <section className='earth_section-2'>
        <div className='upper'>
          <div className='title'>
            <h3>Our Service</h3>
          </div>
          <div className='boxes'>
            <div className='container'>
              <Tkt />
              <p>Ticket Booking</p>
              <span>
                We book all kind of national or international ticket for your
                destination.
              </span>
            </div>
            <div className='container'>
              <Hotel />
              <p>Hotel Booking</p>
              <span>
                You can easily book your according to your budget hotel by our
                website.
              </span>
            </div>
            <div className='container'>
              <Cursor />
              <p>Tour Plan</p>
              <span>
                We provide you the best plan within a short time explore more.
              </span>
            </div>
          </div>
        </div>
        <div className='down'>
          <img
            src='https://preview.redd.it/le2wf88imrq31.png?auto=webp&s=24fca3f63b7bb30570db64fb96c86dcfae2a7eed'
            alt='img not found'
          />
          <div className='titles'>
            <h2>We always try to give you the best service</h2>
            <p>
              We always try to make our customer Happy. We provide all kind of
              facilities. Your Satisfaction is our main priority.
            </p>
          </div>
          <div className='divs'>
            <div className='boxes'>
              <CalendarIcon />
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>
            <div className='boxes'>
              <Diagram />
              <h3>15K+</h3>
              <p>Happy Travellers</p>
            </div>
            <div className='boxes'>
              <MapIcon />
              <h3>650+</h3>
              <p>Places Visited</p>
            </div>
            <div className='boxes'>
              <HistoryIcon />
              <h3>2K+</h3>
              <p>Travel History</p>
            </div>
          </div>
        </div>
      </section>

      <section className='earth_section-3'>
        <div className='titleDiv'>
          <h3>Our Popular Distinations</h3>
        </div>
        <div className='maps'>
          <div className='mapContainer'>
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
              <Marker icon={markerIcon} position={thailand}>
                <Popup>Thailand</Popup>
              </Marker>
              <Marker icon={markerIcon} position={newZealand}>
                <Popup>New Zealand</Popup>
              </Marker>
              <Marker icon={markerIcon} position={indonesia}>
                <Popup>Indonesia</Popup>
              </Marker>
            </MapContainer>
          </div>
          <div className='tours'>
            {website &&
              website.tourOnEarth.map((tour, index) => (
                <TourBox
                  key={index}
                  url={tour.url}
                  country={tour.country}
                  first={tour.infosOne}
                  second={tour.infosTwo}
                />
              ))}
          </div>
        </div>
      </section>

      <section className='earth_section-4'>
        <div className='title'>
          <div className='text'>
            <h3>Best Packages For You</h3>
          </div>
          <div className='boxes'>
            {filter &&
              filter.map(filter => (
                <div className='filter' key={filter.id} onClick={filterHandler}>
                  <p>{filter.name}</p>
                </div>
              ))}
          </div>
        </div>
        <div className='tours'>
          {website &&
            website.eachTour.map((each, index) => (
              <Tours
                key={index}
                url={each.image}
                day={each.day}
                night={each.night}
                price={each.price}
                description={each.description}
                place={each.place}
              />
            ))}
          {}
        </div>
      </section>

      <section className='earth_section-5'>
        <div className='title'>
          <h3>What People Say About Us</h3>
        </div>
        <div className='slider'>
          <Carousel breakPoints={breakPoint}>
            {slides.map(slide => (
              <SliderBox 
              key={slide.id}
              url={slide.background}
              avatar={slide.avatar}
              text={slide.text}
              name={slide.name}
              />
              // <div className="slideBoxes"></div>
            ))}
          </Carousel>
        </div>
      </section>

      <Footer />
    </Fragment>
  );
}

export default Earth;
