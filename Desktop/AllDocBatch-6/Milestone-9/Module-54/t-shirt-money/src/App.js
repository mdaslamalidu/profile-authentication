import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './Root';
import Home from './components/Home/Home';
import Orders from './components/Orders/Orders';
import About from './components/About/About';
import Grandpa from './components/Grandpa/Grandpa';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader: () => fetch("t-shirt.json")
      },
      {
        path: "orders",
        element: <Orders/>
      },
      {
        path: "about",
        element: <About/>
      },
      {
        path: "granpa",
        element: <Grandpa/>
      }
    ]
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
