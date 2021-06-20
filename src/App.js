import './App.css';
import Header from './components/Header/Header';
import Display from './components/Display/Display';
import Tictac from './components/Tictac/Tictac';
import {Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Header/>
      <Route exact path='/ToDoApp' component={Display}/>
      <Route exact path='/ToDoApp/tictac' component={Tictac}/>
    </div>
  );
}

export default App;
