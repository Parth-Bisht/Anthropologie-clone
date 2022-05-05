import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsPage from './pages/ProductsPage';
import Cartpage from './pages/Cartpage';
import SingleproductPage from './pages/SingleproductPage';
import Homepage from './pages/Homepage';


function App() {
  return (
    <div className="App">
    
     <Routes>
     <Route path="/" element={<Homepage/>}></Route>
        <Route path="cart" element={<Cartpage/>}></Route>
        <Route path=":products" element={<ProductsPage/>}></Route>
        <Route path=":products/:id" element={<SingleproductPage/>}></Route>
      
     </Routes>
    </div>
  );
}

export default App;
