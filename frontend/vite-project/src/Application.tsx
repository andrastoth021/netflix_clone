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
  LandingPage,
  ErrorPage,
  ProfilePage,
} from "@/pages/index.ts";
import {
  Layout,
} from '@/components/layout';

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
    <Route path={'/landing-page'} element={<Layout />}>
      <Route index element={<LandingPage />} />
    </Route>
    <Route path={'/user/manage'} element={<Layout />}>
      <Route index element={<ProfilePage />} />
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
