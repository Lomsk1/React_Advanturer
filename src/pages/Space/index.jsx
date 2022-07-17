import Header from "components/Header";
import { Fragment, useState } from "react";
import "styles/main.scss";
import { Slide, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import BookingContainer from "components/Booking_Container";
import RoundIcon from "assets/icons/round";
import website from "website.json";
import Footer from "components/Footer";
import { Link, useNavigate } from "react-router-dom";

function SpaceHomepage() {
  const navigation = useNavigate();

  const slideImages = [
    {
      url: "https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg",
      caption: "Moon",
    },
    {
      url: "https://www.worldatlas.com/upload/bb/c3/32/shutterstock-1041249343.jpg",
      caption: "Mars",
    },
    {
      url: "https://www.esa.int/var/esa/storage/images/esa_multimedia/images/2020/05/new_evidence_of_watery_plumes_on_jupiter_s_moon_europa/22008941-1-eng-GB/New_evidence_of_watery_plumes_on_Jupiter_s_moon_Europa_pillars.jpg",
      caption: "Europa",
    },
  ];

  const tourSlide = [
    {
      url: "https://149357117.v2.pressablecdn.com/wp-content/uploads/2018/03/space-surfing-astronaut-art-print.jpg",
      caption: "Explore",
    },
    {
      url: "https://149357117.v2.pressablecdn.com/wp-content/uploads/2018/03/seti-radar-astronaut-night-sky-art-print.jpg",
      caption: "View",
    },
    {
      url: "https://i.pinimg.com/736x/01/e2/3e/01e23e3a9f5b1486c882e2440c581d36.jpg",
      caption: "Relax",
    },
  ];

  const [current, setCurrent] = useState(0);
  const length = tourSlide.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(tourSlide) || tourSlide.length <= 0) {
    return null;
  }

  const bookingHandler = () => {
    navigation("/booking_space");
  };

  return (
    <Fragment>
      <Header />

      <section className='space_section-1'>
        <div className='left'>
          <div className='slide-container'>
            <Fade className='fade'>
              {slideImages.map((fadeImage, index) => (
                <div className='each-fade' key={index}>
                  <div className='image-container'>
                    <img src={fadeImage.url} alt={"img not found"} />
                  </div>
                  <h1 className='titleFade'>{fadeImage.caption}</h1>
                </div>
              ))}
            </Fade>
          </div>
        </div>
        <BookingContainer name={slideImages[0].caption} />
      </section>

      <section className='space_section-2'>
        <div className='upper'>
          <div className='shipName'>
            <h2>Ultimate flight experience in high-end tech. </h2>
          </div>
          <div className='shipImg'>
            <div className='shipTitle'>
              <p>THE VEHICLE</p>
              <span>RE-L</span>
            </div>
            <div className='shipImage'>
              <img
                src='https://img.rawpixel.com/private/static/images/website/2022-05/pd44-064-ae.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6c4b4a18c39a5cc76cbbcd024514d4fc'
                alt='img not found'
              />
            </div>
          </div>
        </div>
        <div className='down'>
          <div className='spaceDescription'>
            <p>
              With SPACED, you can get a sense of high-end fast & safe space
              traveling. Most of what space agencies consider to be long
              distance trips can be completed in one day. Consider how much time
              and money we were spending in the past to travel to another
              worlds.
            </p>
          </div>
          <div className='deal'>
            <div className='dealTitle'>
              <h2>The Deal?</h2>
            </div>
            <div className='dealText'>
              <p>
                From Earth to various places starting at <span>$2199</span>. We
                get you anywhere and back <span>safely</span> within solar
                system within <span>1 day</span>. Pick your{" "}
                <span>destination</span> now.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='space_section-3'>
        <div className='upper'>
          <div className='boxDiv'>
            <h2>We promise, it won’t get boring.</h2>
          </div>
          <div className='boxDiv'>
            <p>
              Are you ready to go on adventures that will take your breath away?
              Climb the Olympus Mons, the tallest mountain on any planet or
              explore the Deep Ice Caves of Europa. The possibilities are
              endless.
            </p>
          </div>
          <div className='boxDiv'>
            <span>EXPLORE EXPERIENCES </span>
            <RoundIcon />
          </div>
        </div>
        <div className='middle'>
          <div className='arrow'>
            <button onClick={prevSlide}></button>
          </div>
          <div className='mainSlide'>
            {tourSlide.map((slides, index) => (
              <div
                className={
                  index === current
                    ? "space_slide_box slide  active"
                    : "space_slide_box slide "
                }
                key={index}
              >
                {index === current && (
                  <img src={slides.url} alt='img not found' />
                )}
                <p>{slides.caption}</p>
              </div>
            ))}
          </div>
          <div className='arrow'>
            <button onClick={nextSlide}></button>
          </div>
        </div>
        <div className='down'>
          <div className='downDiv'>
            <p>Somewhere, something incredible is waiting to be known.</p>
            <span>
              <i>CARL SAGAN</i>
            </span>
          </div>
          <div className='downDiv'>
            <button className='find'>
              <div className='stick'></div>
              <p>FIND YOUR ADVENTURE</p>
            </button>
          </div>
        </div>
      </section>

      <section className='space_section-4'>
        <div className='title generalDiv'>
          <h2>Worlds beyond your imagination.</h2>
        </div>
        {website.planets.map((planets, index) => (
          <div key={index} className='generalDiv hover'>
            <Link to={`/space/${planets.id}`}>
              <div className='imageContainer'>
                <img src={planets.url} alt='img not found' />
              </div>
            </Link>
            <div className='informationContainer'>
              <div className='title'>
                <h2>{planets.title}</h2>
                <p>{planets.description}</p>
              </div>
              <div className='info'>
                <p>
                  DISTANCE : <span>{planets.distance}</span>
                </p>
                <p>
                  GRAVITY : <span>{planets.gravity}</span>
                </p>
                <p>
                  RADIUS : <span>{planets.radius}</span>
                </p>
              </div>
              <div className='price'>
                <p className='ff'>{planets.price}</p>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className='space_section-5'>
        <div className='both first'>
          <div className='upper'>
            <p>NEXT VOYAGE</p>
            <h2>MARS 9</h2>
          </div>
          <div className='down'>
            <div className='date'>
              <p>17 July, California</p>
            </div>
            <div className='butt'>
              <button onClick={bookingHandler}>BOOK</button>
            </div>
          </div>
        </div>

        <dir className='both second'>
          <div className='blur'></div>
          <div className='upper'>
            <p>UPCOMING NEW DESTINATION</p>
            <h2>SATURN</h2>
          </div>
          <div className='down'>
            <div className='date'>
              <p>COMING SOON</p>
            </div>
            <div className='button'>
              <button>BOOK</button>
            </div>
          </div>
        </dir>
      </section>

      <Footer />
    </Fragment>
  );
}

export default SpaceHomepage;
