import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import { BrowserRouter as Router} from 'react-router-dom';
import NavigBar from './components/NavigBar.jsx';


function App() {

  return (
    <>
      {/*navbar*/}
      <Router>
        <Container>
          <NavigBar />
        </Container>
      </Router>
    </>
  )
}

export default App
