import './App.css';
import InputForm from './components/InputForm/InputForm';
import NotesList from './components/NotesList/NotesList';

function App() {
  return (
    <div className="App">
      <h1>ДЗ 26. Практика Redux</h1>
      <InputForm/>
      <NotesList/>
    </div>
  );
}

export default App;
