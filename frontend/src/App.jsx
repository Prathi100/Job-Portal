import { createBrowserRouter } from 'react-router-dom';
import Navbar from './components/shared/Navbar';
import { RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/auth/login';
import Signup from './components/auth/Signup';


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home/>,
  },
  {
    path: '/login',
    element: <Login/>,
  },
  {
    path: '/signup',
    element: <Signup/>,
  },
 
])
 
function App() {
  return (
    <>
    <RouterProvider router={appRouter}> </RouterProvider>
    </>
  );
}

export default App;
