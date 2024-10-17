export const getActiveRoute = (routes, location) => {
  return routes.find((route) => route.path === location.pathname);
};
