import { useNavigate } from 'react-router-dom';

import 'styles/main.scss'

function HomeTours({url, title, category}) {
    const navigate = useNavigate();
    const navigateHandler = () =>{
        navigate(`/${category}`)
    }

    return ( 
        <div onClick={navigateHandler} className='homeTourBox'>
            <div className='image'>
                <img src={url} alt="img not found" />
            </div>
            <div className='title'>
                <p>{title}</p>
            </div>
        </div>
     );
}

export default HomeTours;