import ArrowRightIcon from 'assets/icons/arrow_right';
import DirectionIcon from 'assets/icons/direction_arrow';
import ManIcon from 'assets/icons/manIcon';
import PlanetIcon from 'assets/icons/planet';
import { useNavigate } from 'react-router-dom';
import 'styles/main.scss'

function BookingContainer({name}) {

    const navigation = useNavigate()

    const bookingHandler = () =>{
        navigation('/booking_space')
    }

    return ( 
        <div className='booking_container'>
            <div className='bookingDiv'>
                <div className='where'>
                    <p>WHERE</p>
                    {/* <span>Moon</span> */}
                    <input type="text" placeholder={name} />
                </div>
                <div className='bookingIcons'>
                    <DirectionIcon />
                </div>
            </div>
            <div className='bookingDiv'>
            <div className='where'>
                    <p>Passengers</p>
                    {/* <span>1 Adult</span> */}
                    <input type="number" placeholder={'1 Adult'} />
                </div>
                <div className='bookingIcons'>
                    <ManIcon />
                </div>
            </div>
            <div className='bookingDiv'>
            <div className='where'>
                    <p>departure</p>
                    {/* <span>Tbilisi</span> */}
                    <input type="text" placeholder={'Tbilisi'} />
                </div>
                <div className='bookingIcons'>
                    <PlanetIcon />
                </div>
            </div>
            <button 
            className='bookingButton'
            onClick={bookingHandler}
            >
                <p>Booking</p>
                <ArrowRightIcon />
            </button>
        </div>
     );
}

export default BookingContainer;