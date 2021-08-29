
import './App.css';
import Header from "./Header";
import Forecast from './Forecast';
import TemperatureMain from './TemperatureMain';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <div className="container-for-app">
        <Header />
        <TemperatureMain />
        <Forecast />
        <Footer />


      </div>
    </div>
  );
}

export default App;
