import FirstPage from './pages/FirstPage/FirstPage.pages';
import TopScore from './pages/TopScore/TopScore';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/login/Login.page';
import Register from './pages/Register/Register';
import Profile from  './pages/profile/Edit.pages';
import RPSGame from  './pages/RPSGame/RPSGame';
import HomePage from  './pages/HomePage/HomePage';
import GameHistory from  './pages/GameHistory/GameHistory';
import GameList from './pages/GameList/GameList';
import { ProtectedRoute } from './Protectedroute';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage></FirstPage>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/top-score" element={<TopScore/>} />
          <Route path="/register" element={<Register/>} />

          <Route path="/profile" element={<ProtectedRoute/>} >
            <Route path="/profile" element={<Profile/>} />
          </Route>

          <Route path="/rps-game" element={<ProtectedRoute/>} >
            <Route path="/rps-game" element={<RPSGame/>} />
          </Route>

          <Route path="/home-page" element={<ProtectedRoute/>} >
            <Route path="/home-page" element={<HomePage/>} />
          </Route>

          <Route path="/game-history" element={<ProtectedRoute/>} >
            <Route path="/game-history" element={<GameHistory/>} />
          </Route>
          
          <Route path="/game-history" element={<GameHistory/>} />
          <Route path="/game-list" element={<GameList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
