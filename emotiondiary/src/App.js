import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import RouteTest from './components/RouteTest';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>App.js</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/new' element={<New />} />
          <Route path='/diary' element={<Diary />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}

export default App;
