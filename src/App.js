import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import AppRoutes from './routes';


function App() {
  return (
    <div className="App">
      <Navbar />
      <AppRoutes />
      <Footer />

    </div>
  );
}

export default App;
