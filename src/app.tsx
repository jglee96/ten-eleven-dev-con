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
      <Route path="props" lazy={() => import('./routes/props')} />
      <Route
        path="zustand"
        lazy={() => import('@ten-eleven-dev-con/zustand-example')}
      />
      <Route
        path="recoil"
        lazy={() => import('@ten-eleven-dev-con/recoil-example')}
      />
    </Route>
  )
);

export function App() {
  return <RouterProvider router={routes} />;
}

export default App;
