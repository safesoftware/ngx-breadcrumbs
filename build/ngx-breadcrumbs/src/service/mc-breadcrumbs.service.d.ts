import { Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IBreadcrumb } from '../mc-breadcrumbs.shared';
import { McBreadcrumbsConfig } from './mc-breadcrumbs.config';
export declare class McBreadcrumbsService {
    private _router;
    private _config;
    private _injector;
    private _breadcrumbs;
    private _defaultResolver;
    constructor(_router: Router, route: ActivatedRoute, _config: McBreadcrumbsConfig, _injector: Injector);
    readonly crumbs$: Observable<IBreadcrumb[]>;
    private _resolveCrumbs(route);
}
