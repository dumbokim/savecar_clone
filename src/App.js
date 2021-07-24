import './App.css';
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
