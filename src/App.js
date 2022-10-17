import './App.css';
import CountLogo from './Image/CountIMG.png';


function App() {
  return (
    <div className="App">
      <div className='Logo-container'>
        <h1>Contador de click</h1>
        <img
          className='Logo-count'
          src={CountLogo}
          alt='Logo del contador'
        />
      </div>
      <div className='main-container'>
        
      </div>
    </div>
  );
}

export default App;
