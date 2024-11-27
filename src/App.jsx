import { 
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom';
import React from 'react';
import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import JobsPage from './pages/JobsPage';

//sets up routing mechanism, listens to URL changes in the browser
const router = createBrowserRouter (
    createRoutesFromElements(
      <Route path='/' element={<MainLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path="/jobs" element={<JobsPage/>}/>
      </Route>
  )
);
const App = () => {
  //RouterProvider - makes the router available throughout you app, so that when you navigate between routes, the correct components get rendered.
  return <RouterProvider router={router} />;
}

export default App
