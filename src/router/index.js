import Loadable from 'react-loadable';
import LoadingComponent from '@/components/common/LoadingComponent';
const HomePage = Loadable({
  loader: () => import('@/components/home/HomePage'),
  loading: LoadingComponent
});
const App = Loadable({
  loader: () => import('@/App'),
  loading: LoadingComponent
});
const Main = Loadable({
  loader: () => import('@/pages/main/Main'),
  loading: LoadingComponent
});
const Catalog = Loadable({
  loader: () => import('@/components/home/Catalog'),
  loading: LoadingComponent
});
const NotFound = Loadable({
  loader: () => import('@/components/404'),
  loading: LoadingComponent
});
const Search = Loadable({
  loader: () => import('@/pages/search'),
  loading: LoadingComponent
});
const Select = Loadable({
  loader: () => import('@/pages/select'),
  loading: LoadingComponent
});
const User = Loadable({
  loader: () => import('@/pages/user'),
  loading: LoadingComponent
});
const router = {
  basename: 'distribution',
  routes: [
    {
      path: '/app',
      component: App,
      exact: true
    },
    {
      path: '/',
      component: HomePage,
      children: [
        {
          path: '/',
          component: Main,
          exact: true
        },
        {
          path: '/catalog',
          component: Catalog
        },
        {
          path: '/home',
          component: Main
        },
        {
          path: '/search',
          component: Search
        },
        {
          path: '/select',
          component: Select
        },
        {
          path: '/user',
          component: User
        },
        {
          path: '/*',
          component: NotFound
        }
      ]
    }
  ]
};
export default router;
