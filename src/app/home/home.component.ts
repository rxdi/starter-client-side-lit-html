import {
  Component,
  css,
  html,
  LitElement,
  state,
} from '@rxdi/lit-html';

import { AngularLayout, FlexLayout } from './modifiers';

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
      /* margin-bottom: 10px; */
    }
    .fill2 {
      background: green;
      flex: 1;
    }
    .flex-align div {
      min-height: 50px;
      color: #fff;
      background-color: #292929;
    }
    .height {
      height: 100px;
    }
  `,
  modifiers: [FlexLayout, AngularLayout],
  template(this: HomeComponent) {
    return html`

    <rx-divider type="icon"></rx-divider>
    
    <h3 fxLayoutAlign="center">Flex layout align dynamically (fxLayoutAlign)</h3>

    <div fxLayout="row wrap" fxLayoutAlign="space-evenly stretch" fxLayoutGap="10px">
      <rx-button palette="primary" @click=${() => this.setFxLayoutAlign('space-between start')}>
        Space Between Start
      </rx-button>
      <rx-button palette="primary" @click=${() => this.setFxLayoutAlign('space-between center')}>
        Space Between Center
      </rx-button>
      <rx-button palette="primary" @click=${() => this.setFxLayoutAlign('space-between end')}>
        Space Between End
      </rx-button>
      <rx-button palette="primary" @click=${() => this.setFxLayoutAlign('space-around start')}>
        Space Between Start
      </rx-button>
      <rx-button palette="primary" @click=${() => this.setFxLayoutAlign('space-around center')}>
        Space Between Center
      </rx-button>
      <rx-button palette="primary" @click=${() => this.setFxLayoutAlign('space-around end')}>
        Space Between End
      </rx-button>
      <rx-button palette="primary" @click=${() => this.setFxLayoutAlign('center start')}>
        Start Center
      </rx-button>
      <rx-button palette="primary" @click=${() => this.setFxLayoutAlign('center center')}>
        Center Center
      </rx-button>
      <rx-button palette="primary" @click=${() => this.setFxLayoutAlign('center end')}>
        End Center
      </rx-button>
    </div>

    <rx-divider></rx-divider>

    <div fxLayout="row" fxLayoutAlign=${this.fxLayoutAlign} >
      <div class="blocks">1</div>
      <div style="height: 100px" class="blocks">2</div>
      <div class="blocks">3</div>
    </div>
 
    <rx-divider type="icon"></rx-divider>

    <h3 fxLayoutAlign="center">Flex max-width (fxFlex)</h3>

    <div fxLayout="row" >
      <div fxFlex="20%" class="blocks">1</div>
      <div fxFlex="25%" class="blocks">2</div>
      <div fxFlex class="blocks">3</div>
    </div>

    <rx-divider type="icon"></rx-divider>
    <h3 fxLayoutAlign="center">Layout row wrap (fxLayout)</h3>

    <div style="padding-top: 10px;height: 200px" fxLayout="row wrap" fxLayoutGap="10px">
      <div><div class="fill" fxLayoutAlign="center center" fxFlexFill>A</div></div>
      <div><div class="fill" fxLayoutAlign="center center" fxFlexFill>B</div></div>
      <div><div class="fill" fxLayoutAlign="center center" fxFlexFill>C</div></div>
      <div><div class="fill" fxLayoutAlign="center center" fxFlexFill>D</div></div>
    </div>

    <rx-divider type="icon"></rx-divider>
    <h3 fxLayoutAlign="center">Flex Fill (fxFlexFill)</h3>

    <div style="padding-top: 10px;height: 200px" fxLayout="row" fxLayoutGap="10px">
      <div><div style="background: red;" fxLayoutAlign="center center" fxFlexFill>A</div></div>
      <div><div style="background: green;" fxLayoutAlign="center center" fxFlexFill>B</div></div>
      <div><div style="background: purple;" fxLayoutAlign="center center" fxFlexFill>C</div></div>
      <div><div style="background: gray;" fxLayoutAlign="center center" fxFlexFill>D</div></div>
    </div>

    <rx-divider type="icon"></rx-divider>
    <h3 fxLayoutAlign="center">Dynamic directive change (fxFlexAlign)</h3>

    <div fxLayout="row wrap" fxLayoutAlign="space-evenly stretch" fxLayoutGap="10px">
      <rx-button palette="primary" @click=${() => this.setFxLayout('row')}>Row</rx-button>
      <rx-button palette="primary" @click=${() => this.setFxLayout('column')}>Column</rx-button>
    </div>

    <rx-divider></rx-divider>

    <mat-card fxLayout=${this.fxLayout} fxLayoutGap="10px">
      <mat-card class="fill">
        <div fxLayoutAlign="center center"  class="height">A</div>
      </mat-card> 
      <mat-card class="fill">
        <div fxLayoutAlign="center center"  class="height">B</div>
      </mat-card> 
      <mat-card class="fill">
        <div fxLayoutAlign="center center"  class="height">C</div>
      </mat-card>
    </mat-card>

    <rx-divider type="icon"></rx-divider>

    <h3 fxLayoutAlign="center">Flex Align (fxFlexAlign)</h3>

    <div
      style="min-height: 200px;"
      fxLayout="row"
      fxLayoutGap="5px"
      class="flex-align"
    >
      <div fxLayoutAlign="center" fxFlexAlign="flex-start">A</div>
      <div fxLayoutAlign="center" fxFlexAlign="stretch">B</div>
      <div fxLayoutAlign="center" fxFlexAlign="center">C</div>
      <div fxLayoutAlign="center" fxFlexAlign="flex-end">D</div>
    </div>

    <rx-divider type="icon"></rx-divider>

    <h3 fxLayoutAlign="center">Flex Offset (fxFlexOffset)</h3>

    <div fxLayout="row">
      <div fxFlexOffset="10px">1. One</div>
      <div fxFlexOffset="5%">2. Two</div>
      <div fxFlexOffset="10vw">3. Three</div>
      <div fxFlexOffset="5vh">4. Four</div>
    </div>

    <rx-divider type="icon"></rx-divider>

    <h3 fxLayoutAlign="center">Flex Ordering (fxFlexOrder)</h3>

    <div fxLayout="row">
      <div fxFlexOrder="4">1. One</div>
      <div fxFlexOrder="2">2. Two</div>
      <div fxFlexOrder="3">3. Three</div>
      <div fxFlexOrder="1">4. Four</div>
    </div>
    `;
  },
})
export class HomeComponent extends LitElement {

  @state()
  test = true;

  changeTest() {
    this.test = !this.test;
  }

  @state()
  fxLayout = 'column';


  @state()
  fxLayoutAlign = 'space-between stretch';

  setFxLayout(fxLayout: string) {
    this.fxLayout = fxLayout;
  }

  setFxLayoutAlign(fxLayout: string) {
    this.fxLayoutAlign = fxLayout;
  }
}
