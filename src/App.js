import BookingE from 'pages/Booking_E';
import BookingS from 'pages/Booking_S';
import EachPlanet from 'pages/EachPlanet';
import Earth from 'pages/Earth';
import SpaceHomepage from 'pages/Space';
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home';


function App() {
  return (
    <Routes >
      <Route path='/*' element={<Home />} />
      <Route path='/space' element={<SpaceHomepage />} />
      <Route path='/booking_space' element={<BookingS />} />
      <Route path='/space/:id' element={<EachPlanet />} />
      <Route path='/earth' element={<Earth />} />
      <Route path='/booking_earth' element={<BookingE />} />
    </Routes>
  );
}

export default App;
