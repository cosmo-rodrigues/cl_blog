import { Link, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import {
  AnchorStyle,
  Container,
  Content,
  Header,
  Navbar,
} from './style/globalStyles';

function App() {
  const handleHomeLinkClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <Container>
      <Header>
        <Navbar>
          <Link to='/' style={AnchorStyle} onClick={handleHomeLinkClick}>
            Home
          </Link>
          <Link to='login' style={AnchorStyle}>
            Login
          </Link>
        </Navbar>
      </Header>
      <Content>
        <Routes>
          <Route path='/' element={<Home />}>
            <Route path=':usermame' element={<>Username</>} />
          </Route>
          <Route path='login' element={<Login />} />
        </Routes>
      </Content>
    </Container>
  );
}

export default App;
