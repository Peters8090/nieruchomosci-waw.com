import { Content } from "../../../../../content";
import { RouteType } from "../../../../../interfaces and types/RouteType";
import { Guide } from "../../shared/Guide/Guide";

export const GuideForSellers: RouteType = Object.assign(() => {
  return (
    <Guide
      route={Content.guideForSellers.route}
      steps={Content.guideForSellers.steps}
    />
  );
}, Content.guideForSellers.route);
