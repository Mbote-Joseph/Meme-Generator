import './App.css';
import Header from './components/Header'
import Meme from './components/Meme'

function App() {
  return (
    <div className="meme">
      <Header />
    <div className="container col-12">
      <Meme />
    </div>
    </div>
  );
}

export default App;
