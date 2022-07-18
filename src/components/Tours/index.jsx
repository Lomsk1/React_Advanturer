import Mark from "assets/icons/mark";
import "styles/main.scss";

function Tours({url, day, night, price, description, place}) {

    const moreHandler = () => {
        
    }

    return ( 
        <div className="tourDiv">
            <div className="image">
                <img src={url} alt="img not found" />
            </div>
            <div className="duration">
                <p>{day} Days, {night} Nights</p>
                <p>${price} / Person</p>
            </div>
            <div className="description"><p>{description}</p></div>
            <div className="place">
                <div className="mark">
                    <Mark />
                    <p>{place}</p>
                </div>
                <div className="more">
                    <p onClick={moreHandler}>Know More</p>
                </div>
            </div>
        </div>
     );
}

export default Tours;