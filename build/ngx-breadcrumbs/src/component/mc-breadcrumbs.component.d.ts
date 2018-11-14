import { Subscription } from 'rxjs';
import { McBreadcrumbsService } from '../service/mc-breadcrumbs.service';
import { OnDestroy, OnInit } from '@angular/core';
import { IBreadcrumb } from '../mc-breadcrumbs.shared';
export declare class McBreadcrumbsComponent implements OnInit, OnDestroy {
    service: McBreadcrumbsService;
    constructor(service: McBreadcrumbsService);
    crumbs: IBreadcrumb[];
    subscriptions: Subscription[];
    ngOnInit(): void;
    ngOnDestroy(): void;
}
