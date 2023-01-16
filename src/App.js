import NotFound from './components/pages/NotFound/NotFound';
import Home from './components/pages/Home/Home';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import Table from './components/features/Table';

import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <main>
      <Container>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/table:id' element={<Table/>} />
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Container>
    </main>
  );
}

export default App;
// Navigate, Table.js classes and elements, onChange target value