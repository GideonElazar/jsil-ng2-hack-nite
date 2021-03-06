/// <reference src="typings/tsd.d.ts">

import {CORE_DIRECTIVES, Component, View, bootstrap} from "angular2/angular2";
import {HTTP_BINDINGS} from "angular2/http";
import {ROUTER_BINDINGS, HashLocationStrategy, LocationStrategy, Router, RouterLink, RouteConfig, RouterOutlet} from "angular2/router";
import {bind, Injectable} from "angular2/di";


import Home from "./home";
import RepoList from "./repo-list";
import ImageLoaderApp from "./ImageLoader/image-loader-app";

@RouteConfig([
    {path: '/', as: "home", component:Home},
    {path: '/repo-list', as: "repo-list", component:RepoList},
    {path: '/imageLoader/image-loader', as: "image-loader", component:ImageLoaderApp},
])
@Component({
    selector: "app"
})
@View({
    directives: [CORE_DIRECTIVES, RouterOutlet, RouterLink],
    template: `
        <nav>
            <a [router-link]="['/home']">Home</a>
            <a [router-link]="['/repo-list']">Repo List</a>
            <a [router-link]="['/image-loader']">Image Loader</a>
        </nav>
        <main>
            <router-outlet></router-outlet>
        </main>
    `
})
class App {}

bootstrap(App, [
    HTTP_BINDINGS,
    ROUTER_BINDINGS,
    bind(LocationStrategy).toClass(HashLocationStrategy)
]).then(
        success => console.log(`Bootstrap success`),
        error => console.log(error)
);
