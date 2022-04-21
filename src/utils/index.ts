import { matchRoutes, RouteObject } from 'react-router-dom';

export const getKeyValue =
  <T extends object, U extends keyof T>(obj: T) =>
  (key: U) =>
    obj[key];

export const groupBy = <T, K extends keyof any>(
  list: T[],
  getKey: (item: T) => K
) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = [];
    previous[group].push(currentItem);
    return previous;
  }, {} as Record<K, T[]>);

export const groupByCount = <T, K extends keyof any>(
  list: T[],
  getKey: (item: T) => K
) =>
  list.reduce((previous, currentItem) => {
    const group = getKey(currentItem);
    if (!previous[group]) previous[group] = 0;
    previous[group]++;
    return previous;
  }, {} as Record<K, number>);

export const capitalizeFirstLetter = (text: string) => {
  const arr = text.toLocaleLowerCase().split(' ');
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return arr.join(' ');
};

export interface CustomRouteObject extends RouteObject {
  breadcrumbName: string;
  relativePath: string;
}

export const pathRoutes = (pathname: string, routes: RouteObject[]) => {
  const _rootPath = matchRoutes(routes, `/`) || [];
  const _matchedRoutes = matchRoutes(routes, `${pathname}/`) || [];
  const path = [..._rootPath, ..._matchedRoutes];

  return path.map((route) => {
    const keys = Object.keys(route.params)
      .map((key) => route.params[key])
      .join(' - ');
    const custom = route.route as CustomRouteObject;

    return {
      path: route.pathname,
      breadcrumbName: custom.breadcrumbName + (keys ? `: ${keys}` : ''),
    };
  });
};

export const getRootPath = (routes: RouteObject[]) => {
  const _rootRoute = matchRoutes(routes, `/`);
  if (_rootRoute) {
    const _rootPath = _rootRoute[0];
    const route = _rootPath.route as CustomRouteObject;
    return [
      {
        path: _rootPath.pathname,
        breadcrumbName: route.breadcrumbName,
      },
    ];
  }
  return [];
};
