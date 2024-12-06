type RouteMap = {
  [key: string]: string;
};

const Routes: RouteMap = {
  default: '/',
  dashboard: '/dashboard',
  employee: '/dashboard/employee',
  product: '/dashboard/product',
  profile: '/dashboard/profile',
  login: '/login',
  kanban: '/dashboard/kanban',
  test: '/dashboard/test',
  selection: '/dashboard/selection'
};

export default Routes;
