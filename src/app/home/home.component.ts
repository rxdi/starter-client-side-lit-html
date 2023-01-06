import { SpaceXService } from '@core/spacex/spacex.service';
import { Component } from '@rhtml/component';
import { AngularLayout, FlexLayout } from '@rhtml/modifiers';
import { Inject } from '@rxdi/core';
import { async, css, html, LitElement, OnDestroy, OnInit, OnUpdate } from '@rxdi/lit-html';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @customElement home-component
 */
@Component({
  Settings: {
    selector: 'home-component',
    style: css`
      .launch {
        color: white;
        background: #467792;
        height: 100px;
      }
    `,
    modifiers: [...FlexLayout, ...AngularLayout],
  },
  State(this: HomeComponent) {
    return this.spacexService.getLaunches();
  },
  Loading: () => html`Loading...`,
  Render: () =>
    function (this, launches) {
      return html`
        <h4>Time is ${async(this.timer)}</h4>
        <header>
          <h1>Space X mission names:</h1>
        </header>
        <div fxLayout="row wrap" fxLayoutAlign="space-evenly stretch" fxLayoutGap="10px">
          ${launches.map(
            (launch) => html`
              <div class="launch" fxLayout="column" fxLayoutAlign="center center">
                <div>${launch.mission_name}</div>
                <a ngIf=${!!launch.links.article_link} target="_blank" .href=${launch.links.article_link}>Article</a>
                <a ngIf=${!!launch.links.video_link} target="_blank" .href=${launch.links.video_link}>Video</a>
              </div>
            `
          )}
        </div>
      `;
    },
})
export class HomeComponent extends LitElement implements OnInit, OnDestroy {
  @Inject(SpaceXService)
  private spacexService: SpaceXService;

  private timer = timer(100, 1000).pipe(
    map(() => {
      const date = new Date();
      return [[date.getHours(), 'hours'].join(' '), [date.getSeconds(), ' seconds'].join(' ')].join(' - ');
    })
  );

  OnInit() {
    console.log('Home component init');
  }

  OnDestroy() {
    console.log('Home component destroyed');
  }
}
