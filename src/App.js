import './App.css';
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Home from './pages/Home';
import Contact from './pages/Contact'

function App() {

  const route = createBrowserRouter([
    {
      path : '/',
      element : <Home />,
    },
    {
      path : 'contact',
      element : <Contact />
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={route} />
    </div>
  );
}

export default App;
