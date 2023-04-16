import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import {
  AnchorStyle,
  Container,
  Content,
  Header,
  Navbar,
} from './style/globalStyles';
import { loginService } from './services/login';
function App() {
  const navigate = useNavigate();
  const handleHomeLinkClick = () => {
    if (window.location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const loggedUser = loginService.getUser();

  const LogOut = () => {
    if (loggedUser) {
      loginService.logOut();
    }
  };

  return (
    <Container>
      <Header>
        <Navbar>
          <Link to='/' style={AnchorStyle} onClick={handleHomeLinkClick}>
            Home
          </Link>
          <Link to='/login' style={AnchorStyle} onClick={LogOut}>
            {loggedUser ? 'Logout' : 'Login'}
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
