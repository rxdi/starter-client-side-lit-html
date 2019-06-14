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
    <inject-tailwind></inject-tailwind>
    <original-style-graphql></original-style-graphql>
    <div class="view">
      <div class="container content">
        <h1 class="center">
          A rich framework for building applications and services with GraphQL
          and Apollo inspired by Angular
        </h1>
        <div class="center content">
          <!-- <h2>Start with a simple CLI command</h2> -->

          <img
            style="margin: 0 auto;"
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
        <spinner-default></spinner-default>
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
    </div>
    <h1 class="center">
      Web Components
    </h1>
    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <!-- Column -->
          <div
          @click=${() => this.router.go('/ui-components/rxdi/starter-client-lit-html')}
            class="pointer my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
          >
            <!-- Article -->
            <article
              style="background-color: #27798a;"
              class="overflow-hidden rounded-lg shadow-lg"
            >
              <a>
                <img
                  alt="Placeholder"
                  class="block h-auto w-full"
                  src="https://picsum.photos/600/400/?random"
                />
              </a>

              <header
                class="flex items-center justify-between leading-tight p-2 md:p-4"
              >
                <h1 class="text-lg">
                  <a class="no-underline hover:underline text-white" >
                    @rxdi/ui-components
                  </a>
                </h1>
                <p class="text-grey-darker text-sm">
                  14/4/19
                </p>
              </header>

              <footer
                class="flex items-center justify-between leading-none p-2 md:p-4"
              >
                <a
                  class="flex items-center no-underline hover:underline text-white"
                >
                  <img
                    alt="Placeholder"
                    class="block rounded-full"
                    src="https://picsum.photos/32/32/?random"
                  />
                  <p class="ml-2 text-sm">
                    Kristiyan Tachev (@Stradivario)
                  </p>
                </a>
                <a
                  class="no-underline text-grey-darker hover:text-red-dark"
                  href="#"
                >
                  <span class="hidden">Like</span>
                  <i class="fa fa-heart"></i>
                </a>
              </footer>
            </article>
            <!-- END Article -->
          </div>
          <!-- END Column -->
      </div>
    </div>
  `;
};
