import Header from './components/Header';
import NotFoundBlock from './components/NotFoundBlock';
import Home from './pages/Home';
import './scss/app.scss';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <div className="content">
          <div className="container">
            <Home />
            <NotFoundBlock />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
