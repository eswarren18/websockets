import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from './MainPage';
import Chat from './Chat';
import './index.css';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
