import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom';
import Root from './pages/root';
import Home from './pages/home';
import { useRef } from 'react';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />} >
        <Route index element={<Home />} />
      </Route>
    ),
    {
      basename: "/MFIPCHEM"  // هنا نضع basename مع اسم مستودع GitHub
    }
  );

  return (
    <RouterProvider router={router} />
  );
}

export default App;
