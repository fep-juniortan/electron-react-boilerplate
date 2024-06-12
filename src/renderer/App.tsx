import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import icon from '../../assets/icon.svg';
import './App.css';

function Hello() {
  return (
    <div className="bg-slate-700">
      <div className="Hello">
        <img width="200" alt="icon" src={icon} />
      </div>
      <h1>electron-react-boilerplate</h1>
      <Button>test</Button>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
      </Routes>
    </Router>
  );
}
