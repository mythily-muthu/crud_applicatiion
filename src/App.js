
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Employeelisting from './pages/Employeelisting';




function App() {
  return (
    <div className="App">
      <h1>React JS CRUD operations..</h1>

      <Router>
        <Routes>
          <Route path="/" element={<Employeelisting />} />
        </Routes>

      </Router>



    </div>
  );
}

export default App;
