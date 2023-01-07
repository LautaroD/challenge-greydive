import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Encuesta, Resultados, Navbar } from './components';

function App() {
  return (
    <div className='app'>
      <div className='app__body'>
        <BrowserRouter>
          <Navbar>
            <Routes>
              <Route path='/' element={<Encuesta />} />
              <Route path='/resultados' element={<Resultados />} />
            </Routes>
          </Navbar>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
