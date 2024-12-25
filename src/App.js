import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { createBrowserRouter, createHashRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './pages/root';
import Home from './pages/home';
import { useRef } from 'react';
function App() {
  const sectionRefs = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const scrollToSection = (index) => {
    sectionRefs[index].current.scrollIntoView({ behavior: 'smooth' });
  };
  const router = createHashRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
      <Route index element={<Home/>}/>

  
      </Route>
    )
  );


  return (
<RouterProvider router={router} />
  );
}

export default App;
