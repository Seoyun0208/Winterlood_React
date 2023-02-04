import { useEffect, useRef, useState } from 'react';
import './App.scss';
import DiaryEditor from './components/DiaryEditor';
import DiaryList from './components/DiaryList';
// import Lifecycle from './components/Lifecycle/Lifecycle';
// import Lifecycle2 from './components/Lifecycle/Lifecycle2';


// https://jsonplaceholder.typicode.com/comments

function App() {

  const [data, setData] = useState([]);
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
    setData(initData);
  }

  useEffect(() => {
    getData();
  }, []);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author, content, emotion, created_date, id: dataId.current
    };
    dataId.current += 1;
    setData([...data, newItem]);
  }

  const onSave = (targetId, newContent) => {
    setData(
      data.map(diary => diary.id === targetId ? { ...diary, content: newContent } : diary)
    );
  }

  const onRemove = (targetId) => {
    const newDiaryList = data.filter(diary => diary.id !== targetId);
    setData(newDiaryList);
  }

  return (
    <div className="App">
      {/* <Lifecycle /> */}
      {/* <Lifecycle2 /> */}
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onRemove={onRemove} onSave={onSave} />
    </div>
  );
}

export default App;
