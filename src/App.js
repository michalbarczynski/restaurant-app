import NotFound from './components/pages/NotFound/NotFound';
import Home from './components/pages/Home/Home';
import { Container } from 'react-bootstrap';
import NavBar from './components/views/NavBar';

function App() {
  return (
    <main>
      <Container>
        <h1>test widoku</h1>
        <NavBar/>
        <NotFound></NotFound>
        <Home></Home>
      </Container>
    </main>
  );
}

export default App;
