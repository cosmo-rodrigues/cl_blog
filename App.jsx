import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import { AnchorStyle, Container, Navbar } from './style/globalStyles';

function App() {
  return (
    <Container>
      <Navbar>
        <Link to='/' style={AnchorStyle}>
          Home
        </Link>
        <Link to='login' style={AnchorStyle}>
          Login
        </Link>
      </Navbar>
      <Routes>
        <Route path='/' element={<Home />}>
          <Route path=':usermame' element={() => <>Username</>} />
        </Route>
        <Route path='login' element={<Login />} />
      </Routes>
    </Container>
  );
}

export default App;
