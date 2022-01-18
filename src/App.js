import FirstPage from './pages/FirstPage/FirstPage.pages';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/navbar/navbar.component';
import Register from './pages/Register/Register';
import Profile from  './pages/profile/Edit.pages';

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
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
