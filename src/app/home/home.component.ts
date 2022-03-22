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
      margin-bottom: 10px;
    }
    .fill2 {
      background: green;
      flex: 1;
    }

    .height {
      height: 100px;
    }
  `,
  modifiers: [FlexLayout, AngularLayout],
  template(this: HomeComponent) {
    return html`
    <rx-button ngIf=${!!this.test}>
      Test
    </rx-button>
    <rx-button palette="primary" @click=${() => this.changeTest()}>
      If condition test
    </rx-button>

    <rx-divider type="icon"></rx-divider>
    
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
 
    <rx-divider></rx-divider>

    <div fxLayout="row" >
      <div fxFlex="20%" class="blocks">1</div>
      <div fxFlex="25%" class="blocks">2</div>
      <div fxFlex class="blocks">3</div>
    </div>

    <rx-divider></rx-divider>

    <div style="padding-top: 10px;height: 200px" fxLayout="row wrap" fxLayoutGap="10px">
      <div><div class="fill" fxLayoutAlign="center center" fxFlexFill>A</div></div>
      <div><div class="fill" fxLayoutAlign="center center" fxFlexFill>B</div></div>
      <div><div class="fill" fxLayoutAlign="center center" fxFlexFill>C</div></div>
      <div><div class="fill" fxLayoutAlign="center center" fxFlexFill>D</div></div>
    </div>

    <rx-divider></rx-divider>

    <div style="padding-top: 10px;height: 200px" fxLayout="row" fxLayoutGap="10px">
      <div><div style="background: red;" fxLayoutAlign="center center" fxFlexFill>A</div></div>
      <div><div style="background: green;" fxLayoutAlign="center center" fxFlexFill>B</div></div>
      <div><div style="background: purple;" fxLayoutAlign="center center" fxFlexFill>C</div></div>
      <div><div style="background: gray;" fxLayoutAlign="center center" fxFlexFill>D</div></div>
    </div>

    <rx-divider></rx-divider>

    <div fxLayout="row wrap" fxLayoutAlign="space-evenly stretch" fxLayoutGap="10px">
      <rx-button palette="primary" @click=${() => this.setFxLayout('row')}>Row</rx-button>
      <rx-button palette="primary" @click=${() => this.setFxLayout('column')}>Column</rx-button>
      <rx-button palette="primary" @click=${() => this.setFxLayout('row wrap')}>Row Wrap</rx-button>
    </div>

    <rx-divider></rx-divider>

    <mat-card fxLayout=${this.fxLayout} >
        <mat-card class="fill"><div fxLayoutAlign="center center"  class="height">1. Children</div></mat-card> 
        <mat-card class="fill "><div fxLayoutAlign="center center"  class="height">2. Children</div></mat-card> 
        <mat-card class="fill"><div fxLayoutAlign="center center"  class="height">3. Children</div></mat-card>
    </mat-card>

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
