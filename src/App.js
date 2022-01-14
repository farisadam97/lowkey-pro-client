import FirstPage from './pages/FirstPage/FirstPage.pages';

function App() {
  return (
    <div className="App">
      <FirstPage></FirstPage>
      <h1>{process.env.REACT_APP_API_URL}</h1>
      <h1>{process.env.REACT_APP_API_KEY}</h1>
    </div>
  );
}

export default App;
