import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './routes/home';

const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      <Route index element={<Home />} />
      <Route path="zustand" lazy={() => import('./routes/zustand')} />
      <Route path="recoil" lazy={() => import('./routes/recoil')} />
    </Route>
  )
);

export function App() {
  return <RouterProvider router={routes} />;
}

export default App;
