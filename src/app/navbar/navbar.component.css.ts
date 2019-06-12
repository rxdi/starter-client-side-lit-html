import { css } from '@rxdi/lit-html';

export const style = css`
  .spacer {
    flex: 1 3 auto;
  }

  .pointer {
    cursor: pointer;
  }

  .container2 {
    box-shadow: 0 5px 55px rgba(162, 162, 162, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);

  }
  .btn {
    @apply font-bold py-2 px-4 rounded;
  }
  .btn-blue {
    @apply bg-blue-500 text-white;
  }
  .btn-blue:hover {
    @apply bg-blue-700;
  }
  .element {
    -webkit-transition: height 2s; /* For Safari 3.1 to 6.0 */
    transition: height 2s;
  }
`;
