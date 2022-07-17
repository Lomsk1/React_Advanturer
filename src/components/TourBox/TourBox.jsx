import ArrowRight from "assets/icons/arrowRight";
import "styles/main.scss";

function TourBox({url,country,first, second }) {
    return ( 
        <div className="tourBox">
            <div className="image">
                <img src={url} alt="img not found" />
            </div>
            <div className="country">
                <p>{country}</p>
            </div>
            <div className="infos">
                <p>{first}</p>
                <p>{second}</p>
            </div>
            <div className="arrow">
                <ArrowRight />
            </div>
        </div>
     );
}

export default TourBox;