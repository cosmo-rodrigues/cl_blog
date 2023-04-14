import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import { Container } from './style/globalStyles';

function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Container>
  );
}

export default App;
