import logo from './logo.svg';
import './App.css';
import Shop from './Components/Shop/Shop';
import Headder from './Components/Header/Header';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
      <Headder></Headder>
      <h1 className='title'>Headset Shop </h1>
      <Shop></Shop>
      <Footer></Footer>
    </div>
  );
}

export default App;
