import './App.css';
import CounterDisplay from './components/CounterDisplay';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Portolio from './components/Portolio';
import Reason from './components/Reason';
import GetStarted from './components/GetStarted';
import Earn from './components/Earn';
import Footer from './components/Footer';
import Prices from './components/Prices';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Earn />
      <Prices />
      <Portolio />
      <Reason />
      <CounterDisplay />
      <GetStarted />
      <Footer />
    </div>
  );
}

export default App;
