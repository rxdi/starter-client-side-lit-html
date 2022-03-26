import { SpaceXService } from '@core/spacex/spacex.service';
import { ILaunch } from '@introspection/index';
import { AngularLayout, FlexLayout } from '@rhtml/modifiers';
import { Inject } from '@rxdi/core';
import {
  async,
  Component,
  css,
  html,
  LitElement,
  OnDestroy,
  OnInit,
  OnUpdate
} from '@rxdi/lit-html';
import { defer, Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * @customElement home-component
 */
@Component<HomeComponent>({
  selector: 'home-component',
  style: css`
    .launch {
      color: white;
      background: #467792;
      height: 100px;
    }
  `,
  modifiers: [...FlexLayout, ...AngularLayout],
  template(this) {
    return html`
      <h4>Time is ${async(this.timer)}</h4>
      <header>
        <h1>Space X mission names:</h1>
      </header>
      <div
        fxLayout="row wrap"
        fxLayoutAlign="space-evenly stretch"
        fxLayoutGap="10px"
      >
        <r-for .of=${this.launches}>
          <r-let
            .item=${(launch: ILaunch) => html`
              <div
                class="launch"
                fxLayout="column"
                fxLayoutAlign="center center"
              >
                <div>${launch.mission_name}</div>
                <a
                  ngIf=${!!launch.links.article_link}
                  target="_blank"
                  .href=${launch.links.article_link}
                  >Article</a
                >
                <a
                  ngIf=${!!launch.links.video_link}
                  target="_blank"
                  .href=${launch.links.video_link}
                  >Video</a
                >
              </div>
            `}
          ></r-let>
        </r-for>
      </div>
    `;
  }
})
export class HomeComponent extends LitElement
  implements OnInit, OnDestroy, OnUpdate {
  private timer = timer(100, 1000).pipe(
    map(() => {
      const date = new Date();
      return [
        [date.getHours(), 'hours'].join(' '),
        [date.getSeconds(), ' seconds'].join(' ')
      ].join(' - ');
    })
  );

  @Inject(SpaceXService)
  private spacexService: SpaceXService;

  private launches: Observable<ILaunch[]> = defer(() =>
    this.spacexService.getLaunches()
  );

  OnInit() {
    console.log('Home component init');
  }

  OnDestroy() {
    console.log('Home component destroyed');
  }

  OnUpdate() {
    console.log('Home component updated');
  }
}
