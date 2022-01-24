import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './Reducers/store';
import Cart from './components/Cart';


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
          <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} /> 
            <Route exact path="/cart" element={<Cart />} /> 
          </Routes>
        </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
