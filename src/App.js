import './App.css';
import Modal1 from './Components/Modal1';
import Modal2 from './Components/Modal2';
import Header from './Components/Header';
import Welcome from './Components/Welcome';
import Apply from './Components/Apply';
import CarList from './Components/CarList';
import Feature1 from './Components/Feature1';
import CampingCar from './Components/CampingCar';
import Feature2 from './Components/Feature2';
import Pricing from './Components/Pricing';
import Footer from './Components/Footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <Modal1 />
      <Modal2 />
      <Welcome/>
      <Apply/>
      <CarList/>
      <Feature1/>
      <CampingCar/>
      <Feature2/>
      <Pricing/>
      <Footer/>
    </div>
  );
}

export default App;
