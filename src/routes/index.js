import CoreLayout from 'layouts/CoreLayout';
import ServiceRequestRoute from './ServiceRequest';
import DashboardRoute from './Dashboard';
import MyRequestRoute from './MyRequest';
import MyRequestStatusRoute from './MyRequestStatus';
import StatusDetailRoute from './StatusDetail';

export const createRoutes = (store) => ({
  path: '/',
  name: 'CoreLayout', /* Breadcrumb name */
  staticName: true,
  component: CoreLayout,
  indexRoute: {
    onEnter: (nextState, replace, cb) => {
      replace('/dashboard');
      cb();
    },
  },
  childRoutes: [
    ServiceRequestRoute(store),
    DashboardRoute(store),
    MyRequestRoute(store),
    MyRequestStatusRoute(store),
    StatusDetailRoute(store),
  ],
});

export default createRoutes;