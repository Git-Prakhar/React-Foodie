import './App.css';
import LandingPage from './components/LandingPage';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import MainPage from './components/MainPage';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage />} />
          <Route exact path='/order' element={<MainPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
