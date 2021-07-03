import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Footer from './components/Footer'
import LandingScreen from './screens/LandingScreen';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Route path="/" component="LandingScreen" />
      </div>
      <Footer />
    </Router>
  );
}

export default App;
