import logo from './logo.svg';
import './App.css';
import Age from './components/age';

function App() {
  return (
    <div className="App">
      <Age firstname="Jane" lastname="Doe" age={45} haircolor="Black"/>
      <Age firstname="John" lastname="Smith" age={88} haircolor="Brown"/>
    </div>
  );
}

export default App;
