type RouteMap = {
  [key: string]: string;
};

const Routes: RouteMap = {
  default: '/',
  dashboard: '/dashboard',
  employee: '/dashboard/employee',
  product: '/dashboard/product',
  accountProfile: '/dashboard/profile',
  accountLogin: '/login',
  kanban: '/dashboard/kanban',
  test: '/dashboard/test'
};

export default Routes;
