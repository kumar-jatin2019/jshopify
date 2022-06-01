import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import { Provider } from 'react-redux';
import Home from './components/Home';
import store from './Reducers/store';
import Cart from './components/Cart';
import Login from './components/Login';
import Register from './components/Register';



function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path="/register" element={<Register />} />
            <Route exact path="/" element={<Login />} />
            <Route path="/jshopify" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
