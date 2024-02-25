import  { BrowserRouter,  Routes, useHistory, Route }  from 'react-router-dom';
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/HomePage';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path="/"  element={<HomePage />}>
          </Route>
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
