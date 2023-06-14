import logo from './logo.svg';
import './App.css';
import Home from './Components/Github/Home';
import { GithubProvider } from './Components/Github/Context';

function App() {
  return (
    <div className="App">
      <GithubProvider>
      <Home/>
      </GithubProvider>

    </div>
  );
}

export default App;
