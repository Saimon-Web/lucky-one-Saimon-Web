import logo from './logo.svg';
import './App.css';
import Shop from './Components/Shop/Shop';
import Headder from './Components/Header/Header';

function App() {
  return (
    <div>
      <Headder></Headder>
      <h1 className='title'>Headset Shop </h1>
      <Shop></Shop>

    </div>
  );
}

export default App;
