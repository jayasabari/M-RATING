import './App.css';
import Apps from './pages/Apps';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import FistPage from './pages/FistPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
          <Route path="/apps" element={<Apps/>}/>
          <Route path="/" element={<FistPage/>}/>
          <Route path="/register" element={<RegisterPage/>}/>
          <Route path="/Login" element={<LoginPage/>}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
