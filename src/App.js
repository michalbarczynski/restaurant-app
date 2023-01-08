import NotFound from './components/pages/NotFound/NotFound';
import Home from './components/pages/Home/Home';
import { Container } from 'react-bootstrap';
import NavBar from './components/views/NavBar';

function App() {
  return (
    <main>
      <Container>
        <NavBar/>
        <Home></Home>
        <NotFound></NotFound>
      </Container>
    </main>
  );
}

export default App;
