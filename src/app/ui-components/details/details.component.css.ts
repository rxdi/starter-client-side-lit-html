import { css } from '@rxdi/lit-html';

export const style = css`

  .content h1 {
    font-size: 35px;
    font-weight: bold;
  }
  .content h2 {
    font-size: 30px;
    font-weight: 500;
  }
  .content h3 {
    font-size: 25px;
    font-weight: 500;
  }
  p code {
    color: #2c3e5c !important;
  }
  .container {
    margin: 0 auto;
    margin-top: 50px;
    width: 70%;
    padding: 85px 50px 0;
  }
  .filename {
    background: #151515;
    color: #fff;
    padding: 12px 30px;
    margin: 35px 0 -35px;
    display: block;
    min-height: 25px;
    position: relative;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    overflow: hidden;
    font-size: 15px;
  }
  .language-yml {
      color: #930404 !important;
  }
  .filename + pre[class*='language-'],
  .hide + pre[class*='language-'],
  .filename + div + pre[class*='language-'],
  .hide + div + pre[class*='language-'] {
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
  code {
    font-family: Inconsolata, Consolas, 'Courier New', monospace;
    padding: 2px 6px;
    color: #2876d2;
    border-radius: 4px;
    font-size: 15px;
    white-space: pre-wrap;
    background: #f0f2f3;
  }
  pre {
    box-shadow: 0 5px 55px rgba(162, 162, 162, 0.25),
      0 10px 10px rgba(0, 0, 0, 0.22);
  }
  code[class*='language-'],
  pre[class*='language-'] {
    letter-spacing: normal;
    color: #1c1f24;
    background: none;
    font-family: Inconsolata, Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono',
      monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 25px;
    font-size: 16px;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }
  @media print {
    code[class*='language-'],
    pre[class*='language-'] {
      text-shadow: none;
    }
  }
  pre[class*='language-'],
  :not(pre) > code[class*='language-'] {
    background: #f5f5f5;
    border-radius: 6px;
  }
  /* Code blocks */
  pre[class*='language-'] {
    padding: 0 30px 26px;
    margin: 35px 0;
    overflow: auto;
    border: 0;
  }
  /* Inline code */
  :not(pre) > code[class*='language-'] {
    padding: 0.15em 0.2em 0.05em;
    border-radius: 0.3em;
    border: 0.13em solid #7a6652;
    white-space: normal;
  }
  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #7a8186;
  }
  .token.punctuation {
    opacity: 0.7;
  }
  .namespace {
    opacity: 0.7;
  }
  .token.property,
  .token.tag,
  .token.boolean,
  .token.number,
  .token.constant,
  .token.symbol {
    color: #ffc093;
  }
  .language-html .tag {
    color: #93d7f1;
  }
  .language-html .punctuation {
    color: white;
  }
  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #3594e2;
  }
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #caffa8;
  }
  .token.function,
  .token.operator {
    color: #36a3b9;
  }
  .token.atrule,
  .token.attr-value,
  .token.keyword {
    color: #b32f82;
  }
  .token.regex,
  .token.important {
    color: #e90;
  }
  .token.important,
  .token.bold {
    font-weight: bold;
  }
  .token.italic {
    font-style: italic;
  }
  .token.entity {
    cursor: help;
  }
  .token.deleted {
    color: red;
  }
  div.prism-show-language {
    position: relative;
  }
  div.prism-show-language > div.prism-show-language-label {
    display: none;
  }
  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .transition {
    -webkit-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    -ms-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
    transition: all 200ms cubic-bezier(0.7, 0, 0.3, 1);
  }
  .transition-fast {
    -webkit-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    -ms-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
    transition: all 100ms cubic-bezier(0.7, 0, 0.3, 1);
  }
  .transition-slow {
    -webkit-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    -moz-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    -ms-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    -o-transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
    transition: all 520ms cubic-bezier(0.7, 0, 0.3, 1);
  }
  /* CLEARFIX */
  .clearfix {
    *zoom: 1;
  }
  .clearfix:before,
  .clearfix:after {
    content: ' ';
    display: table;
  }
  .clearfix:after {
    clear: both;
  }
  .center-element {
    position: absolute;
    top: 50%;
    left: 50%;
    -webkit-transform: translateX(-50%) translateY(-50%);
    -moz-transform: translateX(-50%) translateY(-50%);
    -ms-transform: translateX(-50%) translateY(-50%);
    -o-transform: translateX(-50%) translateY(-50%);
    transform: translateX(-50%) translateY(-50%);
  }
  .center-left {
    position: absolute;
    left: 50%;
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    transform: translateX(-50%);
  }
  .center-top {
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateY(-50%);
  }
  .box-sizing {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  *:focus {
    outline: none;
  }
  /* Main Layout */
  .bg {
    background-image: linear-gradient(#1c1f24, #24292f);
  }
  .bg.context {
    background-color: #21262c;
  }
  .version-labels {
    background-color: #6f42be;
  }
  .version-labels.new {
    background-color: #33a743;
  }
  .version-labels.new {
    background-color: #2767d7;
  }
  .version-labels .sha {
    background-color: #554888;
  }
  ul {
    border-left: 1px solid #303539;
    list-style-type: none;
  }
  li {
    padding-bottom: 5px;
    list-style-type: none;
  }
  li p {
    margin: 10px;
  }
  .suggestion-label {
    background-color: #2766d6;
  }
  .flex {
    display: flex;
  }
  .spacer {
    flex: 1 3 auto;
  }
  .pointer {
    cursor: pointer;
  }
  .center {
    text-align: center;
  }
  a {
    text-decoration: none;
    color: #0894e2;
  }
  strong {
    font-weight: 600;
  }
  hr {
    width: 100%;
    height: 4px;
    background: #37a5bc;
    border: 0;
    margin: 50px 0;
  }
  h4 {
    font-size: 20px;
  }
  blockquote {
    line-height: 1.6;
    position: relative;
    margin: 35px 0;
    background: #f9eff1;
    padding: 20px;
  }
  blockquote::before {
    height: 100%;
    width: 5px;
    content: '';
    background: #37a5bc;
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
  }
  blockquote strong {
    color: #37a5bc;
  }
  blockquote strong:first-of-type {
    display: block;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: bold;
  }
  blockquote.warning {
    background: #3e3d3a;
  }
  blockquote.warning::before {
    background: #ffb36f;
  }
  blockquote.warning strong,
  blockquote.warning a {
    color: #ed8529;
  }
  blockquote.info {
    background: rgba(8, 148, 226, 0.038);
  }
  blockquote.info::before {
    background: #0894e2;
  }
  blockquote.info strong,
  blockquote.info a {
    color: #0894e2;
  }
  figure {
    margin: 60px 30px;
    text-align: center;
  }
  @media only screen and (max-width: 767px) {
    figure {
      margin: 60px 0;
    }
  }
  figure img {
    max-width: 100%;
    height: auto;
    box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.08);
  }
  figcaption {
    color: rgba(243, 245, 247, 0.9);
    font-size: 16px;
    margin: 20px 0;
  }
  figcaption p {
    font-size: 16px;
  }
  table {
    width: 100%;
    margin: 40px 0;
  }
  @media only screen and (max-width: 767px) {
    tr {
      margin-bottom: 20px;
      display: block;
    }
    tr:last-of-type {
      margin-bottom: 0;
    }
  }
  th {
    padding: 20px;
    background: #efefef;
  }
  tr:nth-of-type(even) td {
    background: #f7f7f7;
  }
  tr:nth-of-type(odd) td:first-of-type {
    border-right: 1px solid #f0f2f3;
  }
  @media only screen and (max-width: 767px) {
    tr:nth-of-type(odd) td:first-of-type {
      border-right: 0;
      border-bottom: 1px solid #f0f2f3;
    }
  }
  tr:nth-of-type(even) td:first-of-type {
    border-right: 1px solid #fff;
  }
  @media only screen and (max-width: 767px) {
    tr:nth-of-type(even) td:first-of-type {
      border-right: 0;
      border-bottom: 1px solid #fff;
    }
  }
  tr td {
    padding: 20px 30px;
    vertical-align: top;
  }
  @media only screen and (max-width: 767px) {
    tr td {
      display: block;
      padding: 20px;
    }
  }
  .file-tree {
    background: #f9f9f9;
    border: 4px solid #f5f5f5;
    margin: 40px 0;
    padding: 16px 32px;
  }
  .file-tree .item {
    display: block;
    line-height: 32px;
    font-size: 15px;
    color: #5a5a5a;
  }
  .file-tree .children {
    padding-left: 30px;
    position: relative;
    overflow: hidden;
  }
  .file-tree .children .item {
    position: relative;
  }
  .file-tree .children .item:before {
    content: '';
    left: -18px;
    bottom: 16px;
    width: 16px;
    height: 9999px;
    position: absolute;
    border-width: 0 0 1px 1px;
    border-style: solid;
    border-color: #dbdbdb;
    border-radius: 0 0 0 3px;
  }
  .external {
    background: #f7f7f7;
  }
  .external::before {
    background: #e8e8e8;
  }
  .ps > .ps__scrollbar-y-rail {
    width: 10px;
  }
  .ps:hover > .ps__scrollbar-y-rail > .ps__scrollbar-y,
  .ps > .ps__scrollbar-y-rail:hover > .ps__scrollbar-y,
  .ps > .ps__scrollbar-y-rail:active > .ps__scrollbar-y {
    width: 6px !important;
    background: #151515;
  }
  .ps > .ps__scrollbar-y-rail > .ps__scrollbar-y {
    border-radius: 0;
    -webkit-border-radius: 0;
  }
  .hide {
    display: none !important;
  }
  /*
   * Container style
   */
  .ps {
    overflow: hidden !important;
    overflow-anchor: none;
    -ms-overflow-style: none;
    touch-action: auto;
    -ms-touch-action: auto;
  }
  /*
   * Scrollbar rail styles
   */
  .ps__rail-x {
    display: none;
    opacity: 0;
    transition: background-color 0.2s linear, opacity 0.2s linear;
    -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
    height: 15px;
    /* there must be 'bottom' or 'top' for ps__rail-x */
    bottom: 0px;
    /* please don't change 'position' */
    position: absolute;
  }
  .ps__rail-y {
    display: none;
    opacity: 0;
    transition: background-color 0.2s linear, opacity 0.2s linear;
    -webkit-transition: background-color 0.2s linear, opacity 0.2s linear;
    width: 15px;
    /* there must be 'right' or 'left' for ps__rail-y */
    right: 0;
    /* please don't change 'position' */
    position: absolute;
  }
  .ps--active-x > .ps__rail-x,
  .ps--active-y > .ps__rail-y {
    display: block;
    background-color: transparent;
  }
  .ps:hover > .ps__rail-x,
  .ps:hover > .ps__rail-y,
  .ps--focus > .ps__rail-x,
  .ps--focus > .ps__rail-y,
  .ps--scrolling-x > .ps__rail-x,
  .ps--scrolling-y > .ps__rail-y {
    opacity: 0.6;
  }
  .ps__rail-x:hover,
  .ps__rail-y:hover,
  .ps__rail-x:focus,
  .ps__rail-y:focus {
    background-color: #eee;
    opacity: 0.9;
  }
  /*
   * Scrollbar thumb styles
   */
  .ps__thumb-x {
    background-color: #aaa;
    border-radius: 6px;
    transition: background-color 0.2s linear, height 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s linear, height 0.2s ease-in-out;
    height: 6px;
    /* there must be 'bottom' for ps__thumb-x */
    bottom: 2px;
    /* please don't change 'position' */
    position: absolute;
  }
  .ps__thumb-y {
    background-color: #aaa;
    border-radius: 6px;
    transition: background-color 0.2s linear, width 0.2s ease-in-out;
    -webkit-transition: background-color 0.2s linear, width 0.2s ease-in-out;
    width: 6px;
    /* there must be 'right' for ps__thumb-y */
    right: 2px;
    /* please don't change 'position' */
    position: absolute;
  }
  .ps__rail-x:hover > .ps__thumb-x,
  .ps__rail-x:focus > .ps__thumb-x {
    background-color: #999;
    height: 11px;
  }
  .ps__rail-y:hover > .ps__thumb-y,
  .ps__rail-y:focus > .ps__thumb-y {
    background-color: #999;
    width: 11px;
  }
  /* MS supports */
  @supports (-ms-overflow-style: none) {
    .ps {
      overflow: auto !important;
    }
  }
  @media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {
    .ps {
      overflow: auto !important;
    }
  }
  /*
   TODO: Remove important flags after this bug if fixed:
   https://github.com/angular/flex-layout/issues/381
   */
  perfect-scrollbar {
    position: relative;
    display: block;
    overflow: hidden;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    /* stylelint-disable */
    /* stylelint-enable */
  }
  perfect-scrollbar[hidden] {
    display: none;
  }
  perfect-scrollbar[fxflex] {
    display: flex;
    flex-direction: column;
    -webkit-box-orient: column;
    -webkit-box-direction: column;
    height: auto;
    min-width: 0;
    min-height: 0;
  }
  perfect-scrollbar[fxflex] > .ps {
    flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    width: auto;
    height: auto;
    min-width: 0;
    min-height: 0;
  }
  perfect-scrollbar[fxlayout] > .ps,
  perfect-scrollbar[fxlayout] > .ps > .ps-content {
    display: flex;
    flex: 1 1 auto;
    -ms-flex: 1 1 auto;
    -webkit-box-flex: 1;
    align-item: inherit;
    place-content: inherit;
    -webkit-box-pack: inherit;
    -webkit-box-align: inherit;
    flex-direction: inherit;
    -webkit-box-orient: inherit;
    -webkit-box-direction: inherit;
    width: 100%;
    height: 100%;
  }
  perfect-scrollbar[fxlayout='row'] > .ps,
  perfect-scrollbar[fxlayout='row'] > .ps > .ps-content {
    flex-direction: row !important;
    -webkit-box-orient: row !important;
    -webkit-box-direction: row !important;
  }
  perfect-scrollbar[fxlayout='column'] > .ps,
  perfect-scrollbar[fxlayout='column'] > .ps > .ps-content {
    flex-direction: column !important;
    -webkit-box-orient: column !important;
    -webkit-box-direction: column !important;
  }
  perfect-scrollbar > .ps {
    position: static;
    display: block;
    width: inherit;
    height: inherit;
    max-width: inherit;
    max-height: inherit;
  }
  perfect-scrollbar > .ps > .ps-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    overflow: hidden;
    pointer-events: none;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right,
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {
    position: absolute;
    opacity: 0;
    transition: opacity 300ms ease-in-out;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top,
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {
    left: 0;
    min-width: 100%;
    min-height: 24px;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left,
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {
    top: 0;
    min-width: 24px;
    min-height: 100%;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-top {
    top: 0;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-left {
    left: 0;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-right {
    right: 0;
  }
  perfect-scrollbar > .ps > .ps-overlay .ps-indicator-bottom {
    bottom: 0;
  }
  perfect-scrollbar > .ps.ps--active-y > .ps__rail-y {
    top: 0 !important;
    right: 0 !important;
    width: 10px;
    cursor: default;
    transition: width 200ms linear, opacity 200ms linear,
      background-color 200ms linear;
  }
  perfect-scrollbar > .ps.ps--active-y > .ps__rail-y:hover {
    width: 15px;
  }
  perfect-scrollbar > .ps.ps--active-x > .ps__rail-x {
    bottom: 0 !important;
    left: 0 !important;
    height: 10px;
    cursor: default;
    transition: height 200ms linear, opacity 200ms linear,
      background-color 200ms linear;
  }
  perfect-scrollbar > .ps.ps--active-x > .ps__rail-x:hover {
    height: 15px;
  }
  perfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-y {
    margin: 0 0 10px;
  }
  perfect-scrollbar > .ps.ps--active-x.ps--active-y > .ps__rail-x {
    margin: 0 10px 0 0;
  }
  perfect-scrollbar > .ps.ps--scrolling-y > .ps__rail-y {
    opacity: 0.9;
    background-color: #eee;
  }
  perfect-scrollbar > .ps.ps--scrolling-x > .ps__rail-x {
    opacity: 0.9;
    background-color: #eee;
  }
  perfect-scrollbar.ps-show-always > .ps.ps--active-y > .ps__rail-y {
    opacity: 0.6;
  }
  perfect-scrollbar.ps-show-always > .ps.ps--active-x > .ps__rail-x {
    opacity: 0.6;
  }
  perfect-scrollbar.ps-show-active
    > .ps.ps--active-y
    > .ps-overlay:not(.ps-at-top)
    .ps-indicator-top {
    opacity: 1;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active
    > .ps.ps--active-y
    > .ps-overlay:not(.ps-at-bottom)
    .ps-indicator-bottom {
    opacity: 1;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active
    > .ps.ps--active-x
    > .ps-overlay:not(.ps-at-left)
    .ps-indicator-left {
    opacity: 1;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active
    > .ps.ps--active-x
    > .ps-overlay:not(.ps-at-right)
    .ps-indicator-right {
    opacity: 1;
    background: linear-gradient(
      to left,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-y
    > .ps-overlay.ps-at-top
    .ps-indicator-top {
    background: linear-gradient(
      to bottom,
      rgba(170, 170, 170, 0.5) 0%,
      rgba(170, 170, 170, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-y
    > .ps-overlay.ps-at-top
    .ps-indicator-top.ps-indicator-show {
    opacity: 1;
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-y
    > .ps-overlay.ps-at-bottom
    .ps-indicator-bottom {
    background: linear-gradient(
      to top,
      rgba(170, 170, 170, 0.5) 0%,
      rgba(170, 170, 170, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-y
    > .ps-overlay.ps-at-bottom
    .ps-indicator-bottom.ps-indicator-show {
    opacity: 1;
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-x
    > .ps-overlay.ps-at-left
    .ps-indicator-left {
    background: linear-gradient(
      to right,
      rgba(170, 170, 170, 0.5) 0%,
      rgba(170, 170, 170, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-x
    > .ps-overlay.ps-at-left
    .ps-indicator-left.ps-indicator-show {
    opacity: 1;
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-x
    > .ps-overlay.ps-at-right
    .ps-indicator-right {
    background: linear-gradient(
      to left,
      rgba(170, 170, 170, 0.5) 0%,
      rgba(170, 170, 170, 0) 100%
    );
  }
  perfect-scrollbar.ps-show-active.ps-show-limits
    > .ps.ps--active-x
    > .ps-overlay.ps-at-right
    .ps-indicator-right.ps-indicator-show {
    opacity: 1;
  }
  .lds-ellipsis {
    display: inline-block;
    position: relative;
    width: 64px;
    height: 64px;
  }
  .lds-ellipsis div {
    position: absolute;
    top: 27px;
    width: 11px;
    height: 11px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
    left: 6px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
    left: 6px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
    left: 26px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
    left: 45px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(19px, 0);
    }
  }
`;
