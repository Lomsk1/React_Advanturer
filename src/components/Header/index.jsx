import "styles/main.scss";
import logo from "../../assets/images/Capture-removebg-preview.png";
import { Link, useNavigate } from "react-router-dom";
import { Link as LinkS, animateScroll as scroll } from "react-scroll";
import SpaceLogo from "assets/icons/spaceLogo";

function Header({ homePage }) {
  const navigate = useNavigate();

  const logoHandler = () => {
    navigate("/");
  };

  return (
    <header className='header'>
      <div className='icon'>
        <img onClick={logoHandler} src={logo} alt='img not found' />
      </div>
      <div className='navDiv'>
        <nav>
          <ul>
            <li>
              {homePage ? (
                <LinkS
                  activeClass='active'
                  spy={true}
                  smooth={true}
                  duration={500}
                  to='all_tour_section'
                >
                  Tours
                </LinkS>
              ) : (
                <Link to={"/sd"}>Home</Link>
              )}
            </li>
            <li>
              <Link to={"/"}>About Us</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
