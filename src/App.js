import logo from './logo.svg';
import './App.css';
import Banner from './components/banner';
import About from './components/about';
import History from './components/history';
import Bibiography from './components/bibilography';
import Films from './components/films';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Banner></Banner>
      <About></About>
      <History></History>
      <Bibiography></Bibiography>
      <Films></Films>
      <Footer></Footer>
    </div>
  );
}

export default App;
