import './App.css';
import Cloth from './components/Cloth';
import Acordian from './components/Acordian';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

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