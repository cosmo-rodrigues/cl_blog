import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
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
  const user = loginService.isLogged();

  function handleHomeLinkClick() {
    const navigateTo = user ? `/${user.username}` : '/';
    const currentPath = window.location.pathname;
    if (currentPath === navigateTo) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return navigate(navigateTo);
    }

    navigate('/');
  }

  function LogOut() {
    if (user) {
      loginService.logOut();
    }

    navigate('/login');
  }

  return (
    <Container>
      <Header>
        <Navbar>
          <AnchorStyle onClick={handleHomeLinkClick}>Home</AnchorStyle>
          <AnchorStyle onClick={LogOut}>
            {user ? 'Logout' : 'Login'}
          </AnchorStyle>
        </Navbar>
      </Header>
      <Content>
        <Routes>
          <Route exact path='/' element={<Home />}>
            <Route path=':usermame' element={<></>} />
          </Route>
          <Route path='/*' element={<Navigate to='/' />} />
          <Route exact path='login' element={<Login />} />
        </Routes>
      </Content>
    </Container>
  );
}

export default App;
