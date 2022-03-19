import { RouterStateSerializer } from "@ngrx/router-store";
import {
  ActivatedRouteSnapshot,
  Data,
  Params,
  RouterStateSnapshot,
  DefaultUrlSerializer,
  UrlTree,
} from "@angular/router";
import { AppRoute } from "../../models";

export const mergeRouteParams = (route:ActivatedRouteSnapshot|null,getter:(r:ActivatedRouteSnapshot) => Params):Params => {
  if (!route) {return {};}
  const currentParams = getter(route);
  const primaryChild = route.children.find(c => c.outlet === "primary") || route.firstChild;
  return {...currentParams, ...mergeRouteParams(primaryChild, getter)};
};
export const mergeRouteData = (route:ActivatedRouteSnapshot|null):Data => {
  if (!route) {return {};}
  const currentData = route.data;
  const primaryChild = route.children.find(c => c.outlet === "primary") || route.firstChild;
  return {...currentData, ...mergeRouteData(primaryChild)};
};
export class AppRouterStateSerializer implements RouterStateSerializer<AppRoute> {
  serialize(routerState:RouterStateSnapshot):AppRoute {
    return {
      url:routerState.url||"/",
      params:mergeRouteParams(routerState.root,r => r.params),
      query:mergeRouteParams(routerState.root,r => r.queryParams),
      data:mergeRouteData(routerState.root),
    };
  }
}
export class AppRouterUrlSerializer extends DefaultUrlSerializer {
  override parse(url:string):UrlTree {
    // Change plus signs to encoded spaces
    url = url.replace(/\+/g,"%20");
    // Use the default serializer that you can import to just do the 
    // default parsing now that you have fixed the url.
    return super.parse(url);}
  override serialize(tree:UrlTree): string {
    // Use the default serializer to create a url and replace any spaces with + signs
    return super.serialize(tree).replace(/%20/g,"+");
  }
}