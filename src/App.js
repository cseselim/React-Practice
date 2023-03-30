import logo from './logo.svg';
import './App.css';
import Clock from './component/Clock';
import HandlingAndControlReRendering from './component/HandlingAndControlReRendering';
import ConditionalRendaringAndListKey from './component/ConditionalRendaringAndListKey';

function App() {
  return (
    <div className="App">
      {/* <Clock local='bn-US'/> */}
      {/* <HandlingAndControlReRendering /> */}
      <ConditionalRendaringAndListKey />
    </div>
  );
}

export default App;
