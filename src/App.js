import logo from './logo.svg';
import './App.css';
import Routing from './E_commerce/Routing';
import Total from './E_commerce/Total';

function App() {
  return (
    <div className="App">
     <Total>
      <Routing />
     </Total>
    </div>
  );
}

export default App;
