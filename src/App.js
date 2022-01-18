import FirstPage from './pages/FirstPage/FirstPage.pages';
import TopScore from './pages/TopScore/TopScore';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './pages/login/Login.page';
import Register from './pages/Register/Register';

function App() {
  return (
    // <div className="App">
    //   <FirstPage></FirstPage>

    //   <h1>{process.env.REACT_APP_API_URL}</h1>
    //   <h1>{process.env.REACT_APP_API_KEY}</h1>
    // </div>
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FirstPage></FirstPage>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/top-score" element={<TopScore/>} />
          <Route path="/register" element={<Register/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;