import { useRef, useState } from 'react';
import './App.scss';
import DiaryEditor from './components/DiaryEditor';
import DiaryList from './components/DiaryList';

function App() {

  const [data, setData] = useState([]);
  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author, content, emotion, created_date, id: dataId.current
    };
    dataId.current += 1;
    setData([...data, newItem]);
  }

  const onDelete = (targetId) => {
    if (window.confirm(`${targetId}번째 일기를 정말 삭제하시겠습니까?`)) {
      const newDiaryList = data.filter(diary => diary.id !== targetId);
      setData(newDiaryList);
    }
  }

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <DiaryList diaryList={data} onDelete={onDelete} />
    </div>
  );
}

export default App;
