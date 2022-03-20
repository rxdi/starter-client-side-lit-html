import {
  Component,
  css,
  html,
  OnDestroy,
  OnInit,
  OnUpdate,
} from '@rxdi/lit-html';
import { BaseComponent } from '@shared/base.component';
import { map } from 'rxjs/operators';

import { fx } from './fx';
import { layout } from './layout';
import { fxFlexFill, fxLayout, fxLayoutAlign, fxLayoutGap } from './parts';

/**
 * @customElement home-component
 */
@Component({
  selector: 'home-component',
  style: css`
    .blocks {
      width: 50px;
      height: 50px;
      background-color: #c1daf6;
    }

    .fill {
      background: red;
      flex: 1;
    }
    .fill2 {
      background: green;
      flex: 1;
    }
  `,
  template(this: HomeComponent) {
    return html`
    <div ${fx} fxLayout="row" fxLayoutAlign="space-between stretch">
      <div class="blocks">1</div>
      <div style="height: 100px" class="blocks">2</div>
      <div class="blocks">3</div>
    </div>
    <br>
    <div ${fx} fxLayout="row" fxLayoutAlign="space-evenly stretch">
      <div class="blocks">1</div>
      <div style="height: 100px" class="blocks">2</div>
      <div class="blocks">3</div>
    </div>
    <br>
    <div ${fx} fxLayout="row" fxFlexFill>
      <div fxFlex="20%" class="blocks">1</div>
      <div fxFlex="25%" class="blocks">2</div>
      <div fxFlex class="blocks">3</div>
    </div>

    <div ${fx} style="padding-top: 10px;height: 200px" fxLayout="row" fxLayoutGap="10px">
      <div ${fx}><div class="fill" fxLayoutAlign="center center" fxFlexFill>A</div></div>
      <div ${fx}><div class="fill" fxLayoutAlign="center center" fxFlexFill>B</div></div>

      <div ${fx}><div class="fill" fxLayoutAlign="center center" fxFlexFill>C</div></div>

      <div ${fx}><div class="fill" fxLayoutAlign="center center" fxFlexFill>D</div></div>
    </div>


    <div style="padding-top: 10px;height: 200px" ${fxLayout('row')} ${fxLayoutGap('10px')}>
      <div><div class="fill2" ${fxLayoutAlign('center center')} ${fxFlexFill}>A</div></div>
      <div><div class="fill2" ${fxLayoutAlign('center center')} ${fxFlexFill}>B</div></div>
      <div><div class="fill2" ${fxLayoutAlign('center center')} ${fxFlexFill}>C</div></div>
      <div><div class="fill2" ${fxLayoutAlign('center center')} ${fxFlexFill}>D</div></div>
    </div>


    <div ${layout}>
      <div style="padding-top: 10px;height: 200px" fxLayout="row" fxLayoutGap="10px">
        <div><div style="background: red;" fxLayoutAlign="center center" fxFlexFill>A</div></div>
        <div><div style="background: green;" fxLayoutAlign="center center" fxFlexFill>B</div></div>
        <div><div style="background: purple;" fxLayoutAlign="center center" fxFlexFill>C</div></div>
        <div><div style="background: gray;" fxLayoutAlign="center center" fxFlexFill>D</div></div>
      </div>
    </div>
    `;
  },
})
export class HomeComponent
  extends BaseComponent
  implements OnInit, OnDestroy, OnUpdate {

  OnInit() {
    console.log('Home component init');
  }

  OnDestroy() {
    console.log('Home component destroyed');
  }

  OnUpdate() {
    console.log('Home component updated');
  }

  getLaunches() {
    return this.query({ query: 'launches-past.query.graphql' }).pipe(
      map((res) => res.data.launchesPast)
    );
  }
}
