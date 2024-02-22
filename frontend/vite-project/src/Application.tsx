import './index.css';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import {
  Home,
  ErrorPage,
} from "@/pages/index.ts";

const router = createBrowserRouter(createRoutesFromElements(
  <Route errorElement={<ErrorPage />}>
    <Route path={'/'}>
      <Route index element={<Home />} />
    </Route>
  </Route>
));

const Application = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default Application
