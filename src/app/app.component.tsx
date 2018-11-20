
import { Component } from "@rxdi/core";
import { h, render, Component as PreactComponent } from 'preact';
import AsyncRoute from 'preact-async-route';
import { Router, Link } from 'preact-router';

@Component()
export class AppComponent extends PreactComponent {

    OnBefore() {
        render(<AppComponent />, document.body);
    }

    render() {
        return <div>
            <nav>
                <Link activeClassName="active" href="/">Home</Link>
                <Link activeClassName="active" href="/about">About</Link>
            </nav>
            <Router>
                <AsyncRoute
                    path="/"
                    getComponent={this.getHomeComponent}
                    loading={() => <div>loading...</div>}
                />
                <AsyncRoute
                    path="/about"
                    getComponent={this.getAboutComponent}
                    loading={() => <div>loading...</div>}
                />
            </Router>
        </div>
    }

    async getAboutComponent() {
        return (await import('./about/about.component')).AboutComponent;
    }
    async getHomeComponent() {
        return (await import('./home/home.component')).HomeComponent;
    }

}