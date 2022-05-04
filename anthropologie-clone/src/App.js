import './App.css';
import Cloth from './compoments/Cloth';
import Acordian from './compoments/Acordian';
import Footer from './compoments/Footer';
import Navbar from './compoments/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div style={{display:"flex"}}>
        <Acordian/>
        <Cloth/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
