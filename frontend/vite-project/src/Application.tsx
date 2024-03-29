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
  ExplorePage,
  DetailsPage,
  SearchPage,
  ProfilePage,
  ErrorPage,
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
    <Route path={'/explore'} element={<Layout />}>
      <Route index element={<ExplorePage />} />
    </Route>
    <Route path={'/show/search'} element={<Layout />}>
      <Route index element={<SearchPage />} />
    </Route>
    <Route path={'/user/manage'} element={<Layout />}>
      <Route index element={<ProfilePage />} />
    </Route>
    <Route path={'/movie/details/:id'} element={<Layout />}>
      <Route index element={<DetailsPage />} />
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
