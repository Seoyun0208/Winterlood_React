import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Edit from './pages/Edit';
import New from './pages/New';
import Diary from './pages/Diary';
import NotFound from './pages/NotFound';
import React, { useReducer, useRef } from 'react';

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      newState = [action.data, ...state];
      break;
    }
    case 'REMOVE': {
      newState = state.filter(item => item.id !== action.targetId);
      break;
    }
    case 'EDIT': {
      newState = state.map(item => item.id === action.data.id ? { ...action.data } : item);
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  {
    id: 1,
    emotion: 1,
    content: '오늘의 일기는...1',
    date: 1675572413723,
  },
  {
    id: 2,
    emotion: 3,
    content: '오늘의 일기는...2',
    date: 1675572413724,
  },
  {
    id: 3,
    emotion: 4,
    content: '오늘의 일기는...3',
    date: 1675572413725,
  },
  {
    id: 4,
    emotion: 5,
    content: '오늘의 일기는...4',
    date: 1675572413728,
  },
];

function App() {

  const [data, dispatch] = useReducer(reducer, dummyData);

  const dataId = useRef(0);

  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: 'CREATE',
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    });
    dataId.current += 1;
  }

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: 'REMOVE', targetId });
  }

  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: 'EDIT',
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion
      }
    });
  }


  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/edit/:id' element={<Edit />} />
              <Route path='/new' element={<New />} />
              <Route path='/diary/:id' element={<Diary />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
