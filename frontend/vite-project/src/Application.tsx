import './index.css';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
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

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

const router = createBrowserRouter(createRoutesFromElements(
  <Route errorElement={<ErrorPage />}>
    <Route path={'/'}>
      <Route index element={<Home />} />
    </Route>
  </Route>
));

const Application = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default Application
