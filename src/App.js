import './App.css';
import NavigationBar from './components/NavigationBar';
import Student from './components/Student';
import StudentList from './components/StudentList';

function App() {
  return (
    <div className="App">
     <Student/>
     <StudentList/>
    </div>
  );
}

export default App;
