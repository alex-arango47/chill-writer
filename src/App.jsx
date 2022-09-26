import './App.css';
import TextArea from './Components/TextArea';

const App = () => {

  localStorage.getItem("counter", Number())

  return (
    <>
      <div className="App">
        <main className='main-Container'>
          <TextArea />
        </main>
      </div>
    </>
  );
}

export default App;
