import FirstPage from './pages/FirstPage/FirstPage.pages';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/navbar/navbar.component';

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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
