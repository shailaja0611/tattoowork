

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Design from './Design';
import Home from './Home';
import DynamiDesigns from './DynamiDesigns';
import MainArtists from './MainArtists';
import ProfilePage from './ProfilePage';
import CartPage from './Booking';
import { CartProvider } from './CartContext';
import Login from './Login'
import Register from './Register';
import ForgetPassword from './ForgetPassword';
import ArtistDetailPage from './ArtistDetailPage';
import Services from './Services';



function App() {
  return (
    <div>

  <BrowserRouter>
  <CartProvider>
  <Routes>
  <Route path='' element={<Home />} />
    <Route path='/home' element={<Home />} />
    <Route path='/design' element={<Design />}/>
    <Route path='/dynamicdesign' element={<DynamiDesigns />} />
    <Route path='/Artists' element={<MainArtists />} />
    <Route path="/artist/:id" element={<ArtistDetailPage />} />
    <Route path='/Services' element={<Services />} />

    <Route path='/Profile' element={<ProfilePage />} />
    <Route path='/cart' element={<CartPage />} />
    <Route path='/Booking' element={<CartPage />} />
    <Route path='/login' element={<Login />} />
    <Route path='/register' element={<Register />} />
    <Route path='/forgetpassword' element={<ForgetPassword />} />
  </Routes>  
  </CartProvider>
  </BrowserRouter>
   
    </div>
  );
}

export default App;
