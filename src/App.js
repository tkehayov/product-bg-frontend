import './App.css';
import Header from './components/Header'
import Slider from './components/Slider'
import CategoryNav from './components/CategoryNav'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' exact render={(props) => (
          <Container>
            <Row>
              <Col xs={3}>
                <CategoryNav />
              </Col>
              <Col xs={9} >
                <Slider />
              </Col>
            </Row>
          </Container>
        )} />
      </div>
    </Router>
  );
}

export default App;
