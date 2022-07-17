import "styles/main.scss";

function SliderBox({url, avatar, text, name}) {
    return ( 
        <div className="slideBox">
            <img src={url} alt="img not found" />
            <div className="whiteB">
                <div className="avatar">
                    <img src={avatar} alt="img not found" />
                </div>
                <p>{text}</p>
                <p className="name">{name}</p>
            </div>
        </div>
     );
}

export default SliderBox;