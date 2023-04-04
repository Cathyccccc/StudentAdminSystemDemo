import Navbar from "./components/Navbar";
import './App.css';
// import {Routes, Route, Navigate} from 'react-router-dom';
// import Home from './components/Home';
// import About from './components/About';
// import AddOrEdit from "./components/AddOrEdit";
// import Detail from "./components/Detail";
import Router from './router/Router'; 

function App() {
  
  return (
    <div className="App col-md-9 col-xs-10">
      <Navbar />
      {/* <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/add" element={<AddOrEdit />} />
        <Route path="/edit/:id" element={<AddOrEdit />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/" element={<Navigate to='/home' replace />} />
      </Routes> */}
      <Router />
    </div>
  );
}

export default App;
