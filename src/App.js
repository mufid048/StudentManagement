import './App.css';
import Footer from './components/Footer';
import NavigationBar from './components/NavigationBar';
import Student from './components/Student';
import StudentList from './components/StudentList';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Container>
      <Student />
      <StudentList />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
