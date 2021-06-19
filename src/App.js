import './App.css';
import Header from './components/Header/Header';
import Display from './components/Display/Display';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/' component={Display}/>
    </div>
  );
}

export default App;
