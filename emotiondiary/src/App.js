import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
// import RouteTest from './components/RouteTest'; 
import MyHeader from './components/MyHeader';
import MyButton from './components/MyButton';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader headerText={'App'} leftChild={<MyButton text={'왼쪽 버튼'} onClick={() => alert('왼쪽 버튼 클릭')} />} rightChild={<MyButton text={'오른쪽 버튼'} onClick={() => alert('오른쪽 버튼 클릭')} />} />
        <h1>App.js</h1>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/edit' element={<Edit />} />
          <Route path='/new' element={<New />} />
          <Route path='/diary/:id' element={<Diary />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        {/* <RouteTest /> */}
      </div>
    </BrowserRouter>
  );
}

export default App;
