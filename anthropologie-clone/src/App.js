import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsPage from './pages/ProductsPage';
import Cartpage from './pages/Cartpage';
import SingleproductPage from './pages/SingleproductPage';
import Homepage from './pages/Homepage';
import Login from './components/Login';
import Addresspage from './pages/Addresspage';
import ShipdetailsPage from './pages/ShipdetailsPage';
import CarddetailsPage from './pages/CarddetailsPage';
import Otp from './components/Otp';
import PlaceOrder from './components/PlaceOrder';


function App() {
  return (
    <div className="App">
    
     <Routes>
     <Route path="/" element={<Homepage/>}></Route>
        <Route path="cart" element={<Cartpage/>}></Route>
        <Route path=":products" element={<ProductsPage/>}></Route>
        <Route path=":products/:id" element={<SingleproductPage/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/addressPage' element={<Addresspage/>}></Route>
        <Route path='/shippingPage' element={<ShipdetailsPage/>}></Route>
        <Route path='/carddeatils' element={<CarddetailsPage/>}></Route>
        <Route path='/otp' element={<Otp/>}></Route>
        <Route path='/success' element={<PlaceOrder/>}></Route>
      
     </Routes>
    </div>
  );
}

export default App;
