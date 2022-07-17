import Header from "components/Header";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "styles/main.scss";
import website from "website.json";

function EachPlanet() {

    const {id} = useParams()
    const [data, setData] = useState()


    useEffect(()=>{
        setData(website.planets.filter(planet => planet.id === id))
    },[id])

    return ( 
        <Fragment>
            <Header />

            {data && (
                  <section className="each_planet_section-1">
                  <div className="left">
                      <div className="title">
                          <h2>{data[0].title}</h2>
                      </div>
                      <div className="description">
                          <p>{'The Eerie Planet'}</p>
                          <span>{data[0].about}</span>
                      </div>
                  </div>
                  <div className="right">
                      <img src={data[0].url} alt="img not found" />
                  </div>
              </section>
            )}
        </Fragment>
     );
}

export default EachPlanet;