import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { createBrowserHistory } from 'history';
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
  const history = createBrowserHistory({ window });
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
        <Routes history={history}>
          <Route path='/' element={<Home />}>
            <Route path=':usermame' element={<></>} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/*' element={<Navigate to='/' />} />
        </Routes>
      </Content>
    </Container>
  );
}

export default App;
