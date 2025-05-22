
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MainPage from './pages/MainPage';
import AllNavbars from './pages/AllNavbars';
import AllHeroSections from './pages/AllHeroSections';
import Exams from './pages/Exams';


function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route index element={<MainPage />} />
        <Route path='all-navbars' element={<AllNavbars />} />
        <Route path='all-heros' element={<AllHeroSections />} />
        <Route path='exams' element={<Exams />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
