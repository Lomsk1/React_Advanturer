import Facebook from "assets/icons/facebook";
import Instagram from "assets/icons/insta";
import Twitter from "assets/icons/twitter";
import "styles/main.scss";
import logo from "../../assets/images/Capture-removebg-preview.png";

function Footer() {
  return (
    <footer className='footer'>
      <div className='upper'>
        <div className='mid'>
          <img src={logo} alt='img not found' />
        </div>
        <div className='mid'>
          <div className='infos'>
            <div className='title'>
              <p>DESTINATIONS</p>
            </div>
            <ul>
              <li>Earth</li>
              <li>Moon</li>
              <li>Mars</li>
              <li>Europa</li>
            </ul>
          </div>
          <div className='infos'>
            <div className='title'>
              <p>GET HELP</p>
            </div>
            <ul>
              <li>Status</li>
              <li>Preoder</li>
              <li>Returns</li>
              <li>Payment Options</li>
              <li>Contact US</li>
            </ul>
          </div>
          <div className='infos'>
            <div className='title'>
              <p>ABOUT SPACED</p>
            </div>
            <ul>
              <li>News</li>
              <li>Careers</li>
              <li>Story</li>
              <li>Sustainable Innovation</li>
              <li>Media</li>
            </ul>
          </div>
        </div>
        <div className='mid'>
            <Facebook />
            <Twitter />
            <Instagram />
        </div>
      </div>
      <div className='down'>
        <p>© 2018 SPACED, Inc. All rights reserved.</p>
        <p>Guides</p>
        <p>Terms of Use</p>
        <p>Company Details</p>
        <p>Privacy & Cookie Policy </p>
      </div>
    </footer>
  );
}

export default Footer;
