import './App.css';
import Footer from './components/footer/footer';
import Navbar from './components/navbar/navbar';
import ScrollToTop from './components/scroll';
import AppRoutes from './routes';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ScrollToTop />
      <AppRoutes />
      <Footer />
    </div>
  );
}

export default App;
