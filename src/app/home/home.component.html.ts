import { html, styleMap, StyleInfo } from '@rxdi/lit-html';
import { HomeComponent } from './home.component';

const normalStyles = <StyleInfo>{
  width: '100%',
  height: '500px',
  border: '0px',
  'border-radius': '4px'
};
const hiddenStyle = {
  visibility: 'hidden'
};

const highlightedStyle = {
  visibility: 'visible'
};

export const template = function(this: HomeComponent) {
  return html`
    <div class="view">
      <div class="container">
        <h1 class="center">
          A rich framework for building applications and services with GraphQL
          and Apollo inspired by Angular
        </h1>
        <div class="center content">
          <!-- <h2>Start with a simple CLI command</h2> -->

          <img
            src="https://raw.githubusercontent.com/Stradivario/gapi-cli-docs/master/src/assets/images/cli-logo.png"
          />
        </div>
        <h1 style="margin-top: 60px;" class="center">
          Live preview
        </h1>
        <p class="center">
          See how your application may potentially look like without leaving
          your personal browser.
        </p>
      </div>
      <div
        style=${styleMap(this.showIFrame ? hiddenStyle : highlightedStyle)}
        class="center"
      >
        <div class="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <div class="ide">
        <div>
          <iframe
            @load=${() => (this.showIFrame = true)}
            style=${styleMap(
              this.showIFrame
                ? { ...highlightedStyle, ...normalStyles }
                : { ...hiddenStyle, ...normalStyles }
            )}
            src="https://codesandbox.io/embed/zr7758nq0l?fontsize=14&module=%2Fsrc%2Fapp%2Fapp.controller.ts"
            sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
          >
          </iframe>
        </div>
      </div>

      <div class="container">
        <h3 class="center" style="margin-top: 60px">
          Graphql server enables developers to focus on writing reusable
          application logic instead of spending time building infrastructure.
          <br />
          <br />
          Created to provide complex backend scalable applications with minimum
          effort.
        </h3>
      </div>
      <div class="container">
        <div class="flex">
          <div style="margin: 0 auto;" class="box content">
            <div style="margin: 0 auto;text-align: center">
              <h2 style="margin-top: 5px;">Integrates with your</h2>
              <img
                style="width: 190px;"
                src="https://graphql-modules.com/img/home/companies/apollo-logo.png"
              />
            </div>
            <p style="text-align: justify">
              GraphQL Modules is a set of extra tools, structures and guidelines
              around the amazing Apollo Server 2.0. You’ll see how effective
              those tools are once you’ll start growing and scaling your GraphQL
              server.
            </p>
          </div>
          <div style="margin: 0 auto;" class="box content">
            <div style="margin: 0 auto;text-align: center">
              <h2 style="margin-top: 5px;">Build with</h2>
              <img
                style="width: 100px;"
                src="https://hapijs.com/public/img/logo.svg"
              />
            </div>
            <p style="text-align: justify">
              GraphQL Modules is a set of extra tools, structures and guidelines
              around the amazing Apollo Server 2.0. You’ll see how effective
              those tools are once you’ll start growing and scaling your GraphQL
              server.
            </p>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="flex">
          <div style="margin: 0 auto;width: 160px;" class="box content">
            <div style="margin: 0 auto;text-align: center">
              <h2 style="margin-top: 5px;">Integrates with your</h2>
            </div>
            <p style="text-align: justify">
              Gives you true flexibility by allowing use of any other libraries
              thanks to modular architecture.
            </p>
          </div>
          <div style="margin: 0 auto;width: 160px;" class="box content">
            <div style="margin: 0 auto;text-align: center">
              <h2 style="margin-top: 5px;">Build with</h2>
            </div>
            <p style="text-align: justify">
              An adaptable ecosystem that is a fully-fledged backbone for all
              kinds of server-side applications.
            </p>
          </div>
          <div style="margin: 0 auto;width: 160px;" class="box content">
            <div style="margin: 0 auto;text-align: center">
              <h2 style="margin-top: 5px;">Build with</h2>
            </div>
            <p style="text-align: justify">
              Takes advantage of latest JavaScript features, bringing design
              patterns and mature solutions to node.js world.
            </p>
          </div>
        </div>
      </div>

      <h1 style="text-align: center">Prepared for the fast flight ?</h1>
      <div class="plane"></div>
      <div class="container center content">
        <h2>Need Help?</h2>
        <h3>We've Got You Covered!</h3>
        <p>
          Check out our
          <span
            class="pointer"
            style="color: #b6a441"
            routerLink="/documentation/introduction"
            >docs</span
          >, open an issue on our
          <a
            style="color: #b6a441"
            target="_blank"
            href="https://github.com/Stradivario/gapi-core"
            >GitHub</a
          >
          repo or simply contact us directly! We would love to help you with
          Apollo, GraphQL and anything in between! We can help you get started
          or scale GraphQL across your whole organization.
        </p>
      </div>
    </div>
  `;
};
