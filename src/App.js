import logo from './logo.svg';
import './App.css';
import Clock from './component/Clock';
import HandlingAndControlReRendering from './component/HandlingAndControlReRendering';

function App() {
  return (
    <div className="App">
      {/* <Clock local='bn-US'/> */}
      <HandlingAndControlReRendering />
    </div>
  );
}

export default App;
