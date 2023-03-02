import NotFound from './components/pages/NotFound';
import Home from './components/pages/Home';
import AddTableForm from './components/pages/AddTableForm';
import Header from './components/views/Header';
import Footer from './components/views/Footer';
import Table from './components/features/Table';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchTables } from './redux/tablesRedux';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchTables()), [dispatch]);

  return (
    <main>
      <Container>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/newtable' element={<AddTableForm />}/>
          <Route path='/table/:id' element={<Table/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
        <Footer/>
      </Container>
    </main>
  );
}

export default App;