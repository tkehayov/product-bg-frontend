import './App.css';
import Header from './components/Header'
import Caro from './components/Caro'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' exact render={(props) => (
          <Caro />
        )} />


      </div>
    </Router>
  );
}

export default App;
