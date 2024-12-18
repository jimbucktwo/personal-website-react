import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Home, Contact, Projects, App, Resume, TopBar, MenuBar} from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';


ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}/>
      <Route path="/home" element={<Home />}/>
      <Route path="/resume" element={<Resume/>}/>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>
  </BrowserRouter>, document.getElementById('root')
)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

