import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import Landing from './pages/landing';
import Webdesign from './components/landing/webdesign';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Webdesign />

    </div>
  );
}

export default App;
