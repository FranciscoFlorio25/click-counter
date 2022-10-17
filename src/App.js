import './App.css';
import Button from './Components/Button';
import CountLogo from './Image/CountIMG.png';


function App() {

  let count = 0;

  const handleClick = ()  => {
    count++;
  }
  const resetCount = () => {
    count = 0;
  }

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
        <Button 
          text='Click me!'
          isClickButton={true}
          handleClick={handleClick}
        />
        <Button
          text='Reset'
          isClickButton={true}
          handleClick={resetCount}
        />
      </div>
    </div>
  );
}

export default App;
