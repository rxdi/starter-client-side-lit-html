import { Service } from "@rxdi/core";
import history, { StartOptions } from './history/history';
import { Observable, of, BehaviorSubject } from "rxjs";

@Service()
export class Router {

    private locationBar = new history();
    activatedRoute: BehaviorSubject<any> = new BehaviorSubject(null);
    url: string;

    constructor() {
        setTimeout(() => {
            this.url = window.location.pathname;
            this.start({ pushState: true }).subscribe();
            this.activatedRoute.next(this.getSnapshot());
            this.navigate(this.url + window.location.search, { params: this.getAllUrlParams(this.url) });
        });

    }

    private navigateInternal(route: string, options?: { trigger?: boolean, replace?: boolean, }) {
        this.url = route;
        return of(this.locationBar.update(route, options))
    }

    navigate(route: string, options?: { params: any, trigger?: boolean, replace?: boolean, }) {
        return this.navigateInternal(route, options);
    }

    onChange(): Observable<string> {
        return new Observable<string>(o => this.locationBar.onChange((p) => {
            o.next(p);
            return () => o.complete();
        }));
    }

    private getQueryParams(qs) {
        qs = qs.split('+').join(' ');

        let params = {},
            tokens,
            re = /[?&]?([^=]+)=([^&]*)/g;

        while (tokens = re.exec(qs)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }

        return params;
    }

    getSnapshot() {
        const path = this.url + window.location.search;
        return {
            route: path.split('?')[0],
            params: this.getAllUrlParams(path)
        }
    }

    private getAllUrlParams(url) {
        let queryString = url ? url.split('?')[1] : window.location.search.slice(1);
        let obj = {};
        if (queryString) {
            queryString = queryString.split('#')[0];
            let arr = queryString.split('&');
            for (let i = 0; i < arr.length; i++) {
                let a = arr[i].split('=');
                let paramNum = undefined;
                let paramName = a[0].replace(/\[\d*\]/, function (v) {
                    paramNum = v.slice(1, -1);
                    return '';
                });
                let paramValue = typeof (a[1]) === 'undefined' ? true : a[1];
                paramName = paramName.toLowerCase();
                paramValue = paramValue.toLowerCase();
                if (obj[paramName]) {
                    if (typeof obj[paramName] === 'string') {
                        obj[paramName] = [obj[paramName]];
                    }
                    if (typeof paramNum === 'undefined') {
                        obj[paramName].push(paramValue);
                    }
                    else {
                        obj[paramName][paramNum] = paramValue;
                    }
                }
                else {
                    obj[paramName] = paramValue;
                }
            }
        }
        return obj;
    }

    private start(options: StartOptions) {
        this.locationBar.start(options);
        return of(true);
    }

    freeze() {
        this.navigate = () => null;
        return of(true);
    }

    unfreeze() {
        this.navigate = this.navigateInternal.bind(this);
        return of(true);
    }


}