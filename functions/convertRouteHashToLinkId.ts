export const convertRouteHashToLinkId = (routeHash: string) =>
  /.*#(.*)/.exec(routeHash)?.[1] ?? "";
