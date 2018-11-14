import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { IBreadcrumb } from '../mc-breadcrumbs.shared';
import { Observable } from 'rxjs';
export declare class McBreadcrumbsResolver implements Resolve<IBreadcrumb[]> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IBreadcrumb[]> | Promise<IBreadcrumb[]> | IBreadcrumb[];
    getFullPath(route: ActivatedRouteSnapshot): string;
}