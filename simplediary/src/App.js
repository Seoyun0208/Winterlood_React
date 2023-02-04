import { useCallback, useEffect, useMemo, useRef, useReducer } from 'react';
import './App.scss';
import DiaryEditor from './components/DiaryEditor';
import DiaryList from './components/DiaryList';
// import Lifecycle from './components/Lifecycle/Lifecycle';
// import Lifecycle2 from './components/Lifecycle/Lifecycle2';
// import OptimizeTest from './components/optimizeTest/OptimizeTest'; 
// import OptimizeTest2 from './components/optimizeTest/OptimizeTest2';

// https://jsonplaceholder.typicode.com/comments

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT': {
      return action.data;
    }
    case 'CREATE': {
      const created_date = new Date().getTime();
      const newItem = { ...action.data, created_date };
      return [newItem, ...state];
    }
    case 'SAVE':
      return state.map(diary => diary.id === action.targetId ? { ...diary, content: action.newContent } : diary);
    case 'REMOVE':
      return state.filter(diary => diary.id !== action.targetId);
    default:
      return state;
  }
}

function App() {

  // const [data, setData] = useState([]);

  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/comments').then(res => res.json());
    const initData = res.slice(0, 20).map(item => {
      return {
        id: dataId.current++,
        author: item.email,
        content: item.body,
        emotion: Math.floor((Math.random() * 5) + 1),
        created_date: new Date().getTime()
      }
    });
    dispatch({ type: 'INIT', data: initData });
    // setData(initData);
  }

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {
    dispatch({ type: 'CREATE', data: { author, content, emotion, id: dataId.current } });
    // const created_date = new Date().getTime();
    // const newItem = {
    //   author, content, emotion, created_date, id: dataId.current
    // };
    dataId.current += 1;
    // setData((data) => [ newItem, ...data ]);
  }, []);

  const onSave = useCallback((targetId, newContent) => {
    dispatch({ type: 'SAVE', targetId, newContent });
    // setData(data => data.map(diary => diary.id === targetId ? { ...diary, content: newContent } : diary));
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({ type: 'REMOVE', targetId });
    // setData(data => data.filter(diary => diary.id !== targetId));
  }, []);

  const getDiaryAnalysis = useMemo(() => {

    const goodCount = data.filter(diary => diary.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;

    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      {/* <Lifecycle /> */}
      {/* <Lifecycle2 /> */}
      {/* <OptimizeTest /> */}
      {/* <OptimizeTest2 /> */}
      <DiaryEditor onCreate={onCreate} />
      <div>전체: {data.length}</div>
      <div>기분 날씨 맑음: {goodCount}</div>
      <div>기분 날씨 흐림: {badCount}</div>
      <div>기분 날씨 맑은 날 비율: {goodRatio}%</div>
      <DiaryList diaryList={data} onRemove={onRemove} onSave={onSave} />
    </div>
  );
}

export default App;
