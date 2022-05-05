import './App.css';
import Cardetails from './payment/Cardetails/Cardetails';
import Otp from './payment/Otp/Otp';
import PlaceOrder from './payment/placeOrder/PlaceOrder';
import ShipDetail from './payment/ShipDetaii/ShipDetail';
import Login from "./login/Login"
import Address from './payment/Address';
 

function App() {
  return (<>
  <div className= "App">
    {/* <Login/> */}
    {/* <Address/> */}
      {/* <ShipDetail/> */}
      <Cardetails/>
      {/* <Otp/> */}
      {/* <PlaceOrder/> */}
    </div>   
  </>);
}

export default App;
