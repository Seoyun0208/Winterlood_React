import './App.scss';
import DiaryEditor from './components/DiaryEditor';
import DiaryList from './components/DiaryList';

const dummyList = [
  {
    id: 1,
    author: '박서윤',
    content: '오늘의 날씨는 맑음!!',
    emotion: 5,
    created_date: new Date().getTime()
  },
  {
    id: 2,
    author: '김배성',
    content: '태권도.. 포기',
    emotion: 1,
    created_date: new Date().getTime()
  },
  {
    id: 3,
    author: '강다애',
    content: '오늘도 지각이다..ㅜㅜ',
    emotion: 2,
    created_date: new Date().getTime()
  },
  {
    id: 4,
    author: '서민우',
    content: '열정과 냉정 사이 재미있네',
    emotion: 4,
    created_date: new Date().getTime()
  },
  {
    id: 5,
    author: '최성률',
    content: '만희랑 노래방 갔다옴',
    emotion: 5,
    created_date: new Date().getTime()
  }
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
