import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';

function App() {

  const route = createBrowserRouter([
    {
      path : '/',
      element : <Home />,
    },
    {
      path : 'contact',
      element : <Contact />
    },
    {
      path : 'login',
      element : <Login />
    },
    {
      path : 'dashboard',
      element : <Dashboard />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
