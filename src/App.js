import { useState } from 'react';
import { Routes, Route, Link, useLocation, useNavigate, Outlet  } from 'react-router-dom';
import './css/App.css';
import './css/reset.css';
import "./css/Header.css";
import "./css/Footer.css";
import "./css/Login.css";
import Header from './components/Header.js';
import Footer from './components/Footer.js';
import Main from './components/Main.js';
import Shop from './components/Shop.js';
import productData from './components/productData.js';
import Login from './components/Login.js';

function App() {
  let [data] = useState(productData);
  let urlname = useLocation().pathname;
  console.log(urlname);
  return (
    <div className="App">
      {/* 헤더영역 */}
      <Header className="{urlname}"/>
      <Routes>
        <Route path='/' element={<Main data={data}/>}></Route>
        <Route path='/Shop' element={<Shop data={data}/>}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      
      {/* 푸터 영역 */}
      <Footer className="footer"/>
    </div>
  );
}



export default App;
