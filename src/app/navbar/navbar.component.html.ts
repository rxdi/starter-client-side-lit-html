import { NavbarComponent } from './navbar.component';
import { html } from '@rxdi/lit-html';

export const template = function(this: NavbarComponent) {
  return html`
    <inject-tailwind></inject-tailwind>
    <nav class="container2 flex items-center justify-between flex-wrap bg p-3">
      <div
        @click=${() => this.router.go('/')}
        class="pointer flex items-center flex-shrink-0 text-white mr-6"
      >
        <img
          class="pointer"
          style="width: 45px;"
          src="https://graphql-server.com/assets/images/logo.png"
        />
        <span
          style="margin-left: 10px;"
          class="font-semibold text-xl tracking-tight"
          >Graphql Server</span
        >
      </div>
      <div
        @click=${() => (this.showSanwich = !this.showSanwich)}
        class="block lg:hidden"
      >
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            class="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <span class="spacer"></span>

      ${this.showSanwich || this.widthHeight.width > 1010
        ? html`
            <div
              class="w-full block flex-grow lg:flex lg:items-center lg:w-auto"
            >
              <div class="text-sm lg:flex-grow">
                <a
                  href="#"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  <app-button text="DOCUMENTATION"></app-button>
                </a>
                <a
                  href="#"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                >
                  <app-button text="RELEASE NOTES"></app-button>
                </a>
                <a
                  href="#"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  <app-button text="API REFERENCE"></app-button>
                </a>
                <a
                  href="#"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  <app-button text="GITHUB"></app-button>
                </a>
                <a
                  href="#"
                  class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white"
                >
                  <app-button text="ABOUT"></app-button>
                </a>
              </div>
              <div>
                <app-button
                  @click=${() => this.router.go('/about')}
                  text="DOWNLOAD"
                ></app-button>
              </div>
            </div>
          `
        : html``}
    </nav>
  `;
};
